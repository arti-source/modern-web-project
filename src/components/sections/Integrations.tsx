"use client";

import GlassCard from '@/components/ui/glass-card';

const tools = ['Google Meet', 'Zoom', 'Microsoft Teams', 'Slack', 'Notion', 'Asana', 'Jira', 'HubSpot'];

export default function Integrations() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Integrasjoner</h2>
        <p className="mt-2 text-muted-foreground">Fungerer med verktøyene du allerede bruker.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {tools.map((t) => (
          <GlassCard key={t} elevation="sm" interactive className="flex items-center justify-center p-4">
            <span className="text-sm text-muted-foreground">{t}</span>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
