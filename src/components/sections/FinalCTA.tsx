import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="relative overflow-hidden rounded-3xl glass gradient-border p-10 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_200px_at_50%_0%,hsl(var(--primary)/0.25),transparent_70%)]" />
        <h2 className="relative z-10 text-3xl font-bold">Klar til å komme i gang?</h2>
        <p className="relative z-10 mt-2 text-muted-foreground">
          Start gratis, eller book en demo for teamet ditt.
        </p>
        <div className="relative z-10 mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="premium">
            Opprett gratis konto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Book en demo
          </Button>
        </div>
      </div>
    </section>
  );
}
