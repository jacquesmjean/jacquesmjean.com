import LanguageSwitcher from "./LanguageSwitcher";
import type { Messages } from "@/i18n";
import { type Locale } from "@/i18n";

export default function Nav({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages["nav"];
}) {
  const links = [
    { href: "#work", label: messages.work },
    { href: "#techfides", label: messages.techfides },
    { href: "#levoila", label: messages.levoila },
    { href: "#story", label: messages.story },
    { href: "#contact", label: messages.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
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
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-accent transition-colors sm:inline-block"
          >
            {messages.getInTouch}
          </a>
        </div>
      </div>
    </header>
  );
}
