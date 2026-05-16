import type { Messages } from "@/i18n";

export default function Story({
  messages,
}: {
  messages: Messages["story"];
}) {
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
