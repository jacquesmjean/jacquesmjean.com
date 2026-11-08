import { articles, articleLocales, getArticle, localizeArticle } from "@/data/articles";

export const dynamic = "force-static";

/** Static JSON of every edition of an article, read by the newsletter sender. */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const base = getArticle(slug);
  if (!base) return new Response("Not found", { status: 404 });
  const editions = Object.fromEntries(
    articleLocales(base).map((l) => {
      const a = localizeArticle(base, l);
      return [
        l,
        {
          title: a.title,
          dek: a.dek,
          summary: a.summary,
          dateDisplay: a.dateDisplay,
          readTime: a.readTime,
          ogImage: a.ogImage,
          hero: a.hero ?? null,
          sections: a.sections.map((s) => ({
            heading: s.heading ?? null,
            paragraphs: s.paragraphs,
            list: s.list ?? null,
            pullQuote: s.pullQuote ?? null,
          })),
          path: l === "en" ? `/perspectives/${a.slug}/` : `/${l}/perspectives/${a.slug}/`,
        },
      ];
    })
  );
  return Response.json({ slug: base.slug, datePublished: base.datePublished, editions });
}
