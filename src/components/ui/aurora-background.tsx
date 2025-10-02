"use client";

import * as React from 'react';

export default function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      {/* Aurora glow layers */}
      <div className="aurora-layer" />
      {/* Subtle grid + noise on top for texture */}
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="absolute inset-0 bg-noise opacity-[0.25] mix-blend-overlay" />
    </div>
  );
}

