import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stackradar-dev.vercel.app'),
  title: {
    default: 'StackRadar — AI Tech Stack Trend Analyzer',
    template: '%s | StackRadar',
  },
  description:
    'Know what technologies to learn before everyone else. ' +
    'Real data from 65,437 developers worldwide. Market demand, ' +
    'growth trends, skill analysis and tech battle comparisons.',
  keywords: [
    'tech stack analyzer',
    'what to learn programming 2024',
    'best programming language to learn',
    'developer skills market demand',
    'javascript vs typescript',
    'react vs angular',
    'python vs php',
    'programming trends 2024',
    'stack overflow survey 2024',
    'software developer career guide',
    'best framework to learn 2024',
    'web development trends',
    'freelance developer skills',
    'upwork skills demand',
    'programming language popularity',
  ],
  authors: [{ name: 'Muhammad Haseeb Ur Rehman', url: 'https://github.com/haseebcodess' }],
  creator: 'Muhammad Haseeb Ur Rehman',
  publisher: 'StackRadar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stackradar-dev.vercel.app',
    siteName: 'StackRadar',
    title: 'StackRadar — AI Tech Stack Trend Analyzer',
    description:
      'Know what technologies to learn before everyone else. ' +
      'Real data from 65,437 developers worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StackRadar — AI Tech Stack Trend Analyzer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackRadar — AI Tech Stack Trend Analyzer',
    description:
      'Know what technologies to learn before everyone else. ' +
      'Real data from 65,437 developers.',
    images: ['/og-image.png'],
    creator: '@haseebcodess',
  },
  alternates: {
    canonical: 'https://stackradar-dev.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Lahore, Pakistan" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'StackRadar',
              url: 'https://stackradar-dev.vercel.app',
              description:
                'AI-powered tech stack trend analyzer. Know what technologies ' +
                'to learn before everyone else. Real data from 65,437 developers.',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              author: {
                '@type': 'Person',
                name: 'Muhammad Haseeb Ur Rehman',
                url: 'https://github.com/haseebcodess',
              },
              keywords:
                'tech stack, developer tools, programming trends, ' +
                'skill analysis, market demand, javascript, python, react',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}