'use client'

import PageLayout from '@/components/PageLayout'

const SKILLS = [
  { category: 'Frontend',  items: ['React.js', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Backend',   items: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs'] },
  { category: 'Database',  items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
  { category: 'DevOps',    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render', 'Netlify'] },
]

const PROJECTS = [
  {
    name: 'StackRadar',
    desc: 'AI-powered tech stack trend analyzer. Processes data from 65,437 developers to tell you what to learn next.',
    tech: ['Python', 'FastAPI', 'Next.js', 'Recharts'],
    link: '/',
    label: 'Live →',
  },
  {
    name: 'Portfolio',
    desc: 'Personal developer portfolio showcasing projects, skills, and experience as a MERN stack developer.',
    tech: ['React.js', 'Tailwind CSS', 'Netlify'],
    link: 'https://haseeb-codess-portfolio.netlify.app',
    label: 'Visit →',
  },
]

export default function DeveloperPage() {
  return (
    <PageLayout>
      <div style={{ marginBottom: 56 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,107,74,0.08)',
          border: '1px solid rgba(255,107,74,0.2)',
          borderRadius: 20, padding: '4px 14px', marginBottom: 24,
          fontSize: 12, fontWeight: 600, color: '#FF6B4A',
        }}>
          👨‍💻 Developer
        </div>

        <div className="flex" style={{ gap: 36, alignItems: 'flex-start' }}>
          <div style={{
            width: 100, height: 100, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 42, boxShadow: '0 8px 24px rgba(255,107,74,0.3)',
          }}>
            👨‍💻
          </div>
          <div>
            <h1 style={{
              fontSize: 30, fontWeight: 800, color: '#1F2937',
              letterSpacing: -0.5, marginBottom: 6,
            }}>
              Muhammad Haseeb Ur Rehman
            </h1>
            <div style={{
              fontSize: 15, fontWeight: 600, marginBottom: 10,
              background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Full-Stack Developer · MERN Stack · CS Student
            </div>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.8, maxWidth: 520 }}>
              Self-taught MERN stack developer and BS Computer Science
              student at the University of Punjab, Lahore (2025–2029).
              Building tools that solve real problems for developers worldwide.
            </p>
            <div className="flex gap-4 mt-4">
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, color: '#6B7280', fontWeight: 500,
              }}>
                📍 Lahore, Pakistan
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, color: '#16A34A', fontWeight: 600,
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#16A34A', boxShadow: '0 0 6px #16A34A',
                }} />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1F2937', marginBottom: 16 }}>
          Connect
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: '📧', label: 'Email',     value: 'haseebur4322@gmail.com',             href: 'mailto:haseebur4322@gmail.com' },
            { icon: '💼', label: 'LinkedIn',  value: 'linkedin.com/in/haseebcodess',        href: 'https://linkedin.com/in/haseebcodess' },
            { icon: '🐙', label: 'GitHub',    value: 'github.com/haseebcodess',             href: 'https://github.com/haseebcodess' },
            { icon: '🌐', label: 'Portfolio', value: 'haseeb-codess-portfolio.netlify.app', href: 'https://haseeb-codess-portfolio.netlify.app' },
          ].map((link, i) => (
            <a key={i} href={link.href}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: '#FFF9F3', border: '1px solid #E5E7EB',
                borderRadius: 10, padding: '12px 18px',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#FF6B4A'
                el.style.boxShadow = '0 4px 12px rgba(255,107,74,0.15)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#E5E7EB'
                el.style.boxShadow = 'none'
              }}>
              <span style={{ fontSize: 18 }}>{link.icon}</span>
              <div>
                <div style={{
                  fontSize: 10, color: '#9CA3AF',
                  fontWeight: 600, letterSpacing: 1,
                }}>
                  {link.label.toUpperCase()}
                </div>
                <div style={{ fontSize: 12, color: '#1F2937', fontWeight: 600 }}>
                  {link.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1F2937', marginBottom: 20 }}>
          Technical Skills
        </h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {SKILLS.map((group, i) => (
            <div key={i} style={{
              background: '#F8F5F2', border: '1px solid #E5E7EB',
              borderRadius: 12, padding: 20,
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: '#FF6B4A',
                letterSpacing: 2, marginBottom: 14,
              }}>
                {group.category.toUpperCase()}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span key={j} style={{
                    background: '#FFFFFF', border: '1px solid #E5E7EB',
                    borderRadius: 20, padding: '4px 12px',
                    fontSize: 12, fontWeight: 500, color: '#374151',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1F2937', marginBottom: 20 }}>
          Education
        </h2>
        <div style={{
          background: '#FFF9F3', border: '1px solid rgba(255,107,74,0.2)',
          borderRadius: 12, padding: 24,
          display: 'flex', gap: 20, alignItems: 'flex-start',
          borderLeft: '4px solid #FF6B4A',
        }}>
          <div style={{ fontSize: 32 }}>🎓</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1F2937', marginBottom: 4 }}>
              BS Computer Science
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#FF6B4A', marginBottom: 6 }}>
              University of Punjab, Lahore
            </div>
            <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>
              2025 – 2029 · Currently Enrolled
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1F2937', marginBottom: 20 }}>
          Projects
        </h2>
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <div key={i}
              style={{
                background: '#FFFFFF', border: '1px solid #E5E7EB',
                borderRadius: 12, padding: 24,
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between', gap: 20,
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
                el.style.transform = 'translateY(0)'
              }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1F2937', marginBottom: 6 }}>
                  {project.name}
                </div>
                <div style={{
                  fontSize: 13, color: '#6B7280',
                  lineHeight: 1.7, marginBottom: 12, maxWidth: 480,
                }}>
                  {project.desc}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="badge badge-gray">{t}</span>
                  ))}
                </div>
              </div>
              <a href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: 12, padding: '10px 20px', whiteSpace: 'nowrap', textDecoration: 'none' }}>
                {project.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #FFF9F3 0%, #FFFBEB 100%)',
        border: '1px solid rgba(255,201,60,0.25)',
        borderRadius: 16, padding: 32,
      }}>
        <div style={{ fontSize: 22, marginBottom: 12 }}>💬</div>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#1F2937', marginBottom: 10 }}>
          Why I built StackRadar
        </h2>
        <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.9 }}>
          As a self-taught developer, I spent months learning technologies
          based on random YouTube recommendations — only to realize the
          market had moved on. I built StackRadar to solve that problem
          for myself and every other developer who has wasted time learning
          the wrong stack. Real data, clear answers, zero noise.
        </p>
        <div className="flex gap-3 mt-5">
          <a href="mailto:haseebur4322@gmail.com"
            className="btn-primary"
            style={{ fontSize: 12, padding: '10px 20px', textDecoration: 'none' }}>
            Get in Touch →
          </a>
          <a href="https://haseeb-codess-portfolio.netlify.app"
            target="_blank" rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: 12, padding: '10px 20px', textDecoration: 'none' }}>
            View Portfolio
          </a>
        </div>
      </div>
    </PageLayout>
  )
}