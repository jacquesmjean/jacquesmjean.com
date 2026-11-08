import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { getMessages, type Locale } from "@/i18n";

export default function ContactContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale);

  return (
    <main id="main" lang={locale} className="min-h-screen bg-paper text-ink">
      <Nav locale={locale} messages={m.nav} />
      <h1 className="sr-only">{m.pages.contact.metaTitle}</h1>
      <Contact messages={m.contact} />
      <Footer messages={m.footer} locale={locale} nav={m.nav} />
    </main>
  );
}
