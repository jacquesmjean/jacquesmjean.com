import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getMessages, localeHref, type Locale } from "@/i18n";

const PDF_HREF = "/jacques-m-jean-leadership-brief.pdf";
const BOOK_HREF =
  "mailto:engage@jacquesmjean.com?subject=Speaking%20inquiry";

export default function SpeakingContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const s = m.speaking;
  const SITE = "https://jacquesmjean.com";
  const pageUrl = `${SITE}${localeHref(locale) === "/" ? "" : localeHref(locale)}/speaking`;

  const webpage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: s.metaTitle,
    inLanguage: locale,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#jacques` },
    mainEntity: { "@id": `${SITE}/#jacques` },
  };

  return (
    <main lang={locale} className="min-h-screen bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <Nav locale={locale} messages={m.nav} />

      {/* Header */}
      <section className="border-b border-ink/5">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
                {s.eyebrow}
              </div>
              <h1 className="font-display text-4xl font-medium leading-tight tracking-tightish text-ink md:text-6xl text-balance">
                {s.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {s.intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={PDF_HREF}
                  download
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
                >
                  {s.downloadCta}
                </a>
                <span className="text-sm text-ink-muted">{s.downloadNote}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/headshot.png"
                alt="Jacques M. Jean"
                width={420}
                height={520}
                className="w-full max-w-sm rounded-2xl object-cover shadow-[0_30px_60px_-30px_rgba(20,18,15,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="border-b border-ink/5 bg-paper-warm/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
            {s.themesEyebrow}
          </div>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tightish text-ink md:text-5xl">
            {s.themesHeadline}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {s.themes.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-ink/10 bg-paper p-7"
              >
                <h3 className="font-display text-xl font-medium leading-snug text-ink">
                  {t.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="border-b border-ink/5">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
            <div>
              <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
                {s.bioEyebrow}
              </div>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tightish text-ink md:text-4xl">
                {s.bioHeadline}
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink-soft">{s.bio1}</p>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                {s.bio2}
              </p>
              <dl className="mt-10 space-y-3 border-t border-ink/10 pt-8">
                {s.facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col gap-1 sm:flex-row sm:gap-4"
                  >
                    <dt className="w-32 shrink-0 text-xs font-medium uppercase tracking-wider text-ink-muted pt-0.5">
                      {f.label}
                    </dt>
                    <dd className="text-[15px] text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="relative bg-ink text-paper">
        <div className="paper-grain absolute inset-0 opacity-10 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent-soft">
            {s.bookEyebrow}
          </div>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tightish text-paper md:text-5xl">
            {s.bookHeadline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-warm/80">
            {s.bookBody}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={BOOK_HREF}
              className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink hover:bg-accent-soft hover:text-ink transition-colors"
            >
              {s.bookCta}
            </a>
            <a
              href={PDF_HREF}
              download
              className="text-sm font-medium text-paper-warm/80 hover:text-paper transition-colors underline underline-offset-4"
            >
              {s.downloadCta}
            </a>
          </div>
        </div>
      </section>

      <Footer messages={m.footer} />
    </main>
  );
}
