import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-mono-label text-[var(--color-text-dim)] uppercase font-mono">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-accent)] py-2 text-body text-[var(--color-text)] placeholder-[var(--color-text-dim)] focus:outline-none transition-colors duration-150 ease-out ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={textareaId} className="text-mono-label text-[var(--color-text-dim)] uppercase font-mono">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          className={`w-full bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-accent)] py-2 text-body text-[var(--color-text)] placeholder-[var(--color-text-dim)] focus:outline-none transition-colors duration-150 ease-out resize-y ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
