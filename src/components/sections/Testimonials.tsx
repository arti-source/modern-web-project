import GlassCard from '@/components/ui/glass-card';

const testimonials = [
  {
    quote:
      'Referatene er klare før vi forlater møterommet. Oppfølgingen er blitt merkbart bedre.',
    author: 'Linn, Prosjektleder',
  },
  {
    quote: 'Vi sparer 30 minutter per møte – Notably er blitt standard hos oss.',
    author: 'Jonas, Produktleder',
  },
  {
    quote: 'Integrasjonene til Slack og Notion gjør deling og sporbarhet superenkelt.',
    author: 'Mari, CTO',
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Kundehistorier</h2>
        <p className="mt-2 text-muted-foreground">Hva team sier etter å ha tatt i bruk Notably.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <GlassCard key={t.author} elevation="sm" className="p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
            <p className="mt-4 text-xs font-semibold">{t.author}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

