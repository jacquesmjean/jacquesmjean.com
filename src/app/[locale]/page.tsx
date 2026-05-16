import PageContent from "@/components/PageContent";
import {
  getMessages,
  locales,
  localeHref,
  isLocale,
  type Locale,
} from "@/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales
    .filter((l) => l !== "en")
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);
  const ogLocaleMap: Record<Locale, string> = {
    en: "en_US",
    fr: "fr_FR",
    ht: "ht_HT",
    es: "es_ES",
    pt: "pt_BR",
  };
  return {
    title: m.meta.title,
    description: m.meta.description,
    alternates: {
      canonical: `https://jacquesmjean.com${localeHref(locale)}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://jacquesmjean.com${localeHref(l)}`])
      ),
    },
    openGraph: {
      title: m.meta.title,
      description: m.meta.description,
      url: `https://jacquesmjean.com${localeHref(locale)}`,
      locale: ogLocaleMap[locale],
      type: "website",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <PageContent locale={locale} />;
}
