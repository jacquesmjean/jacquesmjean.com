import type { Messages } from "@/i18n";

export default function Story({
  messages,
  compact = false,
  moreHref,
  moreLabel,
}: {
  messages: Messages["story"];
  /** Homepage teaser: the opening only, with a link to the full story page. */
  compact?: boolean;
  moreHref?: string;
  moreLabel?: string;
}) {
  if (compact) {
    return (
      <section id="story" className="border-t border-ink/5 bg-paper-warm scroll-mt-24">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">{messages.eyebrow}</div>
          <p className="font-display text-3xl font-medium leading-snug text-ink md:text-4xl text-balance">
            {messages.pullquote}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{messages.para1}</p>
          {moreHref && (
            <a
              href={moreHref}
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
            >
              {moreLabel} <span aria-hidden>→</span>
            </a>
          )}
        </div>
      </section>
    );
  }
  return (
    <section id="story" className="border-t border-ink/5 bg-paper-warm scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
          {messages.eyebrow}
        </div>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
          {messages.headline}
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            {messages.pullquote}
          </p>
          <p>{messages.para1}</p>
          <p>{messages.para2}</p>
          <p className="font-display text-xl leading-snug text-ink md:text-2xl">
            {messages.pivot}
          </p>
          <p>{messages.para3}</p>
        </div>

        <div className="mt-14 grid gap-6 border-t border-ink/10 pt-10 text-sm text-ink-soft md:grid-cols-3">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
              {messages.languagesLabel}
            </div>
            <div className="mt-2 font-display text-lg text-ink">
              {messages.languagesValue}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
              {messages.educationLabel}
            </div>
            <div className="mt-2 font-display text-lg text-ink">
              {messages.educationValue}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
              {messages.credentialsLabel}
            </div>
            <div className="mt-2 font-display text-lg text-ink">
              {messages.credentialsValue}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
