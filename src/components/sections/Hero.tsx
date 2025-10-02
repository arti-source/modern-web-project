"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Share2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import GlassCard from '@/components/ui/glass-card';

function Waveform() {
  return (
    <div className="mx-auto mt-8 flex h-16 max-w-xl items-end gap-1 opacity-80">
      {Array.from({ length: 48 }).map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="w-1.5 rounded-sm bg-primary/60 animate-wave"
          style={{ animationDelay: `${(i % 8) * 120}ms` }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,hsl(var(--primary)/0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div style={{ y }}>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            AI‑drevne møtereferater
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> for teamet ditt</span>
          </h1>
        </motion.div>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Fang alt som blir sagt – transkribering, sammendrag, beslutninger og oppgaver. Del klare referater på sekunder.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="group">
            Prøv Notably gratis
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Se demo
          </Button>
        </div>

        <Waveform />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">Automatiske referater</p>
            </div>
          </GlassCard>
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">Sammendrag og oppgaver</p>
            </div>
          </GlassCard>
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <Share2 className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">Deling og integrasjoner</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

