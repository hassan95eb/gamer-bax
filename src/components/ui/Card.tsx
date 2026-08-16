import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  monoIndex?: string;
  monoLabel?: string;
  className?: string;
}

export function Card({ children, monoIndex, monoLabel, className = '' }: CardProps) {
  return (
    <div
      className={`card-surface border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors duration-150 ease-out rounded-[var(--radius-lg)] p-6 sm:p-8 flex flex-col ${className}`}
    >
      {(monoIndex || monoLabel) && (
        <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 mb-6">
          {monoIndex && (
            <span className="text-mono-label text-[var(--color-accent)] font-mono">
              {monoIndex}
            </span>
          )}
          {monoLabel && (
            <span className="text-mono-label text-[var(--color-text-dim)] uppercase">
              {monoLabel}
            </span>
          )}
        </div>
      )}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
