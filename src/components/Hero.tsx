export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-grain absolute inset-0 opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-warm px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Founder · Technologist · Global Operator
            </div>

            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tightish text-ink md:text-7xl">
              I help businesses{" "}
              <span className="text-accent italic">own their AI</span> —
              and I'm restoring{" "}
              <span className="text-accent italic">what governments forget</span>.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              I'm Jacques. I spent 25 years building technology systems for
              Honeywell, Invensys, and Schneider Electric across more than 30
              countries. Today I run <strong className="font-semibold text-ink">TechFides</strong>,
              where small businesses install AI on hardware they own — no rent,
              no data leaving the building. And I chair <strong className="font-semibold text-ink">Levoila</strong>,
              a global heritage trust restoring sites the world has abandoned.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
              >
                Start a conversation
              </a>
              <a
                href="#work"
                className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
              >
                See what I'm building →
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-ink-muted">
              <span>Forbes Technology Council</span>
              <span aria-hidden className="text-ink/20">·</span>
              <span>Goldman Sachs 10KSB</span>
              <span aria-hidden className="text-ink/20">·</span>
              <span>Carnegie Mellon MS</span>
              <span aria-hidden className="text-ink/20">·</span>
              <span>EN · FR · KR · ES · PT</span>
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
                Currently building
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
