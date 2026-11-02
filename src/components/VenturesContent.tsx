import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TechFidesSpotlight from "@/components/TechFidesSpotlight";
import LevoilaSpotlight from "@/components/LevoilaSpotlight";
import { getMessages, type Locale } from "@/i18n";

export default function VenturesContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const v = m.pages.ventures;

  const governance = [
    { org: "OVYNA", role: v.gov1Role },
    { org: "American Business Council Gabon", role: v.gov2Role },
    { org: "U.S. Global Leadership Coalition", role: v.gov3Role },
  ];

  return (
    <main lang={locale} className="min-h-screen bg-paper text-ink">
      <Nav locale={locale} messages={m.nav} />
      <PageHeader eyebrow={v.eyebrow} title={v.headline} intro={v.intro} />
      <TechFidesSpotlight messages={m.techFides} />
      <LevoilaSpotlight messages={m.levoila} />

      <section className="border-t border-ink/5 bg-paper-warm/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 text-xs font-medium uppercase tracking-wider text-accent">
            {v.governanceEyebrow}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {governance.map((g) => (
              <div
                key={g.org}
                className="rounded-2xl border border-ink/10 bg-paper p-7"
              >
                <div className="font-display text-lg font-medium text-ink">
                  {g.org}
                </div>
                <div className="mt-2 text-sm text-ink-muted">{g.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer messages={m.footer} locale={locale} nav={m.nav} />
    </main>
  );
}
