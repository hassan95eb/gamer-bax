'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n/config';

export interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className = '' }: LanguageSwitcherProps) {
  const pathname = usePathname() || '';

  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    // segments[0] is empty, segments[1] is locale ('fa' or 'en')
    if (segments.length >= 2 && (segments[1] === 'fa' || segments[1] === 'en')) {
      segments[1] = targetLocale;
      return segments.join('/') || `/${targetLocale}`;
    }
    return `/${targetLocale}`;
  };

  return (
    <div
      className={`inline-flex items-center border border-[var(--color-border)] rounded-full p-1 bg-[var(--color-surface)] text-mono-label font-mono ${className}`}
    >
      <Link
        href={getLocalePath('fa')}
        className={`px-2.5 py-1 rounded-full transition-colors duration-150 ease-out ${
          currentLocale === 'fa'
            ? 'bg-[var(--color-border-strong)] text-[var(--color-accent)] font-bold'
            : 'text-[var(--color-text-dim)] hover:text-[var(--color-text)]'
        }`}
        aria-current={currentLocale === 'fa' ? 'page' : undefined}
      >
        FA
      </Link>
      <span className="text-[var(--color-border)] select-none">/</span>
      <Link
        href={getLocalePath('en')}
        className={`px-2.5 py-1 rounded-full transition-colors duration-150 ease-out ${
          currentLocale === 'en'
            ? 'bg-[var(--color-border-strong)] text-[var(--color-accent)] font-bold'
            : 'text-[var(--color-text-dim)] hover:text-[var(--color-text)]'
        }`}
        aria-current={currentLocale === 'en' ? 'page' : undefined}
      >
        EN
      </Link>
    </div>
  );
}
