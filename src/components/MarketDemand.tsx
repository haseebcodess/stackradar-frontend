'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface Tech { technology: string; percentage: number; demand_label: string }
interface Props { data: Tech[] }

function getColor(pct: number) {
  if (pct >= 40) return 'rgba(255,107,74,0.85)'
  if (pct >= 25) return 'rgba(255,201,60,0.85)'
  if (pct >= 12) return 'rgba(245,158,11,0.75)'
  return 'rgba(156,163,175,0.6)'
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload
    return (
      <div style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', backdropFilter: 'blur(20px)' }}>
        <div style={{ color: '#1F2937', fontSize: 13, fontWeight: 700 }}>{d.technology}</div>
        <div style={{ color: '#FF6B4A', fontSize: 15, fontWeight: 700, marginTop: 2 }}>{d.percentage}%</div>
        <div style={{ color: '#6B7280', fontSize: 11, marginTop: 2 }}>{d.demand_label} Demand</div>
      </div>
    )
  }
  return null
}

export default function MarketDemand({ data }: Props) {
  const sorted = [...data].sort((a, b) => a.percentage - b.percentage)

  return (
    <section id="market-demand" className="fade-in">
      <div className="section-header">
        <span style={{ fontSize: 26 }}>📊</span>
        <h2 className="section-title">Market Demand</h2>
      </div>
      <p className="section-caption">
        Top 15 technologies by developer usage — Stack Overflow Survey 2024, 65,437 respondents
      </p>

      <div className="legend-row">
        <span style={{ color: '#6B7280', fontSize: 11, fontWeight: 600, letterSpacing: 1 }}>DEMAND LEVEL</span>
        <span><span className="legend-dot" style={{ background: '#FF6B4A' }} />Very High ≥40%</span>
        <span><span className="legend-dot" style={{ background: '#FFC93C' }} />High ≥25%</span>
        <span><span className="legend-dot" style={{ background: '#F59E0B' }} />Medium ≥12%</span>
        <span><span className="legend-dot" style={{ background: '#D1D5DB' }} />Low &lt;12%</span>
      </div>

      <div className="card" style={{ padding: '24px 16px' }}>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={sorted} layout="vertical" margin={{ top: 0, right: 80, left: 20, bottom: 0 }}>
            <XAxis type="number" domain={[0, 70]} tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="technology" width={125} tick={{ fill: '#374151', fontSize: 12, fontWeight: 500 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,74,0.04)' }} />
            <Bar dataKey="percentage" radius={[0, 6, 6, 0]}
              label={{ position: 'right', fill: '#6B7280', fontSize: 12, fontWeight: 600, formatter: (v: number) => `${v}%` }}>
              {sorted.map((entry, i) => <Cell key={i} fill={getColor(entry.percentage)} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}