import LanguageSwitcher from "./LanguageSwitcher";
import type { Messages } from "@/i18n";
import { localeHref, type Locale } from "@/i18n";

const SKIP: Record<Locale, string> = {
  en: "Skip to content",
  fr: "Aller au contenu",
  ht: "Ale nan kontni an",
  es: "Ir al contenido",
  pt: "Ir para o conteúdo",
};

export default function Nav({
  locale,
  messages,
  alternates,
}: {
  locale: Locale;
  messages: Messages["nav"];
  /** Same page in other languages, when it exists (e.g. a translated article). */
  alternates?: Partial<Record<Locale, string>>;
}) {
  const base = localeHref(locale); // "/" or "/fr"
  const p = (path: string) => (base === "/" ? path : `${base}${path}`);
  const links = [
    { href: p("/story"), label: messages.story },
    { href: p("/ventures"), label: messages.ventures },
    { href: p("/perspectives"), label: messages.perspectives },
    { href: p("/speaking"), label: messages.speaking },
    { href: p("/contact"), label: messages.contact },
  ];

  return (
    <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
    >
      {SKIP[locale]}
    </a>
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href={base}
          className="font-display text-lg font-semibold tracking-tight text-ink hover:text-accent transition-colors"
        >
          Jacques M. Jean
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} label={messages.selectLanguage} alternates={alternates} />
          <a
            href={p("/contact")}
            className="hidden rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-accent transition-colors sm:inline-block"
          >
            {messages.getInTouch}
          </a>
          {/* Mobile menu: works without JavaScript */}
          <details className="group relative md:hidden">
            <summary
              aria-label="Menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-ink/10 text-ink hover:border-accent hover:text-accent transition-colors [&::-webkit-details-marker]:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="group-open:hidden">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="hidden group-open:block">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </summary>
            <nav className="absolute right-0 top-12 w-60 rounded-2xl border border-ink/10 bg-paper p-2 shadow-[0_30px_60px_-30px_rgba(15,30,51,0.35)]">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl px-4 py-3 text-[15px] text-ink hover:bg-paper-warm hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
    </>
  );
}
