import SpeakingContent from "@/components/SpeakingContent";
import {
  getMessages,
  locales,
  localeHref,
  isLocale,
  type Locale,
} from "@/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE = "https://jacquesmjean.com";

function speakingUrl(locale: Locale): string {
  const base = localeHref(locale);
  return base === "/" ? `${SITE}/speaking` : `${SITE}${base}/speaking`;
}

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
    title: m.speaking.metaTitle,
    description: m.speaking.metaDescription,
    alternates: {
      canonical: speakingUrl(locale),
      languages: Object.fromEntries(locales.map((l) => [l, speakingUrl(l)])),
    },
    openGraph: {
      title: m.speaking.metaTitle,
      description: m.speaking.metaDescription,
      url: speakingUrl(locale),
      locale: ogLocaleMap[locale],
      type: "profile",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function LocaleSpeakingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <SpeakingContent locale={locale} />;
}
