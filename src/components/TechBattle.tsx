'use client'

import { useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface Battle { tech1: string; tech2: string; pct1: number; pct2: number; learn: string; category: string; reason: string }
interface Props { battles: Battle[] }

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#3B82F6', Backend: '#8B5CF6', Database: '#F59E0B', Mobile: '#EC4899', General: '#6B7280',
}

function BattleCard({ battle }: { battle: Battle }) {
  const { tech1, pct1, tech2, pct2, learn, category, reason } = battle
  const catColor = CATEGORY_COLORS[category] || '#6B7280'
  const chartData = [
    { name: tech1, value: pct1, isLearn: tech1 === learn },
    { name: tech2, value: pct2, isLearn: tech2 === learn },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload?.length) {
      const d = payload[0].payload
      return (
        <div style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid #E5E7EB', borderRadius: 8, padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
          <div style={{ color: '#1F2937', fontSize: 13, fontWeight: 700 }}>{d.name}</div>
          <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2, color: d.isLearn ? '#FF6B4A' : '#9CA3AF' }}>{d.value}%</div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="battle-card">
      <div className="flex items-center gap-3 mb-3">
        <span style={{ fontSize: 10, color: catColor, fontWeight: 700, letterSpacing: 1.5, background: `${catColor}15`, border: `1px solid ${catColor}30`, padding: '3px 10px', borderRadius: 20 }}>
          {category.toUpperCase()}
        </span>
        <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, letterSpacing: 1.5 }}>LEARN NOW</span>
      </div>

      <div className="gradient-text" style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Inter', marginBottom: 8, letterSpacing: -0.3 }}>
        → {learn}
      </div>
      <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.75, marginBottom: 16 }}>{reason}</div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={chartData} margin={{ top: 24, right: 16, left: 16, bottom: 8 }}>
          <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} />
          <YAxis hide domain={[0, Math.max(pct1, pct2) * 1.5]} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,74,0.04)' }} />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}
            label={{ position: 'top', fontSize: 13, fontWeight: 700, formatter: (v: number) => `${v}%`, fill: '#6B7280' }}>
            {chartData.map((entry, i) => (
              <Cell key={i}
                fill={entry.isLearn ? 'rgba(255,107,74,0.12)' : 'rgba(156,163,175,0.15)'}
                stroke={entry.isLearn ? '#FF6B4A' : '#D1D5DB'}
                strokeWidth={2}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <span className="vs-badge">VS</span>
      </div>
    </div>
  )
}

export default function TechBattle({ battles }: Props) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? battles : battles.slice(0, 4)

  return (
    <section id="tech-battle" className="fade-in">
      <div className="section-header">
        <span style={{ fontSize: 26 }}>⚔️</span>
        <h2 className="section-title">Tech Battle</h2>
      </div>
      <p className="section-caption">What to learn now — rising technologies vs what they replace</p>

      <div className="legend-row">
        <div className="flex items-center gap-2">
          <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,107,74,0.12)', border: '2px solid #FF6B4A' }} />
          <span style={{ color: '#FF6B4A', fontWeight: 600 }}>LEARN THIS — higher future demand</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(156,163,175,0.15)', border: '2px solid #D1D5DB' }} />
          <span style={{ color: '#9CA3AF', fontWeight: 600 }}>BEING REPLACED — declining relevance</span>
        </div>
        <span style={{ color: '#9CA3AF', fontSize: 11 }}>bar height = % of 65,437 developers using it</span>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {visible.map((battle, i) => <BattleCard key={i} battle={battle} />)}
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={() => setShowAll(!showAll)} className="btn-outline">
          {showAll ? 'Show Less ↑' : `Show ${battles.length - 4} More Battles ↓`}
        </button>
      </div>
    </section>
  )
}