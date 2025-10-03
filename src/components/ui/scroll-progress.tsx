"use client";

import * as React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent"
      style={{
        background:
          'linear-gradient(to right, hsl(var(--primary)), transparent)',
      }}
    >
      <motion.div
        className="h-full bg-primary"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />
    </motion.div>
  );
}

