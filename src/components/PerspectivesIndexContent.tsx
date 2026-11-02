import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { articles } from "@/data/articles";
import { getMessages, localeHref, type Locale } from "@/i18n";

const EXTERNAL_POST_HREFS = [
  "https://levoila.org/#founder",
  "https://levoila.org/#dispatches",
];

export default function PerspectivesIndexContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const p = m.perspectives;
  const featured = articles[0];
  const base = localeHref(locale);
  const articleHref = (slug: string) =>
    base === "/" ? `/perspectives/${slug}` : `${base}/perspectives/${slug}`;
  // Message posts: index 0 mirrors the featured article; 1+ are external dispatches.
  const externalPosts = p.posts.slice(1);
  const moreArticles = articles.slice(1);

  return (
    <main lang={locale} className="min-h-screen bg-paper text-ink">
      <Nav locale={locale} messages={m.nav} />
      <PageHeader eyebrow={p.eyebrow} title={p.headline} intro={p.subhead} />

      {/* Featured article */}
      <section className="border-b border-ink/5">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <a
            href={articleHref(featured.slug)}
            className="group grid gap-10 md:grid-cols-2 md:items-center"
          >
            <img
              src={featured.ogImage}
              alt={featured.title}
              width={1200}
              height={630}
              className="w-full rounded-2xl border border-ink/10 shadow-[0_30px_60px_-40px_rgba(20,18,15,0.4)]"
            />
            <div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-accent">
                {featured.eyebrow} · {featured.dateDisplay}
              </div>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tightish text-ink group-hover:text-accent transition-colors md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                {featured.dek}
              </p>
              <div className="mt-6 text-sm font-medium text-ink">
                {p.readLabel} · {featured.readTime}{" "}
                <span aria-hidden className="transition-transform inline-block group-hover:translate-x-0.5">→</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Dispatches */}
      <section className="bg-paper-warm/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              {m.perspectives.allWriting}
            </div>
            <a
              href="https://www.linkedin.com/in/jacques-m-jean/recent-activity/all/"
              target="_blank"
              rel="noopener"
              className="text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              LinkedIn →
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {moreArticles.map((a) => (
              <a
                key={a.slug}
                href={articleHref(a.slug)}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-wider">
                  <span className="text-accent">{a.eyebrow}</span>
                  <span className="text-ink-muted">{a.dateDisplay} · {a.readTime}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-medium leading-snug text-ink group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {a.metaDescription}
                </p>
              </a>
            ))}
            {externalPosts.map((post, i) => (
              <a
                key={post.title}
                href={EXTERNAL_POST_HREFS[i]}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-wider">
                  <span className="text-accent">{post.tag}</span>
                  <span className="text-ink-muted">{post.when}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-medium leading-snug text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {post.blurb}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer messages={m.footer} locale={locale} nav={m.nav} />
    </main>
  );
}
