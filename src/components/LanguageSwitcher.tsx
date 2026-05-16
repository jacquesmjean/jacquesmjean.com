import { locales, localeLabels, localeHref, type Locale } from "@/i18n";

export default function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-label={label}
        className="flex items-center gap-1 rounded-full border border-ink/10 bg-paper-warm px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-ink-soft hover:border-accent hover:text-accent transition-colors"
      >
        <span aria-hidden>🌐</span>
        <span>{localeLabels[current].code}</span>
        <span aria-hidden className="text-[10px]">▾</span>
      </button>
      <div
        className="invisible absolute right-0 top-full mt-2 min-w-[160px] rounded-xl border border-ink/10 bg-paper p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100"
      >
        {locales.map((l) => (
          <a
            key={l}
            href={localeHref(l)}
            aria-current={l === current ? "page" : undefined}
            className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              l === current
                ? "bg-paper-warm text-ink"
                : "text-ink-soft hover:bg-paper-warm hover:text-accent"
            }`}
          >
            <span className="font-medium">{localeLabels[l].full}</span>
            <span className="text-[10px] uppercase tracking-wider text-ink-muted">
              {localeLabels[l].code}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
