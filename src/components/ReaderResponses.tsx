"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/locales";
import { READERS_API, readersHeaders, readerUi } from "@/lib/readers";

type Published = { id: number; name: string; role: string | null; message: string; created_at: string };
type Status = "idle" | "sending" | "done" | "error" | "short";

const field =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent";
const label = "mb-2 block text-[13px] font-medium text-ink";

/**
 * Reader responses: readers write to Jacques; he approves which appear here.
 * Stored in the site's Supabase project (table "responses"). Approval happens in
 * the Supabase table editor by ticking `approved` (only possible when the reader consented).
 */
export default function ReaderResponses({ slug, locale = "en" }: { slug: string; locale?: Locale }) {
  const t = readerUi(locale);
  const [published, setPublished] = useState<Published[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    let alive = true;
    fetch(
      `${READERS_API}/responses?select=id,name,role,message,created_at&article_slug=eq.${encodeURIComponent(
        slug
      )}&order=created_at.asc`,
      { headers: readersHeaders }
    )
      .then((r) => (r.ok ? r.json() : []))
      .then((rows: Published[]) => alive && setPublished(rows))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [slug]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) {
      setStatus("done");
      return;
    }
    const message = String(f.get("message") ?? "").trim();
    if (message.length < 10) {
      setStatus("short");
      return;
    }
    const email = String(f.get("email") ?? "").trim();
    const role = String(f.get("role") ?? "").trim();
    setStatus("sending");
    try {
      const res = await fetch(`${READERS_API}/responses`, {
        method: "POST",
        headers: { ...readersHeaders, Prefer: "return=minimal" },
        body: JSON.stringify({
          article_slug: slug,
          name: String(f.get("name") ?? "").trim().slice(0, 120),
          role: role ? role.slice(0, 160) : null,
          email: email || null,
          message: message.slice(0, 4000),
          ok_to_publish: f.get("consent") === "on",
          locale,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  const dateFmt = new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section id="responses" className="scroll-mt-24 border-t border-ink/5 bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">{t.resEyebrow}</div>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tightish text-ink md:text-4xl">
          {t.resTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{t.resIntro}</p>

        {published.length > 0 && (
          <div className="mt-10">
            <div className="mb-5 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              {t.resPublished}
            </div>
            <div className="space-y-5">
              {published.map((r) => (
                <figure key={r.id} className="rounded-2xl border border-ink/10 bg-paper-warm p-7">
                  <blockquote className="whitespace-pre-line text-[16px] leading-relaxed text-ink">{r.message}</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-medium text-ink">{r.name}</span>
                    {r.role && <span className="text-ink-muted"> · {r.role}</span>}
                    <span className="text-ink-muted"> · {dateFmt.format(new Date(r.created_at))}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {status === "done" ? (
          <p role="status" className="mt-10 rounded-2xl border border-accent/30 bg-paper-warm px-7 py-6 text-[16px] font-medium text-ink">
            {t.resDone}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-2xl border border-ink/10 bg-paper-warm p-7 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="res-name" className={label}>
                  {t.resName}
                </label>
                <input id="res-name" name="name" required maxLength={120} autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="res-role" className={label}>
                  {t.resRole}
                </label>
                <input
                  id="res-role"
                  name="role"
                  maxLength={160}
                  autoComplete="organization-title"
                  placeholder={t.resRolePlaceholder}
                  className={field}
                />
              </div>
            </div>
            <div>
              <label htmlFor="res-message" className={label}>
                {t.resMessage}
              </label>
              <textarea id="res-message" name="message" required rows={6} maxLength={4000} className={field} />
            </div>
            <div>
              <label htmlFor="res-email" className={label}>
                {t.resEmail}
              </label>
              <input id="res-email" name="email" type="email" autoComplete="email" className={field} />
              <p className="mt-2 text-[12px] text-ink-muted">{t.resEmailHint}</p>
            </div>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <label className="flex items-start gap-3 text-[14px] leading-relaxed text-ink-soft">
              <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[var(--color-accent,#b8472d)]" />
              <span>{t.resConsent}</span>
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-paper transition-colors hover:bg-accent disabled:opacity-60"
              >
                {status === "sending" ? t.resSending : t.resSubmit}
              </button>
              {status === "error" && (
                <p role="alert" className="text-sm text-accent">
                  {t.resError}
                </p>
              )}
              {status === "short" && (
                <p role="alert" className="text-sm text-accent">
                  {t.resTooShort}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
