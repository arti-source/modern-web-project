"use client";

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, FileText, Share2 } from 'lucide-react';

import GlassCard from '@/components/ui/glass-card';
import TiltCard from '@/components/ui/tilt-card';

export default function Journey() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const step1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const step2 = useTransform(scrollYProgress, [0.25, 0.5, 0.6], [0, 1, 0]);
  const step3 = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 1]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-[180vh] py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,hsl(var(--primary)/0.18),transparent_70%)]" />

      <div className="container relative z-10 mx-auto grid items-start gap-10 px-4 md:grid-cols-2">
        {/* Sticky visual */}
        <div className="sticky top-24 hidden md:block">
          <motion.div style={{ y: yBlob }} className="relative">
            <TiltCard className="glass gradient-border rounded-[1.5rem] p-4">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-white/5 p-4">
                {/* Simple UI skeleton to represent product */}
                <div className="mb-4 h-3 w-24 rounded bg-white/20" />
                <div className="space-y-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-primary/60" />
                      <div className="h-2.5 flex-1 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-24 rounded-md bg-primary/10" />
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Steps that fade between */}
        <div className="space-y-10">
          <motion.div style={{ opacity: step1 }} className="will-change-opacity">
            <GlassCard className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">Opptak og transkribering</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Start opptak direkte eller importer fra møtet. Transkribering skjer i sanntid.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div style={{ opacity: step2 }} className="will-change-opacity">
            <GlassCard className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">AI‑sammendrag og beslutninger</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatisk sammendrag, klare action items og beslutninger — delt på sekunder.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div style={{ opacity: step3 }} className="will-change-opacity">
            <GlassCard className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Share2 className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">Deling og oppfølging</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Synk til Slack, Notion, Asana og Jira. Følg opp uten friksjon.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
