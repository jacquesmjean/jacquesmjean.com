import { type Locale } from "@/i18n";
import type { Messages } from "@/i18n";

export default function WhatIDoNow({
  messages,
}: {
  locale?: Locale;
  messages: Messages["whatIDoNow"];
}) {
  const cardHrefs = ["#techfides", "#levoila", "#contact"];

  return (
    <section id="work" className="border-t border-ink/5 bg-paper-warm scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {messages.cards.map((w, i) => (
            <article
              key={w.title}
              className="group relative flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-colors hover:border-accent/40"
            >
              <div className="mb-6 text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                {w.label}
              </div>
              <h3 className="font-display text-2xl font-medium text-ink">
                {w.title}
              </h3>
              <div className="mt-1 text-sm text-accent">{w.role}</div>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {w.body}
              </p>
              <a
                href={cardHrefs[i]}
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
              >
                {w.linkLabel}{" "}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
