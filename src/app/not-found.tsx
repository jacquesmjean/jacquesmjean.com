export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="text-xs font-medium uppercase tracking-wider text-accent">
          404
        </div>
        <h1 className="mt-4 font-display text-5xl font-medium leading-tight tracking-tightish text-ink md:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          Either it never did, or it moved when we redesigned the site. Either way — back to the start.
        </p>
        <a
          href="/"
          className="mt-10 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
        >
          Go home →
        </a>
      </section>
    </main>
  );
}
