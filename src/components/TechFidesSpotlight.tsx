import type { Messages } from "@/i18n";

export default function TechFidesSpotlight({
  messages,
}: {
  messages: Messages["techFides"];
}) {
  return (
    <section id="techfides" className="border-t border-ink/5 bg-paper scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
              {messages.eyebrow}
            </div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
              {messages.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {messages.body1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {messages.body2Pre}
              <em className="italic text-ink">{messages.body2Em}</em>
              {messages.body2Post}
            </p>

            <a
              href="https://techfides.com"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
            >
              {messages.cta} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-ink/10 bg-paper-warm p-7">
              <div className="text-[10px] font-medium uppercase tracking-wider text-accent">
                {messages.brokenLabel}
              </div>
              <ul className="mt-5 space-y-3">
                {messages.brokenItems.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-3 flex-none rounded-full bg-accent"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-paper p-7 shadow-[0_20px_40px_-20px_rgba(184,71,45,0.25)]">
              <div className="text-[10px] font-medium uppercase tracking-wider text-accent">
                {messages.installLabel}
              </div>
              <ul className="mt-5 space-y-3">
                {messages.installItems.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink"
                  >
                    <span aria-hidden className="mt-1.5 text-accent">
                      ✓
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
