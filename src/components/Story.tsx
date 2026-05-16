export default function Story() {
  return (
    <section id="story" className="border-t border-ink/5 bg-paper-warm">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
          The short version
        </div>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
          How I got here.
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            "I was eighteen years old the first time I walked into a library."
          </p>
          <p>
            I was born in Ferrier, in the northeast of Haiti. I came to the
            United States as a teenager and spent the next twenty-five years
            building enterprise technology for companies people have heard of —
            Honeywell, Invensys, Schneider Electric — across more than thirty
            countries. I learned what real systems look like at scale. I also
            learned that none of it had been built for the people I came from.
          </p>
          <p>
            So I started building. A few years ago, three small libraries went
            up in northern Haiti — in Pilate, in my hometown of Ferrier, and in
            Ouanaminthe. They taught me that small, well-built things change
            everything around them. That lesson became TechFides: small
            businesses don't need a cloud the size of a country. They need AI
            that lives in their office, on hardware they own, doing exactly the
            job they hired it to do.
          </p>
          <p className="font-display text-xl leading-snug text-ink md:text-2xl">
            Levoila is the bigger answer to the same question.
          </p>
          <p>
            The libraries were a beginning. Levoila is the legacy I am building
            now — a global heritage trust for the buildings my ancestors made,
            and for every site the world has stopped tending. The Citadelle,
            where Haitian children died in April because no one was in charge.
            Sans-Souci. Fort Liberté. And then everywhere a government has
            forgotten what its own people made. That is the work that has my
            attention now.
          </p>
        </div>

        <div className="mt-14 grid gap-6 border-t border-ink/10 pt-10 text-sm text-ink-soft md:grid-cols-3">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
              Languages
            </div>
            <div className="mt-2 font-display text-lg text-ink">
              English · French · Kreyòl · Spanish · Portuguese
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
              Education
            </div>
            <div className="mt-2 font-display text-lg text-ink">
              Carnegie Mellon · U. de Guadalajara · Harvard exec
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
              Credentials
            </div>
            <div className="mt-2 font-display text-lg text-ink">
              Six Sigma Black Belt · PMP · ITIL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
