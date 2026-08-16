import React from 'react';
import { Eyebrow } from './Eyebrow';

export interface SectionHeadingProps {
  eyebrow?: string;
  headingPrefix?: string;
  headingAccent?: string;
  headingSuffix?: string;
  description?: string;
  locale?: 'fa' | 'en';
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  headingPrefix,
  headingAccent,
  headingSuffix,
  description,
  locale = 'en',
  as: Component = 'h2',
  className = '',
}: SectionHeadingProps) {
  const headingClass = Component === 'h1' ? 'text-display' : 'text-h2';

  return (
    <div className={`space-y-4 max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow locale={locale}>{eyebrow}</Eyebrow>}
      <Component className={`${headingClass} text-[var(--color-text)]`}>
        {headingPrefix}
        {headingAccent && <span className="text-[var(--color-accent)]">{headingAccent}</span>}
        {headingSuffix}
      </Component>
      {description && <p className="text-body text-[var(--color-text-muted)] max-w-2xl">{description}</p>}
    </div>
  );
}
