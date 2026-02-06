import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'pink' | 'outline';
}

export default function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700',
    pink: 'bg-pink-100 text-pink-700',
    outline: 'bg-white text-gray-700 border border-gray-300'
  };

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
