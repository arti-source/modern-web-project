"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

export type TiltCardProps = React.HTMLAttributes<HTMLDivElement> & {
  maxTilt?: number; // degrees
  glare?: boolean;
};

export default function TiltCard({
  className,
  children,
  maxTilt = 10,
  glare = true,
  ...props
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const handleMove = (e: React.PointerEvent) => {
    if (!ref.current || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1 to 1
    const py = (y / rect.height) * 2 - 1;
    const rx = (-py * maxTilt).toFixed(2);
    const ry = (px * maxTilt).toFixed(2);
    ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    if (glare) {
      ref.current.style.setProperty('--glx', `${x}px`);
      ref.current.style.setProperty('--gly', `${y}px`);
    }
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className={cn(
        'relative transition-transform will-change-transform',
        glare &&
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:content-[''] after:[background:radial-gradient(240px_180px_at_var(--glx,50%)_var(--gly,50%),rgba(255,255,255,0.25),transparent_60%)]",
        className
      )}
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...props}
    >
      {children}
    </div>
  );
}

