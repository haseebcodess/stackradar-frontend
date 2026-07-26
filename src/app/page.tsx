'use client'

import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import MarketDemand from '@/components/MarketDemand'
import GrowthTrends from '@/components/GrowthTrends'
import SkillAnalysis from '@/components/SkillAnalysis'
import TechBattle from '@/components/TechBattle'
import { fetchDemand, fetchBattles, fetchTechs } from '@/lib/api'

export default function Home() {
  const [loading, setLoading]   = useState(true)
  const [demand, setDemand]     = useState<any>(null)
  const [battles, setBattles]   = useState<any[]>([])
  const [allTechs, setAllTechs] = useState<string[]>([])
  const [error, setError]       = useState('')

  useEffect(() => {
    async function loadData() {
      try {
        const [demandData, battleData, techData] = await Promise.all([
          fetchDemand(), fetchBattles(), fetchTechs(),
        ])
        setDemand(demandData)
        setBattles(battleData.battles)
        setAllTechs(techData.technologies)
      } catch {
        setError('Cannot connect to API. Make sure the backend is running on port 8000.')
      } finally {
        setTimeout(() => setLoading(false), 2200)
      }
    }
    loadData()
  }, [])

  if (loading) return <LoadingScreen />

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ background: '#FFFFFF' }}>
        <div style={{ textAlign: 'center', maxWidth: 420 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
          <div style={{ color: '#FF6B4A', fontSize: 15, fontWeight: 600, marginBottom: 8 }}>API Connection Failed</div>
          <div style={{ color: '#6B7280', fontSize: 13, marginBottom: 20 }}>{error}</div>
          <div style={{ background: '#F8F5F2', border: '1px solid #E5E7EB', borderRadius: 8, padding: '12px 16px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#374151' }}>
            uvicorn main:app --reload --port 8000
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen" style={{ background: '#FFFFFF' }}>
      <Sidebar />
      <div style={{ marginLeft: 224, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1, padding: '48px 56px', maxWidth: 1100 }}>

          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 36 }}>📡</span>
              <h1 style={{ fontSize: 34, fontWeight: 800, color: '#1F2937', letterSpacing: -1, fontFamily: 'Inter' }}>
                Stack<span style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Radar</span>
              </h1>
            </div>
            <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 520, lineHeight: 1.6 }}>
              AI-Powered Tech Stack Trend Analyzer — Know what to learn before everyone else. Real data from 65,437 developers worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { label: 'Developers Surveyed', value: '65,437' },
                { label: 'Technologies Tracked', value: '36+' },
                { label: 'Years of Trend Data', value: '5' },
                { label: 'Forecast Horizon', value: '6 months' },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#FFF9F3', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 18px' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Inter', background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2, fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <hr className="section-divider" />
          {demand && <MarketDemand data={demand.technologies} />}

          <hr className="section-divider" />
          <GrowthTrends allTechs={allTechs} />

          <hr className="section-divider" />
          <SkillAnalysis />

          <hr className="section-divider" />
          {battles.length > 0 && <TechBattle battles={battles} />}
        </main>
        <Footer />
      </div>
    </div>
  )
}