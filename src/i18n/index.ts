import en from "./messages/en";
import fr from "./messages/fr";
import ht from "./messages/ht";
import es from "./messages/es";
import pt from "./messages/pt";
import { defaultLocale, type Locale } from "./locales";
import type { Messages } from "./messages/_types";

const all: Record<Locale, Messages> = { en, fr, ht, es, pt };

export function getMessages(locale: Locale = defaultLocale): Messages {
  return all[locale] ?? all[defaultLocale];
}

export type { Messages };
export { locales, defaultLocale, localeLabels, localeHref, isLocale } from "./locales";
export type { Locale } from "./locales";
