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
import { getMessages, type Locale } from "@/i18n";

export default function PageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  return (
    <main lang={locale} className="min-h-screen bg-paper text-ink">
      <JsonLd locale={locale} />
      <Nav locale={locale} messages={m.nav} />
      <Hero locale={locale} messages={m.hero} />
      <WhatIDoNow messages={m.whatIDoNow} />
      <TechFidesSpotlight messages={m.techFides} />
      <LevoilaSpotlight messages={m.levoila} />
      <Story messages={m.story} />
      <FAQ messages={m.faq} />
      <Perspectives messages={m.perspectives} />
      <Contact messages={m.contact} />
      <Footer messages={m.footer} />
    </main>
  );
}
