import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-obsidian disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-sm',
    secondary:
    'bg-transparent border border-gray-300 dark:border-graphite text-text-primary hover:border-accent hover:text-accent',
    text: 'bg-transparent text-text-secondary hover:text-accent px-0 py-2'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>

      {children}
    </motion.button>);

}