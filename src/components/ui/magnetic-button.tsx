"use client";

import * as React from 'react';

import { Button, type ButtonProps } from '@/components/ui/button';

export type MagneticButtonProps = ButtonProps & {
  intensity?: number; // px of max translation
};

export default function MagneticButton({
  className,
  children,
  intensity = 12,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});
  const reduceMotion = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const onMove = (e: React.PointerEvent) => {
    if (!ref.current || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (mx - cx) / cx;
    const dy = (my - cy) / cy;
    const tx = dx * intensity;
    const ty = dy * intensity;
    setStyle({ transform: `translate3d(${tx}px, ${ty}px, 0)` });
  };

  const onLeave = () => setStyle({ transform: 'translate3d(0,0,0)' });

  return (
    <div className="relative inline-block">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120px 120px at 50% 50%, hsl(var(--primary)/0.3), transparent 60%)',
        }}
      />
      <Button
        ref={ref}
        className={`group ${className ?? ''}`}
        style={style}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}
