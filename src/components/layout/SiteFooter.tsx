import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/config';
import { AmbientGlow } from './AmbientGlow';

export interface SiteFooterProps {
  locale: Locale;
  messages: {
    title: string;
    description: string;
    rights: string;
    navigation: string;
    home: string;
    styleguide: string;
    blog: string;
    legal: string;
    privacy: string;
    terms: string;
  };
}

export function SiteFooter({ locale, messages }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-bg-deep)] border-t border-[var(--color-border)] pt-16 pb-12 overflow-hidden mt-auto">
      <AmbientGlow position="top" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--color-border)]">
          {/* Column 1: Wordmark & Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href={`/${locale}`} className="text-h3 font-bold text-[var(--color-text)]">
              {messages.title}
              <span className="text-[var(--color-accent)]">.</span>
            </Link>
            <p className="text-body text-[var(--color-text-muted)] max-w-md">{messages.description}</p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-mono-label text-[var(--color-accent-dim)] font-mono uppercase">{messages.navigation}</h3>
            <ul className="space-y-2.5 text-small text-[var(--color-text-muted)]">
              <li>
                <Link href={`/${locale}`} className="hover:text-[var(--color-accent)] transition-colors">
                  {messages.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/styleguide`} className="hover:text-[var(--color-accent)] transition-colors">
                  {messages.styleguide}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="space-y-4">
            <h3 className="text-mono-label text-[var(--color-accent-dim)] font-mono uppercase">{messages.legal}</h3>
            <ul className="space-y-2.5 text-small text-[var(--color-text-muted)]">
              <li>
                <a href="#privacy" className="hover:text-[var(--color-accent)] transition-colors">
                  {messages.privacy}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[var(--color-accent)] transition-colors">
                  {messages.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-mono-label text-[var(--color-text-dim)] font-mono">
          <div>
            © {currentYear} {messages.title}. {messages.rights}
          </div>
          <div>LOCALE // {locale.toUpperCase()}</div>
        </div>
      </div>
    </footer>
  );
}
