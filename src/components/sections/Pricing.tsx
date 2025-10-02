import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import GlassCard from '@/components/ui/glass-card';

const tiers = [
  {
    name: 'Free',
    price: '0 kr',
    features: ['Opptil 30 min / møte', 'Automatisk sammendrag', 'Deling via lenke'],
    cta: 'Start gratis',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '149 kr/mnd',
    features: ['Ubegrensede opptak', 'Integrasjoner (Slack, Notion)', 'Eksport (PDF/Markdown)'],
    cta: 'Prøv Pro',
    highlight: true,
  },
  {
    name: 'Business',
    price: 'Kontakt oss',
    features: ['SSO/SAML', 'SLA og dedikert støtte', 'EU‑lagring og DPA'],
    cta: 'Kontakt salg',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Prising</h2>
        <p className="mt-2 text-muted-foreground">Enkel prisstruktur som skalerer med teamet.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <GlassCard
            key={t.name}
            elevation={t.highlight ? 'lg' : 'md'}
            className={t.highlight ? 'relative p-6 ring-1 ring-primary/30' : 'p-6'}
          >
            {t.highlight && (
              <div className="absolute -top-2 right-4 rounded-full bg-primary/20 px-3 py-1 text-xs text-primary">
                Mest valgt
              </div>
            )}
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-2 text-3xl font-bold">{t.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <Button className="mt-6 w-full">
              {t.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

