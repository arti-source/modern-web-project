"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import GlassCard from '@/components/ui/glass-card';

const transcriptSamples = [
  'Takk for at dere kom. Dagens agenda er lansering.',
  'Vi trenger en plan for onboarding av nye kunder.',
  'Frist: fredag. Ansvarlig: Mari. Oppfølging neste uke.',
];

const summarySamples = [
  'Sammendrag: Teamet prioriterer lansering, og avklarer milepæler.',
  'Beslutninger: MVP scope bekreftet. Beta i uke 42.',
  'Oppgaver: Mari – onboardingplan. Jonas – demo deck.',
];

export default function LiveDemo() {
  const [line, setLine] = React.useState(0);
  const [phase, setPhase] = React.useState<'transcribe' | 'summarize'>('transcribe');

  React.useEffect(() => {
    const id = setInterval(() => {
      setLine((l) => (l + 1) % transcriptSamples.length);
      if (Math.random() > 0.7) setPhase((p) => (p === 'transcribe' ? 'summarize' : 'transcribe'));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Se Notably i aksjon</h2>
        <p className="mt-2 text-muted-foreground">
          Simulert møte → transkribering → AI‑sammendrag. Raskt og tydelig.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Mic className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">Live transkribering</h3>
            </div>
            <p className="min-h-16 text-sm text-muted-foreground">
              {transcriptSamples[line]}
            </p>
            <div className="mt-4 h-10 w-full overflow-hidden rounded-md bg-primary/5">
              <div className="h-full w-full animate-progress bg-primary/30" />
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">AI‑sammendrag</h3>
            </div>
            <motion.ul
              key={phase}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-2 text-sm text-muted-foreground"
            >
              {summarySamples.map((s) => (
                <li key={s} className="rounded-md border border-white/15 bg-white/5 p-2">
                  {s}
                </li>
              ))}
            </motion.ul>
            <Button size="sm" variant="outline" className="mt-4">
              Se hele referatet
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

