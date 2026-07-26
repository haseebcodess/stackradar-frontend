import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e1117',
        card: '#12151c',
        border: '#1e2330',
        green: {
          radar: '#00ff88',
        },
        blue: {
          radar: '#00aaff',
        },
        orange: {
          radar: '#ffaa00',
        },
        red: {
          radar: '#ff4455',
        },
        purple: {
          radar: '#aa55ff',
        },
        pink: {
          radar: '#ff6699',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
