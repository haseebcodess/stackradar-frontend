'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#F8F5F2', borderTop: '1px solid #E5E7EB', marginTop: 80, padding: '48px 0 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 56px' }}>

        <div className="grid" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 24 }}>📡</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#1F2937', fontFamily: 'Inter' }}>
                Stack<span style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Radar</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7, maxWidth: 280 }}>
              AI-powered tech stack trend analyzer built on real data from 65,437 developers worldwide. Know what to learn before everyone else.
            </p>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#16A34A', fontWeight: 600 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#16A34A', boxShadow: '0 0 6px #16A34A' }} />
              Live · Updated 2024
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: 2, marginBottom: 16 }}>PRODUCT</div>
            {[
              { label: 'Market Demand', href: '/#market-demand' },
              { label: 'Growth Trends', href: '/#growth-trends' },
              { label: 'Skill Analysis', href: '/#skill-analysis' },
              { label: 'Tech Battle',   href: '/#tech-battle' },
            ].map(link => (
              <a key={link.label} href={link.href}
                style={{ display: 'block', fontSize: 13, color: '#6B7280', marginBottom: 10, textDecoration: 'none', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6B4A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: 2, marginBottom: 16 }}>INFO</div>
            {[
              { label: 'About StackRadar', href: '/about' },
              { label: 'Developer',        href: '/developer' },
              { label: 'FAQs',             href: '/about#faqs' },
            ].map(link => (
              <Link key={link.label} href={link.href}
                style={{ display: 'block', fontSize: 13, color: '#6B7280', marginBottom: 10, textDecoration: 'none', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6B4A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: 2, marginBottom: 16 }}>DATA SOURCES</div>
            {[
              { label: 'Stack Overflow 2024', href: 'https://survey.stackoverflow.co/2024' },
              { label: 'Google Trends',       href: 'https://trends.google.com' },
              { label: 'GitHub Octoverse',    href: 'https://octoverse.github.com' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', fontSize: 13, color: '#6B7280', marginBottom: 10, textDecoration: 'none', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6B4A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12, color: '#9CA3AF' }}>
            © 2024 StackRadar · Built by{' '}
            <Link href="/developer" style={{ color: '#FF6B4A', textDecoration: 'none', fontWeight: 600 }}>Haseeb</Link>
            {' '}· SDG 8 — Decent Work & Economic Growth
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { label: 'GitHub',    href: 'https://github.com/haseebcodess' },
              { label: 'LinkedIn',  href: 'https://linkedin.com/in/haseebcodess' },
              { label: 'Portfolio', href: 'https://haseeb-codess-portfolio.netlify.app' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#9CA3AF', textDecoration: 'none', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6B4A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}