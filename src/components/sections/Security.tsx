export default function Security() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Sikkerhet og personvern</h2>
        <p className="mt-2 text-muted-foreground">
          Bygget for tillit: kryptering, tilgangskontroll og datalagring der du trenger det.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
        <div className="glass gradient-border p-6">
          <h3 className="font-semibold">Kryptering</h3>
          <p className="mt-2 text-sm text-muted-foreground">TLS i transitt, AES‑256 i ro.</p>
        </div>
        <div className="glass gradient-border p-6">
          <h3 className="font-semibold">Tilgang</h3>
          <p className="mt-2 text-sm text-muted-foreground">RBAC, SSO/SAML på Business.</p>
        </div>
        <div className="glass gradient-border p-6">
          <h3 className="font-semibold">Dataområde</h3>
          <p className="mt-2 text-sm text-muted-foreground">EU‑lagring tilgjengelig. DPA på forespørsel.</p>
        </div>
      </div>
    </section>
  );
}
