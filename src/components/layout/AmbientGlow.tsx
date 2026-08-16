import React from 'react';

export interface AmbientGlowProps {
  position?: 'top' | 'bottom';
  className?: string;
}

export function AmbientGlow({ position = 'top', className = '' }: AmbientGlowProps) {
  const posClass = position === 'top' ? 'top-0 -translate-y-1/2' : 'bottom-0 translate-y-1/2';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute start-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[350px] rounded-full bg-[var(--color-glow)] opacity-40 blur-[120px] ${posClass} ${className}`}
    />
  );
}
