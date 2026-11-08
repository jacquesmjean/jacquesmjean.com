import Link from "next/link";
import type { Messages } from "@/i18n";
import { articleLocales, articles, localizeArticle } from "@/data/articles";
import type { Locale } from "@/i18n";

const DISPATCH_HREFS = ["https://levoila.org/#founder", "https://levoila.org/#dispatches"];

// messages.posts[0] is the translated card for this article; reuse it when it matches.
const TRANSLATED_SLUG = "world-stopped-waiting-for-the-us-sovereign-ai";

interface Card {
  tag: string;
  title: string;
  blurb: string;
  when: string;
  href: string;
}

export default function Perspectives({
  messages,
  locale = "en",
}: {
  messages: Messages["perspectives"];
  locale?: Locale;
}) {
  // The two newest site articles, then the latest Levoila dispatch.
  const articleCards: Card[] = articles.slice(0, 2).map((base) => {
    const translated = locale !== "en" && articleLocales(base).includes(locale);
    const href = translated ? `/${locale}/perspectives/${base.slug}/` : `/perspectives/${base.slug}/`;
    if (base.slug === TRANSLATED_SLUG) return { ...messages.posts[0], href };
    const a = localizeArticle(base, locale);
    return { tag: a.tag, title: a.title, blurb: a.summary, when: `Perspectives · ${a.dateDisplay}`, href };
  });
  const dispatchCards: Card[] = messages.posts
    .slice(1)
    .map((p, i) => ({ ...p, href: DISPATCH_HREFS[i] }));
  const cards = [...articleCards, ...dispatchCards].slice(0, 3);

  return (
    <section className="border-t border-ink/5 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
              {messages.eyebrow}
            </div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
              {messages.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {messages.subhead}
            </p>
          </div>
          <Link
            href={locale === "en" ? "/perspectives/" : `/${locale}/perspectives/`}
            className="self-start text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            {messages.allWriting} →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((p) => (
            <a
              key={p.title}
              href={p.href}
              {...(p.href.startsWith("/")
                ? {}
                : { target: "_blank", rel: "noreferrer" })}
              className="group flex flex-col rounded-2xl border border-ink/10 bg-paper-warm p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(15,30,51,0.15)]"
            >
              <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-wider">
                <span className="text-accent">{p.tag}</span>
                <span className="text-ink-muted">{p.when}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink">
                {messages.readLabel}{" "}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
