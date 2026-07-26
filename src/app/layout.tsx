import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StackRadar — AI Tech Stack Trend Analyzer',
  description: 'Know what technologies to learn before everyone else. Real data from 65,437 developers.',
  keywords: 'tech stack, developer trends, what to learn, programming, JavaScript, Python, React',
  openGraph: {
    title: 'StackRadar — AI Tech Stack Trend Analyzer',
    description: 'Know what technologies to learn before everyone else.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
