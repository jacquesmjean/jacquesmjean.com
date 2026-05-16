import type { Messages } from "@/i18n";

const TRACK_HREFS = [
  "mailto:engage@jacquesmjean.com?subject=TechFides%20inquiry",
  "https://levoila.org",
  "mailto:engage@jacquesmjean.com?subject=Engagement%20inquiry",
];

export default function Contact({
  messages,
}: {
  messages: Messages["contact"];
}) {
  return (
    <section
      id="contact"
      className="relative border-t border-ink/5 bg-ink text-paper scroll-mt-24"
    >
      <div className="paper-grain absolute inset-0 opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent-soft">
              {messages.eyebrow}
            </div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-paper md:text-5xl">
              {messages.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-paper-warm/80">
              {messages.intro}
            </p>
            <div className="mt-10 space-y-2 text-sm text-paper-warm/70">
              <div>
                {messages.directLabel}:{" "}
                <a
                  className="text-paper hover:text-accent-soft transition-colors"
                  href="mailto:engage@jacquesmjean.com"
                >
                  engage@jacquesmjean.com
                </a>
              </div>
              <div>
                {messages.levoilaLabel}:{" "}
                <a
                  className="text-paper hover:text-accent-soft transition-colors"
                  href="mailto:jacques@levoila.org"
                >
                  jacques@levoila.org
                </a>
              </div>
              <div>
                {messages.linkedinLabel}:{" "}
                <a
                  className="text-paper hover:text-accent-soft transition-colors"
                  href="https://www.linkedin.com/in/jacques-m-jean"
                  target="_blank"
                  rel="noreferrer"
                >
                  /in/jacques-m-jean
                </a>
              </div>
              <div className="pt-2 text-xs uppercase tracking-wider text-paper-warm/40">
                {messages.location}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {messages.tracks.map((t, i) => (
              <a
                key={t.label}
                href={TRACK_HREFS[i]}
                target={t.external ? "_blank" : undefined}
                rel={t.external ? "noreferrer" : undefined}
                className="group block rounded-2xl border border-paper/10 bg-ink-soft/40 p-7 transition-all hover:border-accent-soft/60 hover:bg-ink-soft/60"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-accent-soft">
                    {t.label}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-paper-warm/40 group-hover:text-paper-warm">
                    {t.external ? "External" : "Email"}
                  </div>
                </div>
                <div className="mt-3 font-display text-xl font-medium text-paper">
                  {t.title}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-paper-warm/70">
                  {t.body}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-paper group-hover:text-accent-soft transition-colors">
                  {t.cta}{" "}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
