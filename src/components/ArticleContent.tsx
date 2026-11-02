import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getMessages } from "@/i18n";
import type { Article } from "@/data/articles";
import type { ReactNode } from "react";

const SITE = "https://jacquesmjean.com";

/** Renders **bold** spans as emphasized ink text. */
function renderInline(text: string): ReactNode[] {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ArticleContent({ article }: { article: Article }) {
  const m = getMessages("en");
  const pageUrl = `${SITE}/perspectives/${article.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    inLanguage: "en",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    image: `${SITE}${article.ogImage}`,
    keywords: article.keywords.join(", "),
    author: {
      "@type": "Person",
      "@id": `${SITE}/#jacques`,
      name: "Jacques M. Jean",
      url: SITE,
      sameAs: [
        "https://www.linkedin.com/in/jacques-m-jean/",
        "https://techfides.com",
        "https://levoila.org",
      ],
    },
    publisher: { "@type": "Person", "@id": `${SITE}/#jacques` },
    isPartOf: { "@id": `${SITE}/#website` },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Perspectives", item: `${SITE}/#perspectives` },
      { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
    ],
  };

  return (
    <main lang="en" className="min-h-screen bg-paper text-ink">
      {[articleLd, faqLd, breadcrumbLd].map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <Nav locale="en" messages={m.nav} />

      {/* Header */}
      <section className="border-b border-ink/5">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-14 md:pt-28 md:pb-16">
          <div className="mb-5 text-xs font-medium uppercase tracking-wider text-accent">
            {article.eyebrow}
          </div>
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tightish text-ink md:text-6xl text-balance">
            {article.title}
          </h1>
          <p className="mt-7 text-xl leading-relaxed text-ink-soft md:text-[1.35rem] md:leading-relaxed">
            {article.dek}
          </p>
          <div className="mt-10 flex items-center gap-4 border-t border-ink/10 pt-6">
            <img
              src="/images/headshot.png"
              alt="Jacques M. Jean"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-sm">
              <div className="font-medium text-ink">Jacques M. Jean</div>
              <div className="text-ink-muted">
                {article.dateDisplay} · {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        {article.sections.map((s, si) => (
          <section key={si}>
            {s.heading && (
              <h2 className="mt-14 mb-6 font-display text-3xl font-medium leading-tight tracking-tightish text-ink md:text-4xl first:mt-0">
                {s.heading}
              </h2>
            )}
            {s.paragraphs.map((p, pi) => (
              <p
                key={pi}
                className="mb-6 text-lg leading-8 text-ink-soft"
              >
                {renderInline(p)}
              </p>
            ))}
          </section>
        ))}

        {/* Signature rule */}
        <div className="mt-14 h-1 w-16 rounded-full bg-accent" aria-hidden />
      </article>

      {/* FAQ */}
      <section className="border-t border-ink/5 bg-paper-warm/40">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
            Questions this piece answers
          </div>
          <div className="mt-8 space-y-5">
            {article.faq.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-ink/10 bg-paper p-7"
              >
                <h3 className="font-display text-xl font-medium leading-snug text-ink">
                  {f.q}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="border-t border-ink/5">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-8 rounded-2xl border border-ink/10 bg-paper-warm p-8 md:flex-row md:items-center md:p-10">
            <img
              src="/images/headshot.png"
              alt="Jacques M. Jean"
              width={112}
              height={112}
              className="h-28 w-28 rounded-2xl object-cover shadow-[0_20px_40px_-20px_rgba(20,18,15,0.35)]"
            />
            <div>
              <div className="font-display text-2xl font-medium text-ink">
                Jacques M. Jean
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Haitian-born American founder and technologist. 25 years of
                enterprise technology at Honeywell, Invensys, and Schneider
                Electric, with projects delivered in 15 countries. CEO of{" "}
                <a
                  href="https://techfides.com"
                  className="font-medium text-ink underline decoration-accent/50 underline-offset-4 hover:text-accent transition-colors"
                >
                  TechFides
                </a>{" "}
                and Founder &amp; Chair of{" "}
                <a
                  href="https://levoila.org"
                  className="font-medium text-ink underline decoration-accent/50 underline-offset-4 hover:text-accent transition-colors"
                >
                  Levoila
                </a>
                .
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                <a href="/speaking" className="text-ink hover:text-accent transition-colors">
                  Speaking →
                </a>
                <a
                  href="https://www.linkedin.com/in/jacques-m-jean/"
                  target="_blank"
                  rel="noopener"
                  className="text-ink hover:text-accent transition-colors"
                >
                  LinkedIn →
                </a>
                <a href="/" className="text-ink hover:text-accent transition-colors">
                  More from Jacques →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer messages={m.footer} locale="en" nav={m.nav} />
    </main>
  );
}
