"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/locales";
import { READERS_API, readersHeaders, readerUi } from "@/lib/readers";

type Status = "idle" | "sending" | "done" | "already" | "error";

export default function SubscribeForm({
  locale = "en",
  source,
  variant = "card",
}: {
  locale?: Locale;
  /** Where the signup came from, e.g. the page path. */
  source: string;
  variant?: "card" | "band" | "footer" | "inline";
}) {
  const t = readerUi(locale);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("website")) {
      setStatus("done"); // honeypot filled: quietly ignore bots
      return;
    }
    const email = String(form.get("email") ?? "").trim();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch(`${READERS_API}/subscribers`, {
        method: "POST",
        headers: { ...readersHeaders, Prefer: "return=minimal" },
        body: JSON.stringify({ email, locale, source_path: source.slice(0, 300) }),
      });
      if (res.ok) setStatus("done");
      else if (res.status === 409) setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const dark = variant !== "card";

  return (
    <div
      className={
        variant === "inline"
          ? "text-paper"
          : variant === "footer"
          ? "grid gap-6 text-paper md:grid-cols-2 md:items-end md:gap-12"
          : dark
            ? "rounded-3xl bg-ink px-7 py-10 text-paper md:px-12 md:py-12"
            : "rounded-2xl border border-ink/10 bg-paper-warm px-7 py-8 md:px-9"
      }
    >
      <div className={variant === "inline" ? "hidden" : undefined}>
      <div className={`text-[11px] font-medium uppercase tracking-wider ${dark ? "text-accent-soft" : "text-accent"}`}>
        {t.subEyebrow}
      </div>
      <h3 className={`mt-3 font-display text-2xl font-medium leading-snug md:text-3xl ${dark ? "text-paper" : "text-ink"}`}>
        {t.subTitle}
      </h3>
      <p className={`mt-3 max-w-xl text-[15px] leading-relaxed ${dark ? "text-paper/75" : "text-ink-soft"}`}>
        {t.subBody}
      </p>
      </div>
      <div>

      {status === "done" || status === "already" ? (
        <p
          role="status"
          className={`mt-6 rounded-xl px-5 py-4 text-[15px] font-medium ${dark ? "bg-paper/10 text-paper" : "bg-paper text-ink"}`}
        >
          {status === "done" ? t.subDone : t.subAlready}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor={`sub-${variant}`}>
            {t.subPlaceholder}
          </label>
          <input
            id={`sub-${variant}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.subPlaceholder}
            className={`min-w-0 flex-1 rounded-md border px-5 py-3 text-[15px] outline-none transition-colors focus:border-accent ${
              dark
                ? "border-paper/20 bg-paper/5 text-paper placeholder:text-paper/50"
                : "border-ink/15 bg-paper text-ink placeholder:text-ink-muted"
            }`}
          />
          {/* Honeypot for bots: hidden from people and screen readers */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className={`rounded-md px-6 py-3 text-[15px] font-medium transition-colors disabled:opacity-60 ${
              dark ? "bg-paper text-ink hover:bg-accent hover:text-paper" : "bg-ink text-paper hover:bg-accent"
            }`}
          >
            {status === "sending" ? t.subSending : t.subButton}
          </button>
        </form>
      )}
      {status === "error" && (
        <p role="alert" className={`mt-3 text-sm ${dark ? "text-accent-soft" : "text-accent"}`}>
          {t.subError}
        </p>
      )}
      <p className={`mt-4 text-[12px] ${dark ? "text-paper/50" : "text-ink-muted"}`}>{t.subPrivacy}</p>
      </div>
    </div>
  );
}
