import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Comments from "@/components/Comments";
import ShareArticle from "@/components/ShareArticle";
import { getMessages } from "@/i18n";
import {
  getArticle,
  getFollowUps,
  getReadNext,
  type Article,
  type ArticleFigure,
} from "@/data/articles";
import type { ReactNode } from "react";

const SITE = "https://jacquesmjean.com";

const linkClass =
  "font-medium text-ink underline decoration-accent/50 decoration-1 underline-offset-4 hover:text-accent hover:decoration-accent transition-colors";

/** Renders **bold** and [text](url) inline markup. */
function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(<span key={k++}>{text.slice(last, m.index)}</span>);
    if (m[1] !== undefined) {
      out.push(
        <strong key={k++} className="font-semibold text-ink">
          {m[1]}
        </strong>
      );
    } else {
      const href = m[3];
      const external = /^https?:\/\//.test(href);
      out.push(
        <a
          key={k++}
          href={href}
          className={linkClass}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
        >
          {m[2]}
        </a>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(<span key={k++}>{text.slice(last)}</span>);
  return out;
}

function Figure({ figure, priority = false }: { figure: ArticleFigure; priority?: boolean }) {
  return (
    <figure className="my-12">
      <img
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="w-full rounded-2xl border border-ink/10 object-cover shadow-[0_30px_60px_-40px_rgba(20,18,15,0.45)]"
      />
      {(figure.caption || figure.credit) && (
        <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[13px] leading-relaxed text-ink-muted">
          {figure.caption && <span className="text-ink-soft">{figure.caption}</span>}
          {figure.credit && (
            <span className="text-[11px] uppercase tracking-wider">Photo: {figure.credit}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function ArticleCard({ article, label }: { article: Article; label: string }) {
  return (
    <a
      href={`/perspectives/${article.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(184,71,45,0.18)]"
    >
      <img
        src={article.ogImage}
        alt=""
        width={1200}
        height={630}
        loading="lazy"
        decoding="async"
        className="aspect-[1200/630] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="text-[10px] font-medium uppercase tracking-wider text-accent">
          {label} · {article.dateDisplay}
        </div>
        <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink group-hover:text-accent transition-colors">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{article.summary}</p>
        <div className="mt-5 text-sm font-medium text-ink">
          Read · {article.readTime}{" "}
          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ArticleContent({ article }: { article: Article }) {
  const m = getMessages("en");
  const pageUrl = `${SITE}/perspectives/${article.slug}/`;
  const continues = article.continues ? getArticle(article.continues) : undefined;
  const followUps = getFollowUps(article.slug);
  const readNext = getReadNext(article.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    inLanguage: "en",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    image: [
      `${SITE}${article.ogImage}`,
      ...(article.hero ? [`${SITE}${article.hero.src}`] : []),
    ],
    keywords: article.keywords.join(", "),
    articleSection: article.tag,
    author: {
      "@type": "Person",
      "@id": `${SITE}/#jacques`,
      name: "Jacques M. Jean",
      url: SITE,
      jobTitle: "Founder and CEO, TechFides",
      sameAs: [
        "https://www.linkedin.com/in/jacques-m-jean/",
        "https://www.wikidata.org/wiki/Q141989461",
        "https://www.crunchbase.com/person/jacques-jean-1db3",
        "https://techfides.com",
        "https://levoila.org",
      ],
    },
    publisher: { "@type": "Person", "@id": `${SITE}/#jacques` },
    isPartOf: { "@id": `${SITE}/#website` },
    ...(continues
      ? { isBasedOn: `${SITE}/perspectives/${continues.slug}/` }
      : {}),
    ...(article.sources?.some((s) => s.url)
      ? { citation: article.sources.filter((s) => s.url).map((s) => s.url) }
      : {}),
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
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Perspectives", item: `${SITE}/perspectives/` },
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
      <section className={article.hero ? "" : "border-b border-ink/5"}>
        <div className="mx-auto max-w-3xl px-6 pt-12 pb-12 md:pt-20 md:pb-14">
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-ink-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span aria-hidden className="mx-2">/</span>
            <Link href="/perspectives/" className="hover:text-accent transition-colors">Perspectives</Link>
          </nav>
          <div className="mb-5 text-xs font-medium uppercase tracking-wider text-accent">
            {article.eyebrow}
          </div>
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tightish text-ink md:text-6xl text-balance">
            {article.title}
          </h1>
          <p className="mt-7 text-xl leading-relaxed text-ink-soft md:text-[1.35rem] md:leading-relaxed text-pretty">
            {article.dek}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-5 border-t border-ink/10 pt-6">
            <div className="flex items-center gap-4">
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
                  <time dateTime={article.datePublished}>{article.dateDisplay}</time> ·{" "}
                  {article.readTime}
                </div>
              </div>
            </div>
            <ShareArticle url={pageUrl} title={article.title} />
          </div>
        </div>
      </section>

      {/* Lead photo, wider than the text column for impact */}
      {article.hero && (
        <div className="mx-auto max-w-5xl px-6 [&_figure]:my-0">
          <Figure figure={article.hero} priority />
        </div>
      )}

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        {continues && (
          <aside className="mb-12 rounded-2xl border border-ink/10 bg-paper-warm px-6 py-5 text-[15px] leading-relaxed text-ink-soft">
            <span className="mr-2 text-[11px] font-medium uppercase tracking-wider text-accent">
              Follow up
            </span>
            This piece continues{" "}
            <a href={`/perspectives/${continues.slug}/`} className={linkClass}>
              {continues.title}
            </a>
          </aside>
        )}

        {article.sections.map((s, si) => (
          <section key={si}>
            {s.heading && (
              <h2 className="mt-16 mb-6 font-display text-3xl font-medium leading-tight tracking-tightish text-ink md:text-4xl text-balance">
                {s.heading}
              </h2>
            )}
            {s.paragraphs.map((p, pi) => (
              <p key={pi} className="mb-6 text-lg leading-8 text-ink-soft text-pretty">
                {renderInline(p)}
              </p>
            ))}
            {s.list && (
              <ol className="mb-8 mt-2 space-y-5">
                {s.list.map((item, li) => (
                  <li key={li} className="flex gap-5 text-lg leading-8 text-ink-soft">
                    <span
                      aria-hidden
                      className="mt-0.5 font-display text-2xl font-medium leading-8 text-accent tabular-nums"
                    >
                      {String(li + 1).padStart(2, "0")}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            )}
            {s.pullQuote && (
              <blockquote className="my-12 border-l-2 border-accent pl-7 font-display text-2xl font-medium leading-snug text-ink md:text-3xl text-balance">
                {s.pullQuote}
              </blockquote>
            )}
            {s.figure && <Figure figure={s.figure} />}
          </section>
        ))}

        {/* Signature rule */}
        <div className="mt-14 h-1 w-16 rounded-full bg-accent" aria-hidden />

        {followUps.length > 0 && (
          <aside className="mt-12 rounded-2xl border border-accent/30 bg-paper-warm px-7 py-6">
            <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-accent">
              The follow up
            </div>
            {followUps.map((f) => (
              <a
                key={f.slug}
                href={`/perspectives/${f.slug}/`}
                className="group block font-display text-xl font-medium leading-snug text-ink hover:text-accent transition-colors"
              >
                {f.title}{" "}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            ))}
          </aside>
        )}

        {/* End-of-piece share prompt */}
        <div className="mt-12 rounded-2xl border border-ink/10 bg-paper-warm px-7 py-7">
          <div className="mb-4 text-[11px] font-medium uppercase tracking-wider text-accent">
            Pass it on
          </div>
          <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            If this piece sharpened a thought for you, send it to someone who&rsquo;d
            benefit from the same sharpening.
          </p>
          <ShareArticle url={pageUrl} title={article.title} />
        </div>

        {article.sources && article.sources.length > 0 && (
          <div className="mt-14">
            <div className="mb-4 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Sources
            </div>
            <ol className="space-y-2 text-[14px] leading-relaxed text-ink-muted">
              {article.sources.map((src, i) => (
                <li key={i} className="flex gap-3">
                  <span className="tabular-nums">{i + 1}.</span>
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener"
                      className="underline decoration-ink/20 underline-offset-4 hover:text-accent hover:decoration-accent transition-colors"
                    >
                      {src.label}
                    </a>
                  ) : (
                    <span>{src.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </article>

      {/* FAQ */}
      <section className="border-t border-ink/5 bg-paper-warm/40">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
            Questions this piece answers
          </div>
          <div className="mt-8 space-y-5">
            {article.faq.map((f) => (
              <div key={f.q} className="rounded-2xl border border-ink/10 bg-paper p-7">
                <h3 className="font-display text-xl font-medium leading-snug text-ink">{f.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
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
              loading="lazy"
              className="h-28 w-28 rounded-2xl object-cover shadow-[0_20px_40px_-20px_rgba(20,18,15,0.35)]"
            />
            <div>
              <div className="font-display text-2xl font-medium text-ink">Jacques M. Jean</div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Haitian-born American founder and technologist. 25 years of enterprise
                technology at Honeywell, Invensys, and Schneider Electric, with projects
                delivered in 15 countries. CEO of{" "}
                <a href="https://techfides.com" className={linkClass}>
                  TechFides
                </a>
                , Founding Co-Chair of the American Business Council Gabon, and Founder &amp;
                Chair of{" "}
                <a href="https://levoila.org" className={linkClass}>
                  Levoila
                </a>
                .
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                <Link href="/speaking/" className="text-ink hover:text-accent transition-colors">
                  Speaking →
                </Link>
                <a
                  href="https://www.linkedin.com/in/jacques-m-jean/"
                  target="_blank"
                  rel="noopener"
                  className="text-ink hover:text-accent transition-colors"
                >
                  Follow on LinkedIn →
                </a>
                <Link href="/perspectives/" className="text-ink hover:text-accent transition-colors">
                  All perspectives →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read next */}
      {readNext.length > 0 && (
        <section className="border-t border-ink/5 bg-paper-warm/40">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl font-medium tracking-tightish text-ink">
                Keep reading
              </h2>
              <Link
                href="/perspectives/"
                className="text-sm font-medium text-ink hover:text-accent transition-colors"
              >
                All perspectives →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {readNext.map((a) => (
                <ArticleCard key={a.slug} article={a} label={a.tag} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comments */}
      <Comments slug={article.slug} locale="en" />

      <Footer messages={m.footer} locale="en" nav={m.nav} />
    </main>
  );
}
