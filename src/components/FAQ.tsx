import type { Messages } from "@/i18n";

/**
 * FAQ — visible Q&A section + FAQPage JSON-LD from the same source,
 * so the structured data always matches the on-page content.
 * Added for GEO (AI-search) citability: question headings and
 * digit-dense answers are what AI assistants quote.
 */
export default function FAQ({ messages }: { messages: Messages["faq"] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: messages.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="border-t border-ink/5 bg-paper scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
          {messages.eyebrow}
        </div>
        <h2 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
          {messages.headline}
        </h2>

        <dl className="mt-12 space-y-10">
          {messages.items.map((item) => (
            <div key={item.q}>
              <dt className="font-display text-xl font-medium text-ink md:text-2xl">
                {item.q}
              </dt>
              <dd className="mt-3 text-lg leading-relaxed text-ink-soft">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
