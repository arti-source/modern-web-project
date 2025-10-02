import * as React from 'react';

import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'sm' | 'md' | 'lg';
}

const elevationMap: Record<NonNullable<GlassCardProps['elevation']>, string> = {
  sm: 'bg-white/10 dark:bg-white/5 backdrop-blur-xl border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_30px_rgba(0,0,0,0.15)]',
  md: 'bg-white/12 dark:bg-white/7 backdrop-blur-2xl border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.25)]',
  lg: 'bg-white/15 dark:bg-white/10 backdrop-blur-3xl border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_16px_60px_rgba(0,0,0,0.35)]',
};

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, elevation = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border transition-all',
          elevationMap[elevation],
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = 'GlassCard';

export default GlassCard;

