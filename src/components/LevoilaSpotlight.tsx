const phaseOne = [
  { name: "Citadelle Henri Christophe", note: "UNESCO · Milot, Haiti" },
  { name: "Palais Sans-Souci", note: "UNESCO · Milot, Haiti" },
  { name: "Fort Liberté", note: "17th-century bay fortress · Nord-Est" },
];

export default function LevoilaSpotlight() {
  return (
    <section
      id="levoila"
      className="relative border-t border-ink/5 bg-ink text-paper"
    >
      <div className="paper-grain absolute inset-0 opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent-soft">
              Levoila — The Global Heritage Trust
            </div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-paper md:text-5xl">
              When the governments forget,{" "}
              <span className="italic text-accent-soft">the world remembers.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-paper-warm/80">
              In 1805, formerly enslaved Haitians built the largest fortress in
              the Western Hemisphere — proof that a free Black nation could
              build whatever any European court could build. Two centuries
              later, the Citadelle has no security, no oversight, no one in
              charge. On April 11, 2026, Haitian children died there.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-paper-warm/80">
              Levoila is what I'm doing about it. A citizen-led trust where
              anyone can nominate a site, the world votes on what to save, and
              every dollar is traceable on a public ledger. We start in Haiti.
              We go where the world is forgotten next.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://levoila.org"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-soft transition-colors"
              >
                Become a Steward — from $150
              </a>
              <a
                href="https://levoila.org"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-paper/20 px-6 py-3 text-sm font-medium text-paper hover:border-accent-soft hover:text-accent-soft transition-colors"
              >
                Read the full story →
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-paper/10 bg-ink-soft/40 p-7 backdrop-blur-sm">
              <div className="text-[10px] font-medium uppercase tracking-wider text-accent-soft">
                Phase One — Haiti
              </div>
              <ul className="mt-6 divide-y divide-paper/10">
                {phaseOne.map((s) => (
                  <li key={s.name} className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <div className="font-display text-lg font-medium text-paper">
                        {s.name}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-paper-warm/50">
                        {s.note}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-paper/10 pt-6">
                <div className="text-[10px] font-medium uppercase tracking-wider text-paper-warm/50">
                  Next in the global vote
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Ghana",
                    "Gabon",
                    "Egypt",
                    "Ethiopia",
                    "Mexico",
                    "Jordan",
                    "Dominican Republic",
                    "Jamaica",
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-paper/15 px-3 py-1 text-xs text-paper-warm/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs uppercase tracking-wider text-paper-warm/40">
              501(c)(3) determination pending · public ledger · 75–85% local hiring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
