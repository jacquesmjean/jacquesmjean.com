import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacques M. Jean — Founder, Technologist, Global Operator",
  description:
    "Founder of TechFides and Levoila. 25 years across 30+ countries — now helping small business own its AI, and restoring sites the world has forgotten.",
  metadataBase: new URL("https://jacquesmjean.com"),
  applicationName: "Jacques M. Jean",
  authors: [{ name: "Jacques M. Jean", url: "https://jacquesmjean.com" }],
  creator: "Jacques M. Jean",
  publisher: "Jacques M. Jean",
    verification: { other: { "msvalidate.01": "315FCB78A389AA7C4372CF732819AA4F" } },
  keywords: [
    "Jacques M. Jean",
    "Jacques Jean",
    "TechFides",
    "Levoila",
    "local AI",
    "AI deployment",
    "Forbes Technology Council",
    "Haiti heritage",
    "Citadelle Henri Christophe",
    "Universal Learning Centre",
    "American Business Council Gabon",
    "OVYNA",
    "MUSA Asset Management",
  ],
  openGraph: {
    title: "Jacques M. Jean — Founder, Technologist, Global Operator",
    description:
      "Founder of TechFides and Levoila. Built three libraries in Haiti. Now building local AI for small business — and restoring what governments have abandoned.",
    url: "https://jacquesmjean.com",
    siteName: "Jacques M. Jean",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacques M. Jean",
    description:
      "Founder of TechFides and Levoila. 25 years across 30+ countries. Local AI for small business; restoring sites the world has forgotten.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
