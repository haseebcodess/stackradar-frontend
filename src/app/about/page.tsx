'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

const FAQS = [
  {
    q: 'What is StackRadar?',
    a: 'StackRadar is a free AI-powered tech stack trend analyzer. It processes real survey data from 65,437 developers and 5 years of Google Trends data to tell you which technologies are rising, which are declining, and exactly what you should learn next based on your current skills.',
  },
  {
    q: 'Where does StackRadar get its data?',
    a: 'All data comes from two free, authoritative sources — the Stack Overflow Developer Survey 2024, which is the largest developer survey on the planet with 65,437 respondents across 180 countries, and Google Trends via the pytrends library for 5-year historical search interest data.',
  },
  {
    q: 'How is the Market Match Score calculated?',
    a: 'The score is calculated by matching your entered skills against the top 15 technologies by market demand. Each technology is weighted by its percentage of developers using it. Your score is the sum of matched weights divided by the total possible weight, expressed as a percentage from 0 to 100.',
  },
  {
    q: 'How accurate is the 6-month forecast?',
    a: 'The forecast uses linear regression trained on the last 24 months of Google Trends data. It identifies the momentum direction of each technology and projects it forward. It is a directional indicator, not a precise prediction — it tells you whether a technology is trending up or down, not an exact future value.',
  },
  {
    q: 'What technologies does StackRadar track?',
    a: 'StackRadar tracks 36+ technologies across languages (JavaScript, Python, TypeScript, Java, Go, Rust), frontend frameworks (React, Next.js, Angular, Vue.js), backend frameworks (Node.js, Django, FastAPI, Laravel), databases (PostgreSQL, MySQL, MongoDB, Redis, Firebase), mobile (Flutter, React Native), and cloud/DevOps (Docker, Kubernetes, AWS, Azure, Google Cloud).',
  },
  {
    q: 'Is StackRadar free to use?',
    a: 'Yes. StackRadar is completely free. There are no subscriptions, no sign-ups, and no paywalls. All data sources used are publicly available and free.',
  },
  {
    q: 'Who should use StackRadar?',
    a: 'StackRadar is built for developers at every stage — students deciding what to learn first, junior developers planning their next skill, freelancers trying to position themselves for the highest-demand clients, and senior developers staying ahead of technology shifts.',
  },
  {
    q: 'What does the Tech Battle section show?',
    a: 'Tech Battle compares rising technologies against the ones they are replacing in the same category — TypeScript vs JavaScript, React vs Angular, PostgreSQL vs MySQL, and so on. Each card shows the current market adoption percentage of both, which one to learn, and why, backed by real survey data.',
  },
  {
    q: 'Does StackRadar show country-specific data?',
    a: 'The data is global — sourced from 65,437 developers across 180 countries. This is intentional. Developers increasingly work for international clients, so global demand data is what matters for freelance positioning on platforms like Upwork and Fiverr.',
  },
  {
    q: 'What is the SDG 8 connection?',
    a: 'StackRadar is aligned with United Nations Sustainable Development Goal 8 — Decent Work and Economic Growth. The mission is to reduce information asymmetry between developers in emerging markets and those in tech hubs, giving everyone access to the same market intelligence.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: '1px solid #E5E7EB', borderRadius: 10,
      overflow: 'hidden', marginBottom: 10,
      boxShadow: open ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '18px 22px',
        background: open ? '#FFF9F3' : '#FFFFFF',
        border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1F2937' }}>{q}</span>
        <span style={{
          fontSize: 18, color: open ? '#FF6B4A' : '#9CA3AF',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.2s, color 0.2s',
          flexShrink: 0, marginLeft: 16,
        }}>+</span>
      </button>
      {open && (
        <div style={{
          padding: '0 22px 18px', fontSize: 13, color: '#6B7280',
          lineHeight: 1.8, borderTop: '1px solid #F3F4F6',
          background: '#FFF9F3',
        }}>
          <div style={{ paddingTop: 14 }}>{a}</div>
        </div>
      )}
    </div>
  )
}

export default function AboutPage() {
  return (
    <PageLayout>
      <div style={{ marginBottom: 56 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,107,74,0.08)',
          border: '1px solid rgba(255,107,74,0.2)',
          borderRadius: 20, padding: '4px 14px', marginBottom: 20,
          fontSize: 12, fontWeight: 600, color: '#FF6B4A',
        }}>
          📡 About StackRadar
        </div>
        <h1 style={{
          fontSize: 36, fontWeight: 800, color: '#1F2937',
          letterSpacing: -1, lineHeight: 1.2, marginBottom: 16,
        }}>
          The market intelligence tool<br />
          <span style={{
            background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            every developer deserves
          </span>
        </h1>
        <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.8, maxWidth: 600 }}>
          StackRadar was built to solve a real problem — most developers
          are learning the wrong technologies because they rely on opinions,
          not data. We built a tool that replaces guesswork with real
          numbers from 65,437 developers.
        </p>
      </div>

      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1F2937', marginBottom: 24 }}>
          What StackRadar does
        </h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {[
            {
              icon: '📊',
              title: 'Market Demand',
              desc: 'Shows the top 15 most used technologies from the Stack Overflow Developer Survey 2024. Color coded by demand level so you instantly know which skills are Very High, High, Medium or Low in the current market.',
            },
            {
              icon: '📈',
              title: 'Growth Trends',
              desc: 'Plots 5 years of real Google Trends search interest data for up to 5 technologies at once. A machine learning forecast extends each line 6 months forward so you can see where the market is heading, not just where it has been.',
            },
            {
              icon: '🎯',
              title: 'Skill Analysis',
              desc: 'Type in your current skills and get a Market Match Score from 0 to 100 percent. StackRadar also tells you exactly what to learn next based on your specific gaps against market demand — one clear recommendation, not a list.',
            },
            {
              icon: '⚔️',
              title: 'Tech Battle',
              desc: 'Head to head comparisons between rising technologies and the ones they are replacing. TypeScript vs JavaScript, React vs Angular, PostgreSQL vs MySQL — each with real adoption percentages and a clear verdict.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#FFF9F3', border: '1px solid #E5E7EB',
              borderRadius: 12, padding: 24,
            }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1F2937', marginBottom: 8 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.75 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #FFF9F3 0%, #FFFBEB 100%)',
        border: '1px solid rgba(255,107,74,0.15)',
        borderRadius: 16, padding: 36, marginBottom: 64,
      }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1F2937', marginBottom: 16 }}>
          Why it was built
        </h2>
        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.9, marginBottom: 16 }}>
          Most developers — especially in emerging markets — are making
          career decisions based on outdated blog posts, YouTube
          recommendations from 2019, or advice from people who learned
          a technology years ago. This creates a massive information gap
          between developers in tech hubs and everyone else.
        </p>
        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.9, marginBottom: 16 }}>
          StackRadar removes that gap. The same data that big tech
          companies use internally to make hiring and technology decisions
          is now freely accessible to every developer, student, and
          freelancer — regardless of where they are in the world.
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(255,107,74,0.08)',
          border: '1px solid rgba(255,107,74,0.2)',
          borderRadius: 8, padding: '10px 16px', marginTop: 8,
        }}>
          <span style={{ fontSize: 16 }}>🌍</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#FF6B4A' }}>
            SDG 8 — Decent Work & Economic Growth
          </span>
        </div>
      </div>

      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1F2937', marginBottom: 24 }}>
          Data sources
        </h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            {
              icon: '📋',
              name: 'Stack Overflow Survey 2024',
              detail: '65,437 developers · 180 countries · 114 data points per respondent',
              color: '#FF6B4A',
            },
            {
              icon: '📡',
              name: 'Google Trends',
              detail: '5 years of weekly search interest · Normalized 0–100 scale · via pytrends',
              color: '#FFC93C',
            },
            {
              icon: '🐙',
              name: 'GitHub Octoverse',
              detail: 'Repository language statistics · Open source activity · Reference data',
              color: '#6B7280',
            },
          ].map((src, i) => (
            <div key={i} style={{
              background: '#FFFFFF', border: '1px solid #E5E7EB',
              borderRadius: 12, padding: 20,
              borderTop: `3px solid ${src.color}`,
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{src.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1F2937', marginBottom: 6 }}>
                {src.name}
              </div>
              <div style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.7 }}>
                {src.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1F2937', marginBottom: 24 }}>
          By the numbers
        </h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { value: '65,437', label: 'Developers Surveyed' },
            { value: '36+',    label: 'Technologies Tracked' },
            { value: '5 yrs',  label: 'Trend Data History' },
            { value: '6 mo',   label: 'ML Forecast Range' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#F8F5F2', border: '1px solid #E5E7EB',
              borderRadius: 12, padding: '20px 16px', textAlign: 'center',
            }}>
              <div style={{
                fontSize: 26, fontWeight: 800, fontFamily: 'Inter',
                background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: 6,
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="faqs" style={{ marginBottom: 32 }}>
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1F2937', marginBottom: 6 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 13, color: '#9CA3AF' }}>
            Everything you need to know about StackRadar
          </p>
        </div>
        {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
      </div>
    </PageLayout>
  )
}