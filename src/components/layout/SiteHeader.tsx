'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/Button';

export interface SiteHeaderProps {
  locale: Locale;
  messages: {
    title: string;
    home: string;
    styleguide: string;
    blog: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
}

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle keydown (Escape) & focus trap
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileOpen(false);
          menuTriggerRef.current?.focus();
        }

        // Focus trap inside navContainerRef
        if (e.key === 'Tab' && navContainerRef.current) {
          const focusables = navContainerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const firstEl = focusables[0];
          const lastEl = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              lastEl.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastEl) {
              firstEl.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const navLinks = [
    { href: `/${locale}`, label: messages.home },
    { href: `/${locale}/styleguide`, label: messages.styleguide },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ease-out ${
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between" ref={navContainerRef}>
        {/* Wordmark at Start Edge */}
        <Link
          href={`/${locale}`}
          className="text-h3 font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none"
        >
          {messages.title}
          <span className="text-[var(--color-accent)]">.</span>
        </Link>

        {/* SINGLE NAV ELEMENT IN DOM - Desktop & Mobile overlay styling driven via classes */}
        <nav
          id="main-navigation"
          aria-label="Main Navigation"
          className={`
            /* Desktop Styles */
            md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:w-auto md:h-auto md:border-none md:opacity-100 md:pointer-events-auto
            /* Mobile Overlay Styles */
            fixed inset-0 top-[73px] bg-[var(--color-bg)] flex-col items-center justify-start p-8 gap-6 border-t border-[var(--color-border)] z-40 transition-opacity duration-200
            ${mobileOpen ? 'flex opacity-100 pointer-events-auto' : 'hidden md:flex'}
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-body font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Overlay only content (Language Switcher & CTA button) */}
          <div className="flex md:hidden flex-col items-center gap-6 mt-6 pt-6 border-t border-[var(--color-border)] w-full">
            <LanguageSwitcher currentLocale={locale} />
            <Button variant="primary" size="md" className="w-full">
              {messages.cta}
            </Button>
          </div>
        </nav>

        {/* Header End Edge Controls (Desktop Language Switcher & CTA button + Mobile Menu Trigger) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <Button variant="primary" size="sm">
              {messages.cta}
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
            aria-label={mobileOpen ? messages.closeMenu : messages.openMenu}
            className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] focus-visible:outline-none cursor-pointer"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
