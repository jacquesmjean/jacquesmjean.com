import { locales, localeHref, type Locale } from "@/i18n";

/**
 * Person + WebSite + Organization structured data for SEO.
 * Renders inline JSON-LD that Google ingests for Knowledge Panel,
 * rich results, and entity resolution.
 */
export default function JsonLd({ locale }: { locale: Locale }) {
  const SITE = "https://jacquesmjean.com";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#jacques`,
    name: "Jacques M. Jean",
    alternateName: ["Jacques Medina Jean", "Jacques Jean"],
    givenName: "Jacques",
    additionalName: "Medina",
    familyName: "Jean",
    url: SITE,
    image: `${SITE}/images/headshot.png`,
    jobTitle: "Founder & CEO, TechFides · Founder & Chair, Levoila",
    description:
      "Founder of TechFides and Levoila. Twenty-five years building enterprise technology for Honeywell, Invensys, and Schneider Electric across more than thirty countries.",
    nationality: { "@type": "Country", name: "United States" },
    birthPlace: {
      "@type": "Place",
      name: "Ferrier, Nord-Est, Haiti",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ferrier",
        addressRegion: "Nord-Est",
        addressCountry: "HT",
      },
    },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Frisco",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    knowsLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "Haitian Creole", alternateName: "ht" },
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "Portuguese", alternateName: "pt" },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Local AI Deployment",
      "Enterprise IT",
      "Digital Transformation",
      "Cultural Heritage Preservation",
      "Cross-Border Investment",
      "Public Policy",
      "AI Governance",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Carnegie Mellon University",
        url: "https://www.cmu.edu",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Guadalajara",
        url: "https://www.udg.mx",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Harvard Business School",
        url: "https://www.hbs.edu",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "UNC Kenan-Flagler Business School",
        url: "https://www.kenan-flagler.unc.edu",
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        "@id": `${SITE}/#techfides`,
        name: "TechFides",
        url: "https://techfides.com",
      },
      {
        "@type": "NGO",
        "@id": `${SITE}/#levoila`,
        name: "Levoila — The Global Heritage Trust",
        url: "https://levoila.org",
      },
    ],
    memberOf: [
      { "@type": "Organization", name: "Forbes Technology Council" },
      { "@type": "Organization", name: "Goldman Sachs 10,000 Small Businesses" },
      {
        "@type": "Organization",
        name: "American Business Council Gabon",
        roleName: "Co-Chair (Founding)",
      },
    ],
    award: [
      "Six Sigma Black Belt",
      "Project Management Professional (PMP)",
      "ITIL",
    ],
    sameAs: [
      "https://www.linkedin.com/in/jacques-m-jean",
      "https://techfides.com",
      "https://levoila.org",
      "https://councils.forbes.com",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "Jacques M. Jean",
    alternateName: "jacquesmjean.com",
    url: SITE,
    inLanguage: ["en", "fr", "ht", "es", "pt"],
    publisher: { "@id": `${SITE}/#jacques` },
    about: { "@id": `${SITE}/#jacques` },
  };

  const techfides = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#techfides`,
    name: "TechFides",
    url: "https://techfides.com",
    description:
      "Local AI deployment for small and mid-size businesses. AI installed on hardware the client owns — no rent, no data leaving the building.",
    founder: { "@id": `${SITE}/#jacques` },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Frisco",
      addressRegion: "TX",
      postalCode: "75034",
      addressCountry: "US",
    },
  };

  const levoila = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE}/#levoila`,
    name: "Levoila — The Global Heritage Trust",
    url: "https://levoila.org",
    description:
      "Citizen-led trust restoring historic sites that governments have abandoned. Phase One in Haiti — the Citadelle Henri Christophe, the Palais Sans-Souci, and Fort Liberté.",
    founder: { "@id": `${SITE}/#jacques` },
    nonprofitStatus: "Nonprofit501c3",
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}${localeHref(locale)}#webpage`,
    url: `${SITE}${localeHref(locale)}`,
    name: "Jacques M. Jean — Founder, Technologist, Global Operator",
    inLanguage: locale,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#jacques` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/images/og-image.jpg` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techfides) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(levoila) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
    </>
  );
}

// keep this so unused-locale check doesn't fire on builds
void locales;
