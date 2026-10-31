import type { MetadataRoute } from "next";
import { locales, localeHref } from "@/i18n";

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

  return [...home, ...speaking];
}
