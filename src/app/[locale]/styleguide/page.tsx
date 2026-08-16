import React from 'react';
import { notFound } from 'next/navigation';
import { LOCALES, Locale, isValidLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/getMessages';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Section, Container } from '@/components/layout/Container';
import { AmbientGlow } from '@/components/layout/AmbientGlow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SignalDivider } from '@/components/ui/SignalDivider';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Input, Textarea } from '@/components/ui/Input';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface StyleguidePageProps {
  params: Promise<{ locale: string }>;
}

export default async function StyleguidePage({ params }: StyleguidePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);

  const colorTokens = [
    { token: '--color-bg', hex: '#080B08', name: 'Background' },
    { token: '--color-bg-deep', hex: '#050705', name: 'Background Deep' },
    { token: '--color-surface', hex: '#0E140D', name: 'Surface' },
    { token: '--color-surface-2', hex: '#121A10', name: 'Surface 2' },
    { token: '--color-border', hex: '#1D2A1B', name: 'Border' },
    { token: '--color-border-strong', hex: '#2A3B26', name: 'Border Strong' },
    { token: '--color-text', hex: '#EDF1E8', name: 'Text' },
    { token: '--color-text-muted', hex: '#8E9B88', name: 'Text Muted' },
    { token: '--color-text-dim', hex: '#5E6A59', name: 'Text Dim' },
    { token: '--color-accent', hex: '#C8E870', name: 'Accent' },
    { token: '--color-accent-dim', hex: '#9DB84F', name: 'Accent Dim' },
    { token: '--color-glow', hex: '#163312', name: 'Glow' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <SiteHeader
        locale={typedLocale}
        messages={{
          title: messages.site.title,
          home: messages.nav.home,
          styleguide: messages.nav.styleguide,
          blog: messages.nav.blog,
          cta: messages.nav.cta,
          openMenu: messages.common.openMenu,
          closeMenu: messages.common.closeMenu,
        }}
      />

      <main className="flex-1">
        {/* Styleguide Header */}
        <section className="relative pt-12 pb-16 overflow-hidden">
          <AmbientGlow position="top" />

          <Container>
            <SectionHeading
              as="h1"
              eyebrow="SYSTEM // SPECIFICATION"
              headingPrefix={messages.styleguide.title}
              description={messages.styleguide.subtitle}
              locale={typedLocale}
            />
          </Container>
        </section>

        <SignalDivider />

        {/* Color Tokens Swatches */}
        <Section variant="deep">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="TOKENS // PALETTE"
              headingPrefix={messages.styleguide.colorTokens}
              locale={typedLocale}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {colorTokens.map((item) => (
                <div
                  key={item.token}
                  className="p-4 border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-surface)] space-y-3"
                >
                  <div
                    className="w-full h-12 rounded-[var(--radius-sm)] border border-[var(--color-border)]"
                    style={{ backgroundColor: `var(${item.token})` }}
                  />
                  <div>
                    <p className="text-small font-medium text-[var(--color-text)]">{item.name}</p>
                    <p className="text-mono-label font-mono text-[var(--color-accent-dim)]">{item.token}</p>
                    <p className="text-mono-label font-mono text-[var(--color-text-dim)]">{item.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <SignalDivider />

        {/* Typography Scale */}
        <Section>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="TYPE // SCALE"
              headingPrefix={messages.styleguide.typography}
              locale={typedLocale}
            />

            <div className="space-y-6 border border-[var(--color-border)] p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-surface)]">
              <div>
                <span className="text-mono-label text-[var(--color-accent-dim)] font-mono block mb-2">Display</span>
                <p className="text-display">The Quick Brown Fox // گیمر بکس</p>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4">
                <span className="text-mono-label text-[var(--color-accent-dim)] font-mono block mb-2">H2</span>
                <p className="text-h2">Architectural Gaming Journal // مجله تخصصی بازی</p>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4">
                <span className="text-mono-label text-[var(--color-accent-dim)] font-mono block mb-2">H3</span>
                <p className="text-h3">Precision Systems & Frametime Consistency</p>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4">
                <span className="text-mono-label text-[var(--color-accent-dim)] font-mono block mb-2">Body</span>
                <p className="text-body text-[var(--color-text-muted)]">
                  Gamer Bax is a quiet, technical publication focusing on architecture, ludology, and gaming gear.
                  گیمر بکس نشریه‌ای تخصصی و آرام با تمرکز بر معماری بازی‌ها، لودولوژی و سخت‌افزار است.
                </p>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4">
                <span className="text-mono-label text-[var(--color-accent-dim)] font-mono block mb-2">Small</span>
                <p className="text-small text-[var(--color-text-dim)]">
                  Metadata text, auxiliary descriptions, and secondary labels.
                </p>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4">
                <span className="text-mono-label text-[var(--color-accent-dim)] font-mono block mb-2">Eyebrow</span>
                <Eyebrow locale={typedLocale}>SYSTEM // SPECIFICATION</Eyebrow>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4">
                <span className="text-mono-label text-[var(--color-accent-dim)] font-mono block mb-2">Mono Label</span>
                <p className="text-mono-label font-mono text-[var(--color-accent)]">01 // LUDOLOGY // 120 FPS</p>
              </div>
            </div>
          </div>
        </Section>

        <SignalDivider />

        {/* UI Primitives Showcase */}
        <Section variant="deep">
          <div className="space-y-12">
            <SectionHeading
              eyebrow="COMPONENTS // PRIMITIVES"
              headingPrefix={messages.styleguide.components}
              locale={typedLocale}
            />

            {/* Buttons */}
            <div className="space-y-4">
              <h3 className="text-h3 text-[var(--color-text)]">{messages.styleguide.buttons}</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md">
                  Primary Button
                </Button>
                <Button variant="primary" size="sm">
                  Primary Small
                </Button>
                <Button variant="ghost" size="md">
                  Ghost Link →
                </Button>
                <Button variant="icon" size="md" aria-label="Icon Button">
                  →
                </Button>
                <Button variant="primary" size="md" disabled>
                  Disabled Button
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4 pt-6 border-t border-[var(--color-border)]">
              <h3 className="text-h3 text-[var(--color-text)]">{messages.styleguide.tags}</h3>
              <div className="flex flex-wrap gap-3">
                <Tag>ANALYSIS</Tag>
                <Tag>HARDWARE</Tag>
                <Tag>ESSAY</Tag>
                <Tag>LUDOLOGY</Tag>
              </div>
            </div>

            {/* Inputs & Textareas */}
            <div className="space-y-4 pt-6 border-t border-[var(--color-border)]">
              <h3 className="text-h3 text-[var(--color-text)]">{messages.styleguide.inputs}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                <Input label="Callsign / Email" placeholder="user@domain.com" />
                <Textarea label="Signal Note / Comment" placeholder="Write your signal message..." />
              </div>
            </div>

            {/* Cards Showcase */}
            <div className="space-y-4 pt-6 border-t border-[var(--color-border)]">
              <h3 className="text-h3 text-[var(--color-text)]">{messages.styleguide.cards}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card monoIndex="01" monoLabel="SPECIFICATION">
                  <div className="space-y-3">
                    <Tag>COMPONENT</Tag>
                    <h4 className="text-h3 text-[var(--color-text)]">Standard Card Surface</h4>
                    <p className="text-body text-[var(--color-text-muted)]">
                      Card surface styled with subtle vertical gradient from --color-surface-2 to --color-surface.
                    </p>
                  </div>
                </Card>

                <Card monoIndex="02" monoLabel="INTERACTION">
                  <div className="space-y-3">
                    <Tag>HOVER STATE</Tag>
                    <h4 className="text-h3 text-[var(--color-text)]">Hairline Focus & Borders</h4>
                    <p className="text-body text-[var(--color-text-muted)]">
                      Border shifts smoothly from --color-border to --color-border-strong on hover.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <SiteFooter
        locale={typedLocale}
        messages={{
          title: messages.site.title,
          description: messages.footer.description,
          rights: messages.footer.rights,
          navigation: messages.footer.navigation,
          home: messages.nav.home,
          styleguide: messages.nav.styleguide,
          blog: messages.nav.blog,
          legal: messages.footer.legal,
          privacy: messages.footer.privacy,
          terms: messages.footer.terms,
        }}
      />
    </div>
  );
}
