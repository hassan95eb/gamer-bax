import React from 'react';

export interface SignalDividerProps {
  className?: string;
}

export function SignalDivider({ className = '' }: SignalDividerProps) {
  return (
    <div className={`relative w-full py-8 flex items-center justify-center ${className}`} aria-hidden="true">
      <div className="w-full h-[1px] bg-[var(--color-border)] relative flex items-center justify-between px-12 sm:px-24">
        <span className="w-1 h-1 rounded-full bg-[var(--color-text-dim)]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        <span className="w-1 h-1 rounded-full bg-[var(--color-text-dim)]" />
        <span className="w-1 h-1 rounded-full bg-[var(--color-text-dim)]" />
      </div>
    </div>
  );
}
