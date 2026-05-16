import type { Messages } from "@/i18n";

const POST_HREFS = [
  "https://levoila.org/#founder",
  "https://levoila.org/#dispatches",
  "https://www.linkedin.com/posts/jacques-m-jean_council-post-how-nonprofits-can-shift-their-activity-7041570520508620800-jVau",
];

export default function Perspectives({
  messages,
}: {
  messages: Messages["perspectives"];
}) {
  return (
    <section className="border-t border-ink/5 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
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
          <a
            href="#"
            className="self-start text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            {messages.allWriting} →
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {messages.posts.map((p, i) => (
            <a
              key={p.title}
              href={POST_HREFS[i]}
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
                {messages.readLabel}{" "}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
