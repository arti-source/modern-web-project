# 🚀 Deployment Guide

Denne guiden hjelper deg med å deploye Modern Web Project til GitHub og Vercel.

## 📋 Forutsetninger

- GitHub konto
- Vercel konto (kan logge inn med GitHub)
- Git installert lokalt

## 🔧 Steg-for-steg deployment

### 1. 📦 Forbered prosjektet

Naviger til prosjektmappen:
```bash
cd /Users/vegard/Projects/modern-web-project
```

Kjør setup scriptet:
```bash
./setup-github.sh
```

### 2. 🐙 Opprett GitHub Repository

1. Gå til [GitHub](https://github.com/new)
2. Fyll ut repository detaljer:
   - **Repository name**: `modern-web-project` (eller ditt ønskede navn)
   - **Description**: `A modern Next.js 14 project with TypeScript and Tailwind CSS`
   - **Visibility**: Public eller Private (ditt valg)
   - **IKKE** initialiser med README, .gitignore eller license (vi har allerede disse)

3. Klikk "Create repository"

### 3. 📤 Push til GitHub

Kopier repository URL fra GitHub og kjør:

```bash
# Legg til remote origin (erstatt med din URL)
git remote add origin https://github.com/your-username/modern-web-project.git

# Push til GitHub
git push -u origin main
```

### 4. 🚀 Deploy til Vercel

#### Automatisk deployment (Anbefalt)

1. Gå til [Vercel](https://vercel.com/new)
2. Logg inn med GitHub kontoen din
3. Klikk "Import" ved siden av ditt repository
4. Konfigurer deployment:
   - **Project Name**: `modern-web-project`
   - **Framework Preset**: Next.js (auto-detektert)
   - **Root Directory**: `./` (standard)
   - **Build Command**: `npm run build` (auto-detektert)
   - **Output Directory**: `.next` (auto-detektert)
   - **Install Command**: `npm install` (auto-detektert)

5. Klikk "Deploy"

#### Manuell deployment via CLI

Alternativt kan du bruke Vercel CLI:

```bash
# Installer Vercel CLI
npm i -g vercel

# Login til Vercel
vercel login

# Deploy prosjektet
vercel

# For produksjon deployment
vercel --prod
```

### 5. ⚙️ Konfigurer miljøvariabler (hvis nødvendig)

Hvis du har miljøvariabler:

1. I Vercel dashboard, gå til ditt prosjekt
2. Klikk "Settings" → "Environment Variables"
3. Legg til dine variabler basert på `env.example`

### 6. 🔄 Automatisk deployment

Når alt er satt opp:

- **Push til main branch** → Automatisk produksjon deployment
- **Pull requests** → Automatisk preview deployment
- **GitHub Actions** → Kjører tester automatisk

## 📊 Post-deployment sjekkliste

- [ ] Nettsiden laster korrekt på Vercel URL
- [ ] Dark/light mode fungerer
- [ ] Responsive design fungerer på mobil
- [ ] Alle lenker og knapper fungerer
- [ ] SEO metadata er korrekt
- [ ] Performance score er god (sjekk med Lighthouse)

## 🛠️ Feilsøking

### Vanlige problemer

**Build feil:**
- Sjekk at alle dependencies er installert
- Kontroller TypeScript feil
- Se Vercel build logs for detaljer

**Styling problemer:**
- Sjekk at Tailwind CSS er konfigurert riktig
- Kontroller at CSS filer importeres korrekt

**Environment variabler:**
- Sørg for at alle nødvendige variabler er satt i Vercel
- Bruk `NEXT_PUBLIC_` prefix for client-side variabler

### Nyttige kommandoer

```bash
# Test build lokalt
npm run build
npm run start

# Sjekk for feil
npm run lint
npm run type-check

# Kjør tester
npm run test
```

## 🔗 Nyttige lenker

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🎉 Gratulerer!

Ditt moderne Next.js prosjekt er nå live på internett! 🌐

**Neste steg:**
- Tilpass innholdet til dine behov
- Legg til flere sider og komponenter
- Sett opp analytics (Google Analytics, Vercel Analytics)
- Konfigurer custom domain hvis ønskelig

---

**Trenger hjelp?** Åpne en issue på GitHub eller kontakt support.
