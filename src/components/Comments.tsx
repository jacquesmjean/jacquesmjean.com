"use client";

import { useEffect, useRef } from "react";

const SITE = "https://jacquesmjean.com";
const REPO = "jacquesmjean/jacquesmjean.com";
const CATEGORY = "Perspectives";

type Lang = "en" | "fr" | "es" | "ht" | "pt";

/**
 * Giscus doesn't ship a Haitian-Creole localization, and Portuguese
 * is only available as Brazilian Portuguese. Everything else maps 1:1.
 */
const GISCUS_LANG: Record<Lang, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  ht: "en",
  pt: "pt-BR",
};

/**
 * Comment thread backed by GitHub Discussions via Giscus.
 * One thread per article, keyed by slug.
 *
 * Reader experience: sign in with GitHub, write in Markdown, add reactions.
 * Owner experience: moderation happens in the repo's Discussions tab —
 * no database, no spam filter, no inbox to drain.
 *
 * Environment variables (set in Vercel + .env.local):
 *   NEXT_PUBLIC_GISCUS_REPO_ID       e.g. R_kgDO...
 *   NEXT_PUBLIC_GISCUS_CATEGORY_ID   e.g. DIC_kwDO...
 */
export default function Comments({
  slug,
  locale = "en",
}: {
  slug: string;
  locale?: Lang;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
    const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;
    const container = containerRef.current;

    if (!container) return;

    // If the IDs aren't configured yet, keep the fallback message visible
    // rather than injecting a broken script.
    if (!repoId || !categoryId) return;

    // Clear any previous instance (locale swap, re-render, etc.)
    container.replaceChildren();

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", REPO);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", CATEGORY);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", slug);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", `${SITE}/giscus-theme.css`);
    script.setAttribute("data-lang", GISCUS_LANG[locale]);
    script.setAttribute("data-loading", "lazy");

    container.appendChild(script);
  }, [slug, locale]);

  const configured =
    typeof process.env.NEXT_PUBLIC_GISCUS_REPO_ID === "string" &&
    typeof process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID === "string" &&
    process.env.NEXT_PUBLIC_GISCUS_REPO_ID.length > 0 &&
    process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID.length > 0;

  return (
    <section
      id="comments"
      className="border-t border-ink/5 bg-paper scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
          Join the conversation
        </div>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tightish text-ink md:text-4xl">
          What do you think?
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Comments are signed in with GitHub, threaded, and stored openly on
          this site&rsquo;s repo. Prefer private?{" "}
          <a
            href={`mailto:engage@jacquesmjean.com?subject=Thoughts on your perspective: ${slug}`}
            className="font-medium text-ink underline decoration-accent/50 underline-offset-4 hover:text-accent transition-colors"
          >
            Send me a private note.
          </a>
        </p>

        {!configured && (
          <p className="mt-6 rounded-xl border border-ink/10 bg-paper-warm px-5 py-4 text-sm text-ink-muted">
            Comments are being set up. Check back shortly, or send a private
            note using the link above in the meantime.
          </p>
        )}

        <div ref={containerRef} className="mt-10 giscus" />
      </div>
    </section>
  );
}
