import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'pink-light' | 'pink-medium' | 'gradient';
}

export default function Section({ id, children, className, variant = 'default' }: SectionProps) {
  const variantStyles = {
    default: 'bg-white',
    'pink-light': 'bg-pink-50',
    'pink-medium': 'bg-pink-100',
    gradient: 'bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200'
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </section>
  );
}
