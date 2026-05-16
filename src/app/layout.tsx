import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacques M. Jean — Founder, Technologist, Global Operator",
  description:
    "25 years building technology across more than 30 countries. Now helping small businesses own their AI through TechFides, and restoring heritage sites the world has forgotten through Levoila.",
  metadataBase: new URL("https://jacquesmjean.com"),
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
      "Founder of TechFides and Levoila. 25 years across 30+ countries. Three libraries in Haiti.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
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
