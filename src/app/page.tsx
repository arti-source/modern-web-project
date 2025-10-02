'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, Share2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

const features = [
  {
    icon: FileText,
    title: 'Automatiske referater',
    description: 'Transkriber møter og generer klare, delbare møtereferater på sekunder.',
  },
  {
    icon: CheckCircle,
    title: 'Sammendrag og oppgaver',
    description: 'AI trekker ut beslutninger, action items og neste steg automatisk.',
  },
  {
    icon: Share2,
    title: 'Integrasjoner og deling',
    description: 'Fungerer med favorittverktøyene dine og gjør deling enkelt.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Notably</h1>
        </motion.div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            AI‑drevne møtereferater
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {' '}for teamet ditt
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Notably hjelper deg å fange opp alt som blir sagt i møter –
            fra transkribering til sammendrag, beslutninger og oppgaver.
            Del referater på sekunder og hold alle på samme side.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group">
              Prøv Notably gratis
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Se hvordan det fungerer
            </Button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Funksjoner</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="rounded-lg bg-muted/50 p-8">
            <h2 className="mb-4 text-2xl font-bold">Klar til å komme i gang?</h2>
            <p className="mb-6 text-muted-foreground">
              Test Notably i dag og opplev hvor mye raskere og tydeligere
              møtene dine kan bli med AI.
            </p>
            <Button size="lg">
              Opprett gratis konto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="mt-24 border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Notably © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
