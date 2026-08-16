import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  locale?: 'fa' | 'en';
  className?: string;
}

export function Eyebrow({ children, locale = 'en', className = '' }: EyebrowProps) {
  const isFa = locale === 'fa';

  return (
    <div className={`inline-flex items-center gap-2 text-eyebrow text-[var(--color-accent-dim)] ${className}`}>
      {isFa ? (
        <span className="inline-block w-3 h-[2px] bg-[var(--color-accent)]" aria-hidden="true" />
      ) : (
        <span className="text-[var(--color-accent)] font-mono text-[10px]" aria-hidden="true">
          ◆
        </span>
      )}
      <span className={isFa ? '' : 'uppercase font-mono tracking-[0.18em]'}>{children}</span>
    </div>
  );
}
