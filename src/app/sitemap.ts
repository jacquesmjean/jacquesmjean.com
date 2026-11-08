import type { MetadataRoute } from "next";
import { locales, localeHref } from "@/i18n";
import { articleLocales, articles } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jacquesmjean.com";
  const now = new Date();

  const speakingUrl = (l: (typeof locales)[number]) =>
    localeHref(l) === "/"
      ? `${baseUrl}/speaking`
      : `${baseUrl}${localeHref(l)}/speaking`;

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}${localeHref(locale)}`,
    lastModified: now,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}${localeHref(l)}`])
      ),
    },
  }));

  const speaking: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: speakingUrl(locale),
    lastModified: now,
    priority: locale === "en" ? 0.8 : 0.7,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, speakingUrl(l)])),
    },
  }));

  const pageUrl = (l: (typeof locales)[number], path: string) =>
    localeHref(l) === "/"
      ? `${baseUrl}/${path}`
      : `${baseUrl}${localeHref(l)}/${path}`;

  const localizedPages: MetadataRoute.Sitemap = ["story", "ventures", "perspectives", "contact"].flatMap(
    (path) =>
      locales.map((locale) => ({
        url: pageUrl(locale, path),
        lastModified: now,
        priority: locale === "en" ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, pageUrl(l, path)])
          ),
        },
      }))
  );

  const articlePath = (slug: string, l: string) =>
    l === "en" ? `${baseUrl}/perspectives/${slug}/` : `${baseUrl}/${l}/perspectives/${slug}/`;
  const articlePages: MetadataRoute.Sitemap = articles.flatMap((a) =>
    articleLocales(a).map((l) => ({
      url: articlePath(a.slug, l),
      lastModified: new Date(a.dateModified ?? a.datePublished),
      priority: l === "en" ? 0.8 : 0.7,
      images: [`${baseUrl}${a.ogImage}`, ...(a.hero ? [`${baseUrl}${a.hero.src}`] : [])],
      alternates: {
        languages: Object.fromEntries(articleLocales(a).map((x) => [x, articlePath(a.slug, x)])),
      },
    }))
  );

  return [...home, ...speaking, ...localizedPages, ...articlePages];
}
