import React from 'react';
import Link from 'next/link';
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

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);

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
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
          <AmbientGlow position="top" />

          <Container>
            <div className="relative z-10 flex flex-col items-start gap-8 max-w-4xl">
              <SectionHeading
                as="h1"
                eyebrow={messages.hero.eyebrow}
                headingPrefix={messages.hero.headingPrefix}
                headingAccent={messages.hero.headingAccent}
                headingSuffix={messages.hero.headingSuffix}
                description={messages.hero.description}
                locale={typedLocale}
              />

              <div className="flex items-center gap-4 pt-4">
                <Link href={`/${typedLocale}/styleguide`}>
                  <Button variant="ghost" size="md">
                    {messages.hero.cta} →
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <SignalDivider />

        {/* Card Grid Section */}
        <Section variant="deep">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card monoIndex={messages.cards.card1.monoIndex} monoLabel={messages.cards.card1.monoLabel}>
              <div className="flex flex-col gap-4">
                <div>
                  <Tag>{messages.cards.card1.tag}</Tag>
                </div>
                <h2 className="text-h3 text-[var(--color-text)]">{messages.cards.card1.title}</h2>
                <p className="text-body text-[var(--color-text-muted)] flex-1">{messages.cards.card1.description}</p>
                <div className="pt-4">
                  <span className="text-small text-[var(--color-accent)] font-medium hover:underline inline-flex items-center gap-1">
                    {messages.common.readMore} →
                  </span>
                </div>
              </div>
            </Card>

            <Card monoIndex={messages.cards.card2.monoIndex} monoLabel={messages.cards.card2.monoLabel}>
              <div className="flex flex-col gap-4">
                <div>
                  <Tag>{messages.cards.card2.tag}</Tag>
                </div>
                <h2 className="text-h3 text-[var(--color-text)]">{messages.cards.card2.title}</h2>
                <p className="text-body text-[var(--color-text-muted)] flex-1">{messages.cards.card2.description}</p>
                <div className="pt-4">
                  <span className="text-small text-[var(--color-accent)] font-medium hover:underline inline-flex items-center gap-1">
                    {messages.common.readMore} →
                  </span>
                </div>
              </div>
            </Card>

            <Card monoIndex={messages.cards.card3.monoIndex} monoLabel={messages.cards.card3.monoLabel}>
              <div className="flex flex-col gap-4">
                <div>
                  <Tag>{messages.cards.card3.tag}</Tag>
                </div>
                <h2 className="text-h3 text-[var(--color-text)]">{messages.cards.card3.title}</h2>
                <p className="text-body text-[var(--color-text-muted)] flex-1">{messages.cards.card3.description}</p>
                <div className="pt-4">
                  <span className="text-small text-[var(--color-accent)] font-medium hover:underline inline-flex items-center gap-1">
                    {messages.common.readMore} →
                  </span>
                </div>
              </div>
            </Card>
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
