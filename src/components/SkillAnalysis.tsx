'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { analyzeSkills } from '@/lib/api'

interface GapItem { technology: string; percentage: number; has_skill: boolean }
interface Result {
  recognized_skills: string[]
  score: number
  score_label: string
  learn_next: { technology: string; demand_label: string; percentage: number }
  skill_gap: GapItem[]
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload
    return (
      <div style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
        <div style={{ color: '#1F2937', fontSize: 13, fontWeight: 700 }}>{d.technology}</div>
        <div style={{ fontSize: 12, marginTop: 4, fontWeight: 600, color: d.has_skill ? '#16A34A' : '#FF6B4A' }}>
          {d.has_skill ? '✓ You have this' : '✗ Missing'} — {d.percentage}%
        </div>
      </div>
    )
  }
  return null
}

export default function SkillAnalysis() {
  const [input, setInput]   = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')

  const analyze = async () => {
    if (!input.trim()) return
    setLoading(true); setError('')
    try {
      const res = await analyzeSkills(input)
      if (res.error) { setError(res.error); setResult(null) }
      else setResult(res)
    } catch { setError('Failed to analyze. Check if API is running.') }
    setLoading(false)
  }

  const scoreColor = result
    ? result.score >= 70 ? '#16A34A' : result.score >= 40 ? '#D97706' : '#FF6B4A'
    : '#1F2937'

  return (
    <section id="skill-analysis" className="fade-in">
      <div className="section-header">
        <span style={{ fontSize: 26 }}>🎯</span>
        <h2 className="section-title">Skill Analysis</h2>
      </div>
      <p className="section-caption">
        Enter your current skills and see how you match against market demand
      </p>

      <div className="grid gap-6" style={{ gridTemplateColumns: result ? '1fr 2fr' : '1fr' }}>
        <div className="card" style={{ padding: 24 }}>
          <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, letterSpacing: 2, marginBottom: 6 }}>ENTER YOUR SKILLS</div>
          <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 14 }}>separate by comma, space, or new line</div>
          <textarea value={input} onChange={e => setInput(e.target.value)}
            placeholder="e.g. Python React MongoDB Docker" rows={5} className="skill-textarea" />
          <button onClick={analyze} disabled={loading || !input.trim()} className="btn-primary"
            style={{ width: '100%', marginTop: 16, fontSize: 13 }}>
            {loading ? 'Analyzing...' : 'Analyze My Skills →'}
          </button>
          {error && (
            <div style={{ color: '#FF6B4A', fontSize: 12, marginTop: 10, background: 'rgba(255,107,74,0.06)', padding: '8px 12px', borderRadius: 6 }}>
              ⚠ {error}
            </div>
          )}
        </div>

        {result && (
          <div className="flex flex-col gap-4 fade-in">
            <div className="match-card">
              <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, letterSpacing: 2, marginBottom: 10 }}>MARKET MATCH SCORE</div>
              <div style={{ fontSize: 60, fontWeight: 800, color: scoreColor, lineHeight: 1, fontFamily: 'Inter' }}>{result.score}%</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: scoreColor, marginTop: 6 }}>{result.score_label}</div>
              <div style={{ fontSize: 12, color: '#6B7280', marginTop: 10, lineHeight: 1.6 }}>
                Recognized: <span style={{ color: '#1F2937', fontWeight: 500 }}>{result.recognized_skills.join(', ')}</span>
              </div>
            </div>

            {result.learn_next.technology && (
              <div className="learn-card">
                <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, letterSpacing: 2, marginBottom: 10 }}>LEARN NEXT</div>
                <div style={{ fontSize: 30, fontWeight: 800, fontFamily: 'Inter', letterSpacing: -0.5 }} className="gradient-text">
                  → {result.learn_next.technology}
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <span className="badge badge-primary">{result.learn_next.demand_label}</span>
                  <span style={{ fontSize: 12, color: '#6B7280' }}>{result.learn_next.percentage}% of developers use it</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {result && (
        <div className="mt-8 fade-in">
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1F2937', marginBottom: 8 }}>Skill Gap — Top 15 Technologies</div>
          <div className="flex gap-6 mb-4" style={{ fontSize: 12, fontWeight: 500 }}>
            <span className="skill-have">✓ You have this skill</span>
            <span className="skill-miss">✗ Missing from your stack</span>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <ResponsiveContainer width="100%" height={480}>
              <BarChart data={result.skill_gap} layout="vertical" margin={{ top: 0, right: 80, left: 20, bottom: 0 }}>
                <XAxis type="number" domain={[0, 70]} tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="technology" width={125} tick={{ fill: '#374151', fontSize: 12, fontWeight: 500 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,74,0.04)' }} />
                <Bar dataKey="percentage" radius={[0, 6, 6, 0]}
                  label={{ position: 'right', fill: '#6B7280', fontSize: 12, fontWeight: 600, formatter: (v: number) => `${v}%` }}>
                  {result.skill_gap.map((entry, i) => (
                    <Cell key={i}
                      fill={entry.has_skill ? 'rgba(22,163,74,0.12)' : 'rgba(255,107,74,0.1)'}
                      stroke={entry.has_skill ? '#16A34A' : '#FF6B4A'}
                      strokeWidth={1.5}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </section>
  )
}