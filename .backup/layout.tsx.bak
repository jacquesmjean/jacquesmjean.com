import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jacquesmjean.com"),
  title: {
    default: "Jacques M. Jean | AI Governance Advisor & Global Technologist",
    template: "%s | Jacques M. Jean",
  },
  description:
    "Shaping the institutional frameworks that govern how AI transforms enterprise, capital, and policy. AI governance advisor to governments and Fortune 500 leaders.",
  keywords: [
    "AI governance",
    "digital transformation",
    "enterprise AI",
    "technology advisor",
    "AI policy",
    "global technologist",
    "board governance",
    "Jacques Jean",
  ],
  authors: [{ name: "Jacques M. Jean" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jacquesmjean.com",
    siteName: "Jacques M. Jean",
    title: "Jacques M. Jean | AI Governance Advisor & Global Technologist",
    description:
      "Shaping the institutional frameworks that govern how AI transforms enterprise, capital, and policy.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jacques M. Jean — AI Governance Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacques M. Jean | AI Governance Advisor & Global Technologist",
    description:
      "Shaping the institutional frameworks that govern how AI transforms enterprise, capital, and policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jacques M. Jean",
  jobTitle: "AI Governance Advisor & Global Technologist",
  url: "https://jacquesmjean.com",
  image: "https://jacquesmjean.com/images/headshot.png",
  description:
    "AI transformation advisor to governments and enterprise leaders. Shaping institutional frameworks for AI governance, infrastructure strategy, and cross-border capital integration.",
  knowsAbout: [
    "AI Governance",
    "Digital Transformation",
    "Enterprise AI Strategy",
    "Cross-Border Capital Integration",
    "Infrastructure Strategy",
  ],
  memberOf: [
    { "@type": "Organization", name: "OVYNA", roleName: "Board Chair" },
    {
      "@type": "Organization",
      name: "MUSA Asset Management",
      roleName: "Board Chair",
    },
    {
      "@type": "Organization",
      name: "TechFides",
      roleName: "Founder & Board Chair",
    },
    {
      "@type": "Organization",
      name: "American Business Council Gabon",
      roleName: "Co-Chair (Founding)",
    },
  ],
  sameAs: ["https://www.linkedin.com/in/jacques-m-jean"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
