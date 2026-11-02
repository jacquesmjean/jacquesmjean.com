export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-ink/5">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mb-5 text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </div>
        <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tightish text-ink md:text-6xl text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
