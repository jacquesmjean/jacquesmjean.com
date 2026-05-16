import type { MetadataRoute } from "next";
import { locales, localeHref } from "@/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jacquesmjean.com";
  const now = new Date();

  return locales.map((locale) => ({
    url: `${baseUrl}${localeHref(locale)}`,
    lastModified: now,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}${localeHref(l)}`])
      ),
    },
  }));
}
