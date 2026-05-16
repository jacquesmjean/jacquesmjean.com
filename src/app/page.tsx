import PageContent from "@/components/PageContent";
import { getMessages, locales, localeHref } from "@/i18n";
import type { Metadata } from "next";

const m = getMessages("en");

export const metadata: Metadata = {
  title: m.meta.title,
  description: m.meta.description,
  alternates: {
    canonical: "https://jacquesmjean.com/",
    languages: Object.fromEntries(
      locales.map((l) => [l, `https://jacquesmjean.com${localeHref(l)}`])
    ),
  },
  openGraph: {
    title: m.meta.title,
    description: m.meta.description,
    url: "https://jacquesmjean.com/",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <PageContent locale="en" />;
}
