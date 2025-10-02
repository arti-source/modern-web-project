# 🤝 Bidragsguide

Takk for at du vurderer å bidra til Modern Web Project! Vi setter pris på alle bidrag, store som små.

## 📋 Innholdsfortegnelse

- [Kode av oppførsel](#kode-av-oppførsel)
- [Hvordan bidra](#hvordan-bidra)
- [Utvikling setup](#utvikling-setup)
- [Kode stil](#kode-stil)
- [Testing](#testing)
- [Pull Request prosess](#pull-request-prosess)

## 🤝 Kode av oppførsel

Dette prosjektet følger en vennlig og inkluderende tilnærming. Vi forventer at alle bidragsytere:

- Bruker velkomne og inkluderende språk
- Respekterer ulike synspunkter og erfaringer
- Aksepterer konstruktiv kritikk
- Fokuserer på det som er best for fellesskapet

## 🚀 Hvordan bidra

### Rapporter bugs

Hvis du finner en bug, vennligst opprett en issue med:

- **Beskrivelse**: Klar beskrivelse av problemet
- **Reproduksjon**: Steg for å reprodusere feilen
- **Forventet oppførsel**: Hva du forventet skulle skje
- **Skjermbilder**: Hvis relevant
- **Miljø**: OS, nettleser, Node.js versjon

### Foreslå nye funksjoner

For nye funksjoner, opprett en issue med:

- **Beskrivelse**: Detaljert beskrivelse av funksjonen
- **Motivasjon**: Hvorfor denne funksjonen er nyttig
- **Alternativ**: Andre løsninger du har vurdert
- **Implementasjon**: Forslag til hvordan det kan implementeres

## 🛠️ Utvikling setup

1. **Fork repositoryet**
   ```bash
   git clone https://github.com/your-username/modern-web-project.git
   cd modern-web-project
   ```

2. **Installer dependencies**
   ```bash
   npm install
   ```

3. **Sett opp Git hooks**
   ```bash
   npm run prepare
   ```

4. **Opprett en branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start utviklingsserver**
   ```bash
   npm run dev
   ```

## 📏 Kode stil

Vi bruker automatiserte verktøy for å opprettholde konsistent kode stil:

### Linting og formatering
```bash
# Sjekk linting
npm run lint

# Fiks linting automatisk
npm run lint:fix

# Formater kode
npm run format

# Sjekk formatering
npm run format:check
```

### TypeScript
- Bruk strenge types
- Unngå `any` type
- Dokumenter komplekse typer
- Bruk path mapping (`@/` for `src/`)

### React komponenter
- Bruk funksjonelle komponenter
- Implementer proper error boundaries
- Følg React hooks regler
- Bruk forwardRef for UI komponenter

### CSS/Styling
- Bruk Tailwind CSS klasser
- Følg mobile-first tilnærming
- Bruk semantic class names
- Implementer dark mode support

## 🧪 Testing

### Kjør tester
```bash
# Alle tester
npm run test

# Watch mode
npm run test:watch

# Coverage rapport
npm run test:coverage
```

### Test retningslinjer
- Skriv tester for nye komponenter
- Test både happy path og edge cases
- Bruk beskrivende test navn
- Oppretthold minimum 80% coverage

### Test eksempel
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });
});
```

## 📝 Pull Request prosess

1. **Før du sender PR**
   - Kjør alle tester: `npm run test`
   - Sjekk linting: `npm run lint`
   - Sjekk types: `npm run type-check`
   - Test i både lys og mørk modus

2. **PR beskrivelse**
   - Klar tittel som beskriver endringen
   - Detaljert beskrivelse av hva som er endret
   - Link til relaterte issues
   - Skjermbilder for UI endringer

3. **PR sjekkliste**
   - [ ] Koden følger prosjektets stil guide
   - [ ] Jeg har testet endringene mine
   - [ ] Jeg har lagt til/oppdatert tester
   - [ ] Jeg har oppdatert dokumentasjon
   - [ ] Alle CI sjekker passerer

4. **Review prosess**
   - Minst én godkjenning kreves
   - Alle kommentarer må addresseres
   - CI må passere før merge

## 🏗️ Arkitektur retningslinjer

### Mappestruktur
```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── ui/             # Gjenbrukbare UI komponenter
│   └── ...             # Feature-spesifikke komponenter
├── lib/                # Utility funksjoner
├── hooks/              # Custom React hooks
└── types/              # TypeScript type definisjoner
```

### Komponent retningslinjer
- En komponent per fil
- Bruk TypeScript interfaces for props
- Implementer proper error handling
- Dokumenter komplekse komponenter

### State management
- Bruk React state for lokal state
- Vurder Context API for global state
- Implementer proper loading states
- Handle error states gracefully

## 🐛 Debugging

### Vanlige problemer
- **TypeScript feil**: Sjekk `tsconfig.json` paths
- **Import feil**: Bruk `@/` path mapping
- **Styling problemer**: Sjekk Tailwind klasse navn
- **Build feil**: Sjekk Next.js konfigurasjon

### Debug verktøy
- React Developer Tools
- Next.js built-in debugger
- TypeScript language server
- ESLint extension

## 📚 Ressurser

- [Next.js dokumentasjon](https://nextjs.org/docs)
- [React dokumentasjon](https://react.dev)
- [TypeScript handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS dokumentasjon](https://tailwindcss.com/docs)

## 🙏 Takk

Takk for at du bidrar til Modern Web Project! Ditt bidrag gjør prosjektet bedre for alle.

---

**Spørsmål?** Åpne en issue eller kontakt maintainers direkte.
