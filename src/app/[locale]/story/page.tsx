import StoryContent from "@/components/StoryContent";
import { getMessages, locales, localeHref, isLocale } from "@/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE = "https://jacquesmjean.com";

function pageUrl(locale: string): string {
  const base = localeHref(locale as (typeof locales)[number]);
  return base === "/" ? `${SITE}/story` : `${SITE}${base}/story`;
}

export function generateStaticParams() {
  return locales.filter((l) => l !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);
  return {
    title: m.pages.story.metaTitle,
    description: m.pages.story.metaDescription,
    alternates: {
      canonical: pageUrl(locale),
      languages: Object.fromEntries(locales.map((l) => [l, pageUrl(l)])),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <StoryContent locale={locale} />;
}
