import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`max-w-[1200px] mx-auto px-6 w-full ${className}`}>{children}</div>;
}

export interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'deep';
  className?: string;
  id?: string;
}

export function Section({ children, variant = 'default', className = '', id }: SectionProps) {
  const bgClass = variant === 'deep' ? 'bg-[var(--color-bg-deep)]' : 'bg-[var(--color-bg)]';

  return (
    <section id={id} className={`py-[56px] md:py-[72px] lg:py-[128px] ${bgClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
