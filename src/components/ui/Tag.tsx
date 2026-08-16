import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-mono-label text-[var(--color-text-dim)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-150 ease-out rounded-full uppercase font-mono ${className}`}
    >
      {children}
    </span>
  );
}
