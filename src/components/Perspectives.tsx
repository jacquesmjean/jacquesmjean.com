const posts = [
  {
    tag: "Founder · Levoila",
    title: "From the library at 18 to the Citadelle at 50",
    blurb:
      "The first library I walked into changed me. The last fortress I will walk into will be the one we leave standing. Between those two doors is the life I was given.",
    href: "https://levoila.org/#founder",
    when: "Levoila dispatch · May 2026",
  },
  {
    tag: "Founder · Haiti",
    title: "The three libraries that started all this",
    blurb:
      "Before Levoila, there was the Universal Learning Centre. Before that, a boy in Ferrier who had never seen a library until he was eighteen. The full story of how 500,000 readers came to be.",
    href: "https://levoila.org/#dispatches",
    when: "Levoila dispatch · April 2026",
  },
  {
    tag: "Forbes Tech Council",
    title: "How nonprofits can shift their mindset to information technology",
    blurb:
      "Just twelve percent of nonprofits are digitally mature — and those that are happen to be four times more likely to achieve their mission. The case for treating IT as core to the work, not overhead.",
    href: "https://www.linkedin.com/posts/jacques-m-jean_council-post-how-nonprofits-can-shift-their-activity-7041570520508620800-jVau",
    when: "Forbes Tech Council",
  },
];

export default function Perspectives() {
  return (
    <section className="border-t border-ink/5 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
              Perspectives
            </div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
              Writing, in plain English.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Notes from the work — running a small business in the AI era,
              building libraries and fortresses, and what 25 years across 30+
              countries actually teaches you.
            </p>
          </div>
          <a
            href="#"
            className="self-start text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            All writing →
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-ink/10 bg-paper-warm p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(184,71,45,0.15)]"
            >
              <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-wider">
                <span className="text-accent">{p.tag}</span>
                <span className="text-ink-muted">{p.when}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink">
                Read{" "}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
