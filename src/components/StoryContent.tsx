import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getMessages, type Locale } from "@/i18n";

export default function StoryContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const s = m.story;

  return (
    <main lang={locale} className="min-h-screen bg-paper text-ink">
      <Nav locale={locale} messages={m.nav} />
      <PageHeader eyebrow={s.eyebrow} title={s.headline} />

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              {s.pullquote}
            </p>
            <p>{s.para1}</p>
            <p>{s.para2}</p>
            <p className="font-display text-xl leading-snug text-ink md:text-2xl">
              {s.pivot}
            </p>
            <p>{s.para3}</p>
          </div>

          <div className="mt-14 grid gap-6 border-t border-ink/10 pt-10 text-sm text-ink-soft md:grid-cols-3">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                {s.languagesLabel}
              </div>
              <div className="mt-2 font-display text-lg text-ink">
                {s.languagesValue}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                {s.educationLabel}
              </div>
              <div className="mt-2 font-display text-lg text-ink">
                {s.educationValue}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                {s.credentialsLabel}
              </div>
              <div className="mt-2 font-display text-lg text-ink">
                {s.credentialsValue}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer messages={m.footer} locale={locale} nav={m.nav} />
    </main>
  );
}
