import type { Metadata } from "next";
import { articleLocales, localizeArticle, type Article } from "@/data/articles";
import type { Locale } from "@/i18n/locales";

const SITE = "https://jacquesmjean.com";

const pathFor = (slug: string, l: Locale) =>
  l === "en" ? `/perspectives/${slug}/` : `/${l}/perspectives/${slug}/`;

const ogLocale: Record<Locale, string> = { en: "en_US", fr: "fr_FR", ht: "ht_HT", es: "es_ES", pt: "pt_BR" };

/** Metadata for an article page, with hreflang links between its editions. */
export function articleMetadata(base: Article, locale: Locale): Metadata {
  const a = localizeArticle(base, locale);
  const url = `${SITE}${pathFor(a.slug, locale)}`;
  const langs = articleLocales(base);
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    authors: [{ name: "Jacques M. Jean", url: SITE }],
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(langs.map((l) => [l, `${SITE}${pathFor(a.slug, l)}`])),
        "x-default": `${SITE}${pathFor(a.slug, "en")}`,
      },
    },
    openGraph: {
      title: a.title,
      description: a.metaDescription,
      url,
      siteName: "Jacques M. Jean",
      locale: ogLocale[locale],
      alternateLocale: langs.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: "article",
      publishedTime: a.datePublished,
      authors: ["Jacques M. Jean"],
      images: [{ url: a.ogImage, width: 1200, height: 630, alt: a.hero?.alt ?? a.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.metaDescription,
      images: [a.ogImage],
    },
  };
}
