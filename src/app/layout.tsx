import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stackradar-dev.vercel.app'),
  title: {
    default: 'StackRadar — AI Tech Stack Trend Analyzer',
    template: '%s | StackRadar',
  },
  description:
    'StackRadar analyzes tech stack trends using real data from 65,437 ' +
    'developers. Find out which programming language, framework or database ' +
    'to learn next. Free market demand analysis, skill gap checker and ' +
    '6-month AI forecast.',
  keywords: [
    // High volume — broad intent
    'best programming language to learn 2024',
    'what programming language should I learn',
    'most popular programming languages',
    'best tech stack 2024',
    'MERN stack',
    'full stack developer roadmap',
    'web development trends 2024',
    'javascript vs typescript',
    'react vs angular 2024',
    'python vs php',
    'postgresql vs mysql',
    'best database for web development',
    'best framework for web development',
    'node js vs java',
    'flutter vs react native',

    // Medium volume — comparison intent
    'tech stack comparison',
    'MERN stack vs MEAN stack',
    'what is the best stack for web development',
    'most in demand programming skills 2024',
    'which coding language is most in demand',
    'best backend language 2024',
    'best frontend framework 2024',
    'stack overflow developer survey 2024',
    'programming language market demand',
    'developer skills demand analysis',
    'typescript vs javascript which to learn',
    'next js vs vue js',
    'mongodb vs firebase',
    'docker vs kubernetes beginner',
    'aws vs azure for developers',

    // Low volume — high intent, easy to rank
    'tech stack analyzer tool',
    'programming skill gap checker',
    'what should a developer learn next',
    'developer market demand tool',
    'check my programming skills against market',
    'skill match score developer',
    'which tech has highest demand 2024',
    'technology trend analyzer for developers',
    'free developer skill analyzer',
    'stack overflow survey data analysis',
    'rising technologies 2024',
    'declining technologies 2024',
    'AI powered tech stack recommender',
    'best skills for freelance developer',
    'upwork skills demand 2024',
    'fiverr best developer skills',
    'Pakistani developer career guide',
    'software developer career path 2024',
    'programming language popularity chart',
    'google trends programming languages',
  ],
  authors: [
    {
      name: 'Muhammad Haseeb Ur Rehman',
      url: 'https://github.com/haseebcodess',
    },
  ],
  creator: 'Muhammad Haseeb Ur Rehman',
  publisher: 'StackRadar',
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stackradar-dev.vercel.app',
    siteName: 'StackRadar',
    title: 'StackRadar — Know What Tech To Learn Next',
    description:
      'Real data from 65,437 developers. Find your skill gap, ' +
      'get a market match score, and know exactly what to learn ' +
      'next. Free AI-powered tech stack trend analyzer.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StackRadar — AI Tech Stack Trend Analyzer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackRadar — Know What Tech To Learn Next',
    description:
      'Real data from 65,437 developers. Find your skill gap ' +
      'and know exactly what to learn next.',
    images: ['/og-image.png'],
    creator: '@haseebcodess',
    site: '@haseebcodess',
  },
  alternates: {
    canonical: 'https://stackradar-dev.vercel.app',
  },
  verification: {
  google: 'vyJycu4ZxnyHOe0ushH5fxzlgsq_62d_o9I2OM0KLk8',
  other: {
    'msvalidate.01': 'C5B69267DEEA4D40FA3765ECD5754B83',
  },
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Lahore, Pakistan" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#FF6B4A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebApplication',
                  '@id': 'https://stackradar-dev.vercel.app/#webapp',
                  name: 'StackRadar',
                  url: 'https://stackradar-dev.vercel.app',
                  description:
                    'AI-powered tech stack trend analyzer. Know which ' +
                    'programming languages and frameworks to learn next. ' +
                    'Real data from 65,437 developers worldwide.',
                  applicationCategory: 'DeveloperApplication',
                  operatingSystem: 'Web',
                  browserRequirements: 'Requires JavaScript',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  featureList: [
                    'Market Demand Analysis',
                    'Growth Trend Forecasting',
                    'Skill Gap Analysis',
                    'Tech Stack Comparison',
                    '6-Month AI Forecast',
                  ],
                  screenshot: 'https://stackradar-dev.vercel.app/og-image.png',
                  author: {
                    '@type': 'Person',
                    name: 'Muhammad Haseeb Ur Rehman',
                    url: 'https://github.com/haseebcodess',
                    image: 'https://stackradar-dev.vercel.app/profile.jpeg',
                    jobTitle: 'Full Stack Developer',
                    alumniOf: 'University of Punjab',
                    address: {
                      '@type': 'PostalAddress',
                      addressLocality: 'Lahore',
                      addressCountry: 'PK',
                    },
                    sameAs: [
                      'https://github.com/haseebcodess',
                      'https://linkedin.com/in/haseebcodess',
                      'https://haseeb-codess-portfolio.netlify.app',
                    ],
                  },
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is the best programming language to learn in 2024?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'According to Stack Overflow Survey 2024 data from 65,437 developers, JavaScript leads at 57.3%, followed by Python at 46.9% and TypeScript at 35.4%. TypeScript is the fastest growing language to learn for career advancement.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the best tech stack to learn in 2024?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The MERN stack (MongoDB, Express, React, Node.js) is the most in-demand full stack combination for freelancers and web developers. TypeScript, PostgreSQL and Docker are the top additions to master alongside it.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is Python or PHP better to learn?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Python at 46.9% usage dominates over PHP at 16.7% among professional developers. Python leads in AI, data science, backend development and automation. PHP is declining rapidly in new projects.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'React vs Angular — which framework should I learn?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'React at 29.3% is significantly ahead of Angular at 12.7% in market usage. React dominates freelance and startup hiring globally while Angular remains in enterprise. Learn React first.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What skills do freelance developers need in 2024?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The highest demand skills for freelance developers are JavaScript, Python, TypeScript, React, Node.js, PostgreSQL, Docker and AWS. Use StackRadar skill analysis to check your specific gaps against current market demand.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}