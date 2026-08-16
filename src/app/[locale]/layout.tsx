import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCALES, Locale, isValidLocale } from '@/lib/i18n/config';
import { getFontClasses } from '@/lib/fonts';
import { getMessages } from '@/lib/i18n/getMessages';
import { buildAlternates } from '@/lib/seo/buildAlternates';
import '../globals.css';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const messages = getMessages(locale as Locale);
  const alternates = buildAlternates(`/${locale}`);

  return {
    title: {
      template: `%s | ${messages.site.title}`,
      default: messages.site.title,
    },
    description: messages.site.description,
    openGraph: {
      title: messages.site.title,
      description: messages.site.description,
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const dir = typedLocale === 'fa' ? 'rtl' : 'ltr';
  const fontClasses = getFontClasses(typedLocale);

  return (
    <html lang={typedLocale} dir={dir} className={fontClasses}>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
