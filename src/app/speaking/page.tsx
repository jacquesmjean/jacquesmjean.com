import SpeakingContent from "@/components/SpeakingContent";
import { getMessages, locales, localeHref } from "@/i18n";
import type { Metadata } from "next";

const SITE = "https://jacquesmjean.com";

function speakingUrl(locale: string): string {
  const base = localeHref(locale as (typeof locales)[number]);
  return base === "/" ? `${SITE}/speaking` : `${SITE}${base}/speaking`;
}

export function generateMetadata(): Metadata {
  const m = getMessages("en");
  return {
    title: m.speaking.metaTitle,
    description: m.speaking.metaDescription,
    alternates: {
      canonical: speakingUrl("en"),
      languages: Object.fromEntries(locales.map((l) => [l, speakingUrl(l)])),
    },
    openGraph: {
      title: m.speaking.metaTitle,
      description: m.speaking.metaDescription,
      url: speakingUrl("en"),
      locale: "en_US",
      type: "profile",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function SpeakingPage() {
  return <SpeakingContent locale="en" />;
}
