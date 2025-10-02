"use client";

import { motion } from 'framer-motion';
import { ArrowDownRight, CheckCircle, FileText, Share2 } from 'lucide-react';

import GlassCard from '@/components/ui/glass-card';

const steps = [
  {
    icon: FileText,
    title: 'Opptak eller import',
    description: 'Ta opp møter direkte eller importer fra Meet, Zoom eller Teams.',
  },
  {
    icon: CheckCircle,
    title: 'AI‑sammendrag',
    description: 'Notably trekker ut beslutninger, action items og nøkkelpunkter automatisk.',
  },
  {
    icon: Share2,
    title: 'Del og følg opp',
    description: 'Del referater på sekunder og synk til Slack, Notion, Asana eller Jira.',
  },
];

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Slik fungerer det</h2>
        <p className="mt-2 text-muted-foreground">
          Tre enkle steg fra møte til delbare referater med klare neste steg.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 * i }}
          >
            <GlassCard className="h-full p-6">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

