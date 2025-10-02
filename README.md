# 🚀 Modern Web Project

Et toppmoderne Next.js 14 prosjekt bygget med TypeScript, Tailwind CSS og beste praksis for webutvikling i 2025.

## ✨ Funksjoner

- **⚡ Next.js 14** - Med App Router og Server Components
- **🔷 TypeScript** - Strenge type-innstillinger for bedre kodekvalitet
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🌙 Dark Mode** - Innebygd mørk/lys modus med next-themes
- **📱 Responsivt Design** - Mobil-først tilnærming
- **🧪 Testing** - Jest og React Testing Library
- **📏 Linting** - ESLint med strenge regler
- **💅 Formatering** - Prettier med automatisk formatering
- **🔄 CI/CD** - GitHub Actions for automatiserte tester
- **🚀 Vercel Ready** - Optimalisert for Vercel deployment
- **♿ Tilgjengelighet** - WCAG-kompatible komponenter
- **🔒 Sikkerhet** - Sikkerhetshoder og beste praksis

## 🛠️ Teknologi Stack

### Frontend
- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animasjoner
- [Lucide React](https://lucide.dev/) - Ikoner
- [Radix UI](https://www.radix-ui.com/) - Headless UI komponenter

### Utvikling & Kvalitet
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Kode formatering
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [lint-staged](https://github.com/okonet/lint-staged) - Pre-commit linting
- [Jest](https://jestjs.io/) - Testing framework
- [React Testing Library](https://testing-library.com/) - Component testing

## 🚀 Kom i gang

### Forutsetninger

- Node.js 18.x eller nyere
- npm eller yarn

### Installasjon

1. **Klon repositoryet**
   ```bash
   git clone <repository-url>
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

4. **Start utviklingsserveren**
   ```bash
   npm run dev
   ```

   Åpne [http://localhost:3000](http://localhost:3000) i nettleseren din.

## 📜 Tilgjengelige Scripts

- `npm run dev` - Start utviklingsserver
- `npm run build` - Bygg for produksjon
- `npm run start` - Start produksjonsserver
- `npm run lint` - Kjør ESLint
- `npm run lint:fix` - Fiks ESLint feil automatisk
- `npm run format` - Formater kode med Prettier
- `npm run format:check` - Sjekk kode formatering
- `npm run type-check` - Kjør TypeScript type checking
- `npm run test` - Kjør tester
- `npm run test:watch` - Kjør tester i watch mode
- `npm run test:coverage` - Generer test coverage rapport

## 📁 Prosjektstruktur

```
modern-web-project/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── .husky/
│   └── pre-commit              # Git pre-commit hook
├── public/                     # Statiske filer
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Hjemmeside
│   ├── components/
│   │   ├── ui/                 # Gjenbrukbare UI komponenter
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   └── theme-toggle.tsx    # Dark/light mode toggle
│   └── lib/
│       └── utils.ts            # Utility funksjoner
├── .eslintrc.json              # ESLint konfigurasjon
├── .gitignore                  # Git ignore regler
├── .prettierrc                 # Prettier konfigurasjon
├── jest.config.js              # Jest konfigurasjon
├── jest.setup.js               # Jest setup
├── lighthouserc.json           # Lighthouse CI konfigurasjon
├── next.config.js              # Next.js konfigurasjon
├── package.json                # Dependencies og scripts
├── postcss.config.js           # PostCSS konfigurasjon
├── tailwind.config.ts          # Tailwind CSS konfigurasjon
├── tsconfig.json               # TypeScript konfigurasjon
└── vercel.json                 # Vercel deployment konfigurasjon
```

## 🎨 Styling

Prosjektet bruker Tailwind CSS med et tilpasset design system:

### Farger
- Støtter både lys og mørk modus
- CSS variabler for konsistent theming
- Semantiske fargenavn (primary, secondary, muted, etc.)

### Komponenter
- Bygget med Radix UI primitives
- Fullt tilgjengelige (WCAG AA)
- Konsistent design språk

## 🧪 Testing

### Kjøre tester
```bash
# Kjør alle tester
npm run test

# Kjør tester i watch mode
npm run test:watch

# Generer coverage rapport
npm run test:coverage
```

### Test struktur
- Unit tester for komponenter
- Integration tester for sider
- Minimum 80% code coverage

## 🚀 Deployment

### Vercel (Anbefalt)

1. **Koble til GitHub**
   - Gå til [Vercel Dashboard](https://vercel.com/dashboard)
   - Importer GitHub repository
   - Vercel vil automatisk detektere Next.js

2. **Automatisk deployment**
   - Push til `main` branch for produksjon
   - Pull requests får preview URLs

### Miljøvariabler
Opprett `.env.local` for lokale miljøvariabler:
```bash
# Eksempel miljøvariabler
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🔧 Konfigurasjon

### TypeScript
- Strenge type-innstillinger aktivert
- Path mapping konfigurert (`@/` for `src/`)
- Unused variables og parameters sjekkes

### ESLint
- Extends Next.js og TypeScript recommended
- Import sorting aktivert
- React hooks exhaustive deps sjekket

### Prettier
- Tailwind CSS plugin for class sorting
- Konsistent kode formatering

## 🤝 Bidrag

1. Fork repositoryet
2. Opprett en feature branch (`git checkout -b feature/amazing-feature`)
3. Commit endringene dine (`git commit -m 'Add amazing feature'`)
4. Push til branchen (`git push origin feature/amazing-feature`)
5. Åpne en Pull Request

### Kode stil
- Følg eksisterende kode stil
- Kjør `npm run lint:fix` før commit
- Skriv meningsfulle commit meldinger
- Legg til tester for nye funksjoner

## 📝 Lisens

Dette prosjektet er lisensiert under MIT License - se [LICENSE](LICENSE) filen for detaljer.

## 🙏 Anerkjennelser

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI komponenter inspirasjon
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

Hvis du har spørsmål eller trenger hjelp:

- 📧 Email: din-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/username/modern-web-project/issues)
- 💬 Diskusjoner: [GitHub Discussions](https://github.com/username/modern-web-project/discussions)

---

**Bygget med ❤️ og moderne teknologi**
