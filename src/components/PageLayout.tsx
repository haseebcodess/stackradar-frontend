'use client'

import Sidebar from './Sidebar'
import Footer from './Footer'

interface Props { children: React.ReactNode; maxWidth?: number }

export default function PageLayout({ children, maxWidth = 1100 }: Props) {
  return (
    <div className="flex min-h-screen" style={{ background: '#FFFFFF' }}>
      <Sidebar />
      <div style={{ marginLeft: 224, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1, padding: '48px 56px', maxWidth }}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}