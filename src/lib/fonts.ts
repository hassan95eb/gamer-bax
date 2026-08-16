import localFont from 'next/font/local';

export const vazirmatn = localFont({
  src: '../../public/fonts/Vazirmatn-Variable.woff2',
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const inter = localFont({
  src: '../../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
});

export const interTight = localFont({
  src: '../../public/fonts/InterTight-Variable.woff2',
  variable: '--font-inter-tight',
  display: 'swap',
});

export const jetbrainsMono = localFont({
  src: '../../public/fonts/JetBrainsMono-Variable.woff2',
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export function getFontClasses(locale: 'fa' | 'en'): string {
  if (locale === 'fa') {
    return `${vazirmatn.variable} ${jetbrainsMono.variable}`;
  }
  return `${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`;
}
