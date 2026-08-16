import { LOCALES, Locale } from '../i18n/config';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamerbax.com';

export interface Alternates {
  canonical: string;
  languages: Record<string, string>;
}

export function buildAlternates(pathname: string, availableLocales: readonly Locale[] = LOCALES): Alternates {
  // Normalize pathname: ensure leading slash, remove any existing locale prefix
  let cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  for (const loc of LOCALES) {
    if (cleanPath === `/${loc}` || cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.substring(loc.length + 1);
      break;
    }
  }
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  if (cleanPath === '/') {
    cleanPath = '';
  }

  const languages: Record<string, string> = {};

  for (const loc of availableLocales) {
    languages[loc] = `${SITE_URL}/${loc}${cleanPath}`;
  }

  // x-default points to fa
  if (availableLocales.includes('fa')) {
    languages['x-default'] = `${SITE_URL}/fa${cleanPath}`;
  } else if (availableLocales.length > 0) {
    languages['x-default'] = `${SITE_URL}/${availableLocales[0]}${cleanPath}`;
  }

  return {
    canonical: `${SITE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
    languages,
  };
}
