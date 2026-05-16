const pain = [
  "You're renting AI from someone else's cloud.",
  "Your patient files, contracts, and customer data leave the building every time you use it.",
  "Your monthly API bill climbs every quarter — and you don't own anything when you're done.",
];

const answer = [
  "AI runs on hardware you own — Mac, Windows, a Pi, or a server.",
  "Your data never leaves your office.",
  "Flat installation fee. Optional retainer. No surprise bills.",
];

export default function TechFidesSpotlight() {
  return (
    <section id="techfides" className="border-t border-ink/5 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
              TechFides
            </div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
              Own your AI.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Most small businesses are stuck renting AI from Big Tech. Every
              chat, every document, every customer record leaves the building.
              The bill keeps climbing. The data isn't yours. There's nothing
              you can hand to the next owner of the business.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              TechFides installs AI on hardware <em className="italic text-ink">you</em>{" "}
              own, configured for your operations. The medical office that
              keeps patient records on premises. The law firm that can't put
              client data into anyone else's cloud. The auto dealer who wants
              the AI to outlast the next vendor lock-in.
            </p>

            <a
              href="https://techfides.com"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
            >
              See how it works at techfides.com{" "}
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-ink/10 bg-paper-warm p-7">
              <div className="text-[10px] font-medium uppercase tracking-wider text-accent">
                What's broken
              </div>
              <ul className="mt-5 space-y-3">
                {pain.map((p) => (
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
                What we install
              </div>
              <ul className="mt-5 space-y-3">
                {answer.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 text-accent"
                    >
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
