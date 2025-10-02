export default function FAQ() {
  const faqs = [
    {
      q: 'Hvordan håndterer dere personvern?',
      a: 'All trafikk er kryptert, og vi tilbyr datalagring i EU. Databehandleravtale kan inngås på Business‑planen.',
    },
    {
      q: 'Fungerer Notably med Zoom og Teams?',
      a: 'Ja. Du kan importere opptak, eller bruke integrasjoner der det er tilgjengelig.',
    },
    {
      q: 'Kan vi eksportere referater?',
      a: 'Ja, PDF og Markdown støttes, i tillegg til delbar lenke.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <p className="mt-2 text-muted-foreground">Ofte stilte spørsmål om Notably.</p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border bg-white/5 p-4 backdrop-blur-xl">
            <summary className="cursor-pointer list-none font-medium">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

