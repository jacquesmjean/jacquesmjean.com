import ArticleContent from "@/components/ArticleContent";
import { articles, getArticle } from "@/data/articles";
import { articleMetadata } from "@/lib/articleMeta";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? articleMetadata(article, "en") : {};
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleContent article={article} locale="en" />;
}
