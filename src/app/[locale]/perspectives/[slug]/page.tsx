import ArticleContent from "@/components/ArticleContent";
import { articles, getArticle } from "@/data/articles";
import { isLocale, type Locale } from "@/i18n";
import { articleMetadata } from "@/lib/articleMeta";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

/** Only articles that have a translation in this language get a page. */
export function generateStaticParams() {
  return articles.flatMap((a) =>
    (Object.keys(a.translations ?? {}) as Locale[]).map((locale) => ({ locale, slug: a.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article || !isLocale(locale) || !article.translations?.[locale]) return {};
  return articleMetadata(article, locale);
}

export default async function LocalizedArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article || !isLocale(locale) || !article.translations?.[locale]) notFound();
  return <ArticleContent article={article} locale={locale} />;
}
