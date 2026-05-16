import { locales, localeLabels, localeHref, type Locale } from "@/i18n";
import type { Messages } from "@/i18n";

export default function Hero({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages["hero"];
}) {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-24">
      <div className="paper-grain absolute inset-0 opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-warm px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {messages.badge}
            </div>

            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tightish text-ink md:text-7xl">
              {messages.headline1Pre}{" "}
              <span className="text-accent italic">{messages.headline1Em}</span>{" "}
              — {messages.headline2Pre}{" "}
              <span className="text-accent italic">{messages.headline2Em}</span>.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              {messages.bodyPre}
              <strong className="font-semibold text-ink">{messages.bodyTF}</strong>
              {messages.bodyMid}
              <strong className="font-semibold text-ink">{messages.bodyLV}</strong>
              {messages.bodyPost}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
              >
                {messages.ctaPrimary}
              </a>
              <a
                href="#work"
                className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
              >
                {messages.ctaSecondary} →
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-wider text-ink-muted">
              {messages.creds.map((c, i) => (
                <span key={c} className="flex items-center gap-x-6">
                  <span>{c}</span>
                  {i < messages.creds.length - 1 ? (
                    <span aria-hidden className="text-ink/20">·</span>
                  ) : null}
                </span>
              ))}
              <span aria-hidden className="text-ink/20">·</span>
              <span className="flex flex-wrap items-center gap-2">
                {locales.map((l, i) => (
                  <span key={l} className="flex items-center gap-2">
                    <a
                      href={localeHref(l)}
                      aria-current={l === locale ? "page" : undefined}
                      className={`transition-colors ${
                        l === locale
                          ? "text-accent"
                          : "text-ink-muted hover:text-accent"
                      }`}
                    >
                      {localeLabels[l].code}
                    </a>
                    {i < locales.length - 1 ? (
                      <span aria-hidden className="text-ink/20">·</span>
                    ) : null}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-sand shadow-[0_30px_60px_-20px_rgba(21,23,28,0.25)]">
              <img
                src="/images/headshot.png"
                alt="Jacques M. Jean"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-ink/10 bg-paper px-5 py-4 shadow-lg md:block">
              <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                {messages.currentlyBuilding}
              </div>
              <div className="mt-1 font-display text-lg font-medium text-ink">
                TechFides · Levoila
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
