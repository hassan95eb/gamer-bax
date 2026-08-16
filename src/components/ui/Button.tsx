import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'icon';
  size?: 'sm' | 'md';
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    let baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    let variantStyles = '';
    let sizeStyles = '';

    if (variant === 'primary') {
      variantStyles =
        'bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:border-[var(--color-accent)] font-mono uppercase';
    } else if (variant === 'ghost') {
      variantStyles =
        'bg-transparent text-[var(--color-text)] hover:text-[var(--color-accent)] underline-offset-4 hover:underline';
    } else if (variant === 'icon') {
      variantStyles =
        'bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-dim)] rounded-full';
    }

    if (variant === 'icon') {
      sizeStyles = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm';
    } else {
      if (size === 'sm') {
        sizeStyles = 'px-3 py-1.5 text-xs rounded-[var(--radius-sm)]';
      } else {
        sizeStyles = 'px-5 py-2.5 text-sm rounded-[var(--radius-md)]';
      }
    }

    return (
      <button ref={ref} className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
