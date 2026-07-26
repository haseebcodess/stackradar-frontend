'use client'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{ background: '#FFFFFF' }}>
      <div className="flex flex-col items-center gap-8">
        <div style={{ fontSize: 52 }}>📡</div>
        <div style={{ fontSize: 26, fontWeight: 800, color: '#1F2937', fontFamily: 'Inter, sans-serif', letterSpacing: -0.5 }}>
          Stack<span style={{
            background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Radar</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="dot-1 w-3 h-3 rounded-full"
            style={{ background: '#FF6B4A', boxShadow: '0 0 12px rgba(255,107,74,0.5)' }} />
          <div className="dot-2 w-3 h-3 rounded-full"
            style={{ background: '#FFC93C', boxShadow: '0 0 12px rgba(255,201,60,0.5)' }} />
          <div className="dot-3 w-3 h-3 rounded-full"
            style={{ background: '#FF6B4A', boxShadow: '0 0 12px rgba(255,107,74,0.5)' }} />
        </div>
        <div className="scan-text" style={{ fontSize: 11, color: '#9CA3AF', letterSpacing: 3, fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
          SCANNING 65,437 DEVELOPER RESPONSES...
        </div>
        <div style={{ width: 200, height: 3, background: '#F3F4F6', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(135deg, #FF6B4A 0%, #FFC93C 100%)',
            borderRadius: 2,
            animation: 'progress 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </div>
  )
}