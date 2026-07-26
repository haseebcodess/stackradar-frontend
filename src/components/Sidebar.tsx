'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mainNav = [
  { id: 'market-demand',  icon: '📊', label: 'Market Demand' },
  { id: 'growth-trends',  icon: '📈', label: 'Growth Trends' },
  { id: 'skill-analysis', icon: '🎯', label: 'Skill Analysis' },
  { id: 'tech-battle',    icon: '⚔️', label: 'Tech Battle' },
]

const pageNav = [
  { id: '/about',     icon: '💡', label: 'About' },
  { id: '/developer', icon: '👨‍💻', label: 'Developer' },
]

export default function Sidebar() {
  const pathname = usePathname()

  const scrollTo = (id: string) => {
    if (pathname !== '/') { window.location.href = `/#${id}`; return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-56 flex flex-col z-40"
      style={{ background: '#FFFFFF', borderRight: '1px solid #E5E7EB', boxShadow: '2px 0 8px rgba(0,0,0,0.04)' }}>

      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="flex flex-col items-center py-7 px-4"
          style={{ borderBottom: '1px solid #E5E7EB', cursor: 'pointer' }}>
          <div style={{ fontSize: 30, marginBottom: 8 }}>📡</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#1F2937', letterSpacing: -0.3, fontFamily: 'Inter' }}>
            Stack<span style={{
              background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Radar</span>
          </div>
          <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: 500, letterSpacing: 1 }}>
            v1.0 · 2024 DATA
          </div>
        </div>
      </Link>

      <nav className="flex flex-col gap-1 p-4 flex-1">
        <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
          DASHBOARD
        </div>
        {mainNav.map(item => (
          <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link">
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}

        <div style={{ borderTop: '1px solid #F3F4F6', margin: '12px 0' }} />

        <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
          PAGES
        </div>
        {pageNav.map(item => (
          <Link key={item.id} href={item.id} style={{ textDecoration: 'none' }}>
            <div className="nav-link" style={pathname === item.id ? {
              background: 'rgba(255,107,74,0.07)',
              borderColor: 'rgba(255,107,74,0.2)',
              color: '#FF6B4A',
            } : {}}>
              <span style={{ fontSize: 14 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>

      <div className="p-4" style={{ borderTop: '1px solid #E5E7EB' }}>
        <div style={{ fontSize: 10, color: '#9CA3AF', letterSpacing: 2, fontWeight: 600, marginBottom: 10 }}>
          DATA SOURCES
        </div>
        <div style={{ fontSize: 11, color: '#6B7280', lineHeight: 2 }}>
          📋 Stack Overflow 2024<br />
          <span style={{ color: '#9CA3AF', fontSize: 10 }}>65,437 respondents</span><br /><br />
          📡 Google Trends<br />
          <span style={{ color: '#9CA3AF', fontSize: 10 }}>5-year search data</span>
        </div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: '#16A34A' }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#16A34A', boxShadow: '0 0 6px #16A34A' }} />
          Live Data
        </div>
      </div>
    </aside>
  )
}