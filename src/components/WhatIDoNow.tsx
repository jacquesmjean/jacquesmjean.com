const work = [
  {
    label: "The Business",
    title: "TechFides",
    body:
      "Local AI for small and mid-size businesses. Medical offices, law firms, auto dealers, property managers, trades. We install AI on hardware you own — no rent, no data leaving the building.",
    role: "CEO & Founder",
    link: { href: "#techfides", label: "How TechFides works" },
  },
  {
    label: "The Legacy",
    title: "Levoila",
    body:
      "Global heritage trust. Citizens nominate sites at risk. Stewards vote on what to save. We start in Haiti — at the Citadelle, Sans-Souci, and Fort Liberté — and we go where the world is forgotten next.",
    role: "Founder & Chair",
    link: { href: "#levoila", label: "Stand with Levoila" },
  },
  {
    label: "The Boards",
    title: "OVYNA · ABC Gabon · MUSA",
    body:
      "Board Chair at OVYNA. Co-Chair (Founding) of the American Business Council Gabon, building U.S.–Gabon commercial bridges. Board Chair of MUSA Asset Management.",
    role: "Governance roles",
    link: { href: "#contact", label: "Board inquiries" },
  },
];

export default function WhatIDoNow() {
  return (
    <section id="work" className="border-t border-ink/5 bg-paper-warm">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
            What I'm doing now
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
            Three things have my attention.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            One pays the bills. One pays a debt. The third keeps the work
            honest. They all draw on the same 25 years.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {work.map((w) => (
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
                href={w.link.href}
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
              >
                {w.link.label}{" "}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
