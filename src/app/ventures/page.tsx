import VenturesContent from "@/components/VenturesContent";
import { getMessages, locales, localeHref } from "@/i18n";
import type { Metadata } from "next";

const SITE = "https://jacquesmjean.com";

function pageUrl(locale: string): string {
  const base = localeHref(locale as (typeof locales)[number]);
  return base === "/" ? `${SITE}/ventures` : `${SITE}${base}/ventures`;
}

export function generateMetadata(): Metadata {
  const m = getMessages("en");
  return {
    title: m.pages.ventures.metaTitle,
    description: m.pages.ventures.metaDescription,
    alternates: {
      canonical: pageUrl("en"),
      languages: Object.fromEntries(locales.map((l) => [l, pageUrl(l)])),
    },
    openGraph: {
      title: m.pages.ventures.metaTitle,
      description: m.pages.ventures.metaDescription,
      url: pageUrl("en"),
      locale: "en_US",
      type: "website",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function Page() {
  return <VenturesContent locale="en" />;
}
