export const LOCALES = ['fa', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fa';

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}
