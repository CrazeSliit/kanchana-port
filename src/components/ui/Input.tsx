import React from 'react';
interface InputProps extends
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
}
export function Input({
  label,
  error,
  multiline = false,
  className = '',
  ...props
}: InputProps) {
  const baseStyles =
  'w-full bg-transparent border-b border-gray-300 dark:border-graphite py-3 text-base text-text-primary placeholder-gray-500 focus:border-accent focus:outline-none transition-colors duration-200 rounded-none';
  return (
    <div className="w-full mb-6">
      {label &&
      <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      }
      {multiline ?
      <textarea
        className={`${baseStyles} min-h-[120px] resize-y ${className}`}
        {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} /> :


      <input
        className={`${baseStyles} ${className}`}
        {...props as React.InputHTMLAttributes<HTMLInputElement>} />

      }
      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>);

}