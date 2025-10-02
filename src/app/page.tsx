'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import LiveDemo from '@/components/sections/LiveDemo';
import Integrations from '@/components/sections/Integrations';
import Security from '@/components/sections/Security';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/notably-logo.png"
              alt="Notably logo"
              width={140}
              height={36}
              priority
              className="h-9 w-auto dark:brightness-110"
            />
            <span className="sr-only">Notably</span>
          </Link>
        </motion.div>
        <ThemeToggle />
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <LiveDemo />
        <Integrations />
        <Security />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="mt-24 border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Notably © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
