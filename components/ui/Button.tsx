import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-pink-600 text-white hover:bg-pink-700 shadow-medium hover:shadow-large',
    secondary: 'bg-white text-pink-600 hover:bg-pink-50 border-2 border-pink-600',
    outline: 'bg-transparent text-gray-700 hover:bg-gray-100 border-2 border-gray-300'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={cn(
        'font-medium rounded-lg transition-all duration-300 transform hover:scale-105',
        variantStyles[variant],
        sizeStyles[size],
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
