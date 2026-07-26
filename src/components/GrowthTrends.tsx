'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import { fetchTrends } from '@/lib/api'

const LINE_COLORS = ['#FF6B4A', '#FFC93C', '#F59E0B', '#6B7280', '#1F2937']
const DEFAULT_TECHS = ['Python', 'JavaScript', 'TypeScript', 'React']

interface Props { allTechs: string[] }

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', backdropFilter: 'blur(20px)' }}>
        <div style={{ color: '#6B7280', fontSize: 11, marginBottom: 6 }}>{label}</div>
        {payload.map((p: any, i: number) => (
          <div key={i} style={{ color: p.color, fontSize: 12, fontWeight: 600 }}>{p.name}: {p.value}</div>
        ))}
      </div>
    )
  }
  return null
}

export default function GrowthTrends({ allTechs }: Props) {
  const [selected, setSelected] = useState<string[]>(DEFAULT_TECHS)
  const [data, setData]         = useState<any>(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const toggle = (tech: string) => {
    if (selected.includes(tech)) setSelected(selected.filter(t => t !== tech))
    else if (selected.length < 5) setSelected([...selected, tech])
  }

  const analyze = async () => {
    if (!selected.length) return
    setLoading(true); setError('')
    try { setData(await fetchTrends(selected)) }
    catch { setError('Failed to fetch trend data.') }
    setLoading(false)
  }

  const buildChartData = () => {
    if (!data) return []
    const allDates = new Set<string>()
    selected.forEach(tech => {
      data.historical[tech]?.forEach((p: any) => allDates.add(p.date))
      data.forecasts?.[tech]?.forEach((p: any) => allDates.add(p.date))
    })
    const forecastStart = data.forecasts?.[selected[0]]?.[0]?.date
    return Array.from(allDates).sort().map(date => {
      const point: any = { date: date.slice(0, 7), isForecast: forecastStart && date >= forecastStart }
      selected.forEach(tech => {
        const hist = data.historical[tech]?.find((p: any) => p.date === date)
        const fc   = data.forecasts?.[tech]?.find((p: any) => p.date === date)
        if (hist) point[tech] = hist.value
        if (fc)   point[`${tech}_fc`] = fc.value
      })
      return point
    })
  }

  const chartData    = buildChartData()
  const forecastStart = data?.forecasts?.[selected[0]]?.[0]?.date?.slice(0, 7)

  return (
    <section id="growth-trends" className="fade-in">
      <div className="section-header">
        <span style={{ fontSize: 26 }}>📈</span>
        <h2 className="section-title">Growth Trends</h2>
      </div>
      <p className="section-caption">
        Monthly search interest over 5 years with 6-month forecast — Google Trends
      </p>

      <div className="card" style={{ padding: 24, marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, letterSpacing: 2, marginBottom: 14 }}>
          SELECT TECHNOLOGIES (MAX 5) — {selected.length}/5 selected
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {allTechs.map(tech => (
            <button key={tech} onClick={() => toggle(tech)}
              className={`tech-chip ${selected.includes(tech) ? 'selected' : ''}`}
              style={selected.includes(tech) ? {
                background: 'rgba(255,107,74,0.08)',
                borderColor: LINE_COLORS[selected.indexOf(tech)],
                color: LINE_COLORS[selected.indexOf(tech)],
              } : {}}>
              {tech}
            </button>
          ))}
        </div>
        <button onClick={analyze} disabled={loading || !selected.length} className="btn-primary">
          {loading ? 'Fetching...' : 'Fetch Trends →'}
        </button>
        {error && <div style={{ color: '#FF6B4A', fontSize: 12, marginTop: 10 }}>⚠ {error}</div>}
      </div>

      {chartData.length > 0 && (
        <div className="card" style={{ padding: 24 }}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="date" tick={{ fill: '#9CA3AF', fontSize: 10 }} axisLine={false} tickLine={false} interval={5} />
              <YAxis domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#6B7280' }} />
              {forecastStart && (
                <ReferenceLine x={forecastStart} stroke="#E5E7EB" strokeDasharray="4 4"
                  label={{ value: '6-month forecast →', fill: '#9CA3AF', fontSize: 10 }} />
              )}
              {selected.map((tech, i) => (
                <>
                  <Line key={tech} type="monotone" dataKey={tech} stroke={LINE_COLORS[i]} strokeWidth={2.5} dot={false} name={tech} connectNulls />
                  <Line key={`${tech}_fc`} type="monotone" dataKey={`${tech}_fc`} stroke={LINE_COLORS[i]} strokeWidth={2} strokeDasharray="5 5" dot={false} legendType="none" connectNulls />
                </>
              ))}
            </LineChart>
          </ResponsiveContainer>

          {data.forecast_summary && (
            <div className="mt-6">
              <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, letterSpacing: 2, marginBottom: 14 }}>
                6-MONTH FORECAST SUMMARY
              </div>
              <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${selected.length}, 1fr)` }}>
                {selected.map((tech) => {
                  const s = data.forecast_summary[tech]
                  if (!s) return null
                  const up = s.delta >= 0
                  return (
                    <div key={tech} className="forecast-card">
                      <div style={{ fontSize: 11, color: '#6B7280', fontWeight: 500, marginBottom: 6 }}>{tech}</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: up ? '#16A34A' : '#FF6B4A' }}>
                        {up ? '↑' : '↓'} {s.predicted}
                      </div>
                      <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 4 }}>{s.current} → {s.predicted}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}