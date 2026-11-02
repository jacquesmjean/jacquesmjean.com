import ContactContent from "@/components/ContactContent";
import { getMessages, locales, localeHref, isLocale } from "@/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE = "https://jacquesmjean.com";

function pageUrl(locale: string): string {
  const base = localeHref(locale as (typeof locales)[number]);
  return base === "/" ? `${SITE}/contact` : `${SITE}${base}/contact`;
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
    title: m.pages.contact.metaTitle,
    description: m.pages.contact.metaDescription,
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
  return <ContactContent locale={locale} />;
}
