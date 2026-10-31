import LanguageSwitcher from "./LanguageSwitcher";
import type { Messages } from "@/i18n";
import { localeHref, type Locale } from "@/i18n";

export default function Nav({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages["nav"];
}) {
  const base = localeHref(locale); // "/" or "/fr"
  const speakingHref = base === "/" ? "/speaking" : `${base}/speaking`;
  const links = [
    { href: `${base}#work`, label: messages.work },
    { href: `${base}#techfides`, label: messages.techfides },
    { href: `${base}#levoila`, label: messages.levoila },
    { href: `${base}#story`, label: messages.story },
    { href: speakingHref, label: messages.speaking },
    { href: `${base}#contact`, label: messages.contact },
  ];

  return (
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
          <LanguageSwitcher current={locale} label={messages.selectLanguage} />
          <a
            href={`${base}#contact`}
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-accent transition-colors sm:inline-block"
          >
            {messages.getInTouch}
          </a>
        </div>
      </div>
    </header>
  );
}
