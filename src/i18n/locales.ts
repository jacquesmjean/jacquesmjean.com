export const locales = ["en", "fr", "ht", "es", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// What's displayed in the UI for each locale
export const localeLabels: Record<Locale, { code: string; full: string }> = {
  en: { code: "EN", full: "English" },
  fr: { code: "FR", full: "Français" },
  ht: { code: "KR", full: "Kreyòl" },
  es: { code: "ES", full: "Español" },
  pt: { code: "PT", full: "Português" },
};

// Where each locale lives on the site. English has no prefix.
export function localeHref(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}`;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
