"use client";

import * as React from 'react';

export default function InteractiveSpotlight() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty('--mx', `${e.clientX}px`);
      el.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 hidden md:block"
      style={{
        background:
          'radial-gradient(320px 240px at var(--mx,50%) var(--my,50%), hsl(var(--primary)/0.12), transparent 60%)',
      }}
    />
  );
}

