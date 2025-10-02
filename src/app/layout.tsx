import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Notably – AI møtereferater',
  description:
    'Notably er en app for å lage møtereferater med kunstig intelligens – fra transkribering til sammendrag, beslutninger og oppgaver.',
  keywords: ['Notably', 'AI', 'møtereferater', 'transkribering', 'møter'],
  authors: [{ name: 'Notably' }],
  creator: 'Notably',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://your-domain.com',
    title: 'Notably – AI møtereferater',
    description:
      'Notably hjelper teamet ditt å fange opp alt som blir sagt i møter – del klare referater på sekunder.',
    siteName: 'Notably',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notably – AI møtereferater',
    description:
      'Fang opp alt i møter med AI: transkribering, sammendrag, beslutninger og oppgaver.',
    creator: '@notably',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
