import * as React from 'react';

import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

const elevationMap: Record<NonNullable<GlassCardProps['elevation']>, string> = {
  sm: 'glass glass-sm',
  md: 'glass',
  lg: 'glass glass-lg',
};

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, elevation = 'md', interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl transition-all gradient-border',
          elevationMap[elevation],
          interactive && 'shine will-change-transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/20',
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = 'GlassCard';

export default GlassCard;
