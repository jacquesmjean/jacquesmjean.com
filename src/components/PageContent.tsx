import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIDoNow from "@/components/WhatIDoNow";
import TechFidesSpotlight from "@/components/TechFidesSpotlight";
import LevoilaSpotlight from "@/components/LevoilaSpotlight";
import Story from "@/components/Story";
import FAQ from "@/components/FAQ";
import Perspectives from "@/components/Perspectives";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getMessages, localeHref, type Locale } from "@/i18n";

const READ_STORY: Record<Locale, string> = {
  en: "Read the full story",
  fr: "Lire toute l\u2019histoire",
  ht: "Li tout istwa a",
  es: "Leer la historia completa",
  pt: "Ler a história completa",
};

export default function PageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  return (
    <main id="main" lang={locale} className="min-h-screen bg-paper text-ink">
      <JsonLd locale={locale} />
      <Nav locale={locale} messages={m.nav} />
      <Hero locale={locale} messages={m.hero} />
      <WhatIDoNow messages={m.whatIDoNow} />
      <TechFidesSpotlight messages={m.techFides} />
      <LevoilaSpotlight messages={m.levoila} />
      <Perspectives messages={m.perspectives} locale={locale} />
      <Story
        messages={m.story}
        compact
        moreHref={localeHref(locale) === "/" ? "/story/" : `${localeHref(locale)}/story/`}
        moreLabel={READ_STORY[locale]}
      />
      <FAQ messages={m.faq} />
      <Contact messages={m.contact} />
      <Footer messages={m.footer} locale={locale} nav={m.nav} />
    </main>
  );
}
