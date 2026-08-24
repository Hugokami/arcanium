/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        minimal: {
          canvas: '#0c0a09',
          surface: '#141210',
          elevated: '#1c1917',
          subtle: '#292524',
          border: '#292524',
          borderLight: '#44403c',
          text: '#f5f5f4',
          textMuted: '#a8a29e',
          textSubtle: '#78716c',
        },
        pastel: {
          amber: { bg: '#241e12', text: '#fef08a', border: '#453818' },
          blue: { bg: '#151b28', text: '#93c5fd', border: '#25334d' },
          rose: { bg: '#251417', text: '#fca5a5', border: '#4d2229' },
          green: { bg: '#132219', text: '#86efac', border: '#21432e' },
          violet: { bg: '#1e142b', text: '#d8b4fe', border: '#3c2557' },
        },
        tarot: {
          dark: '#0c0a09',
          card: '#141210',
          gold: '#dfb76c',
          goldLight: '#f5dfa8',
          goldDark: '#99732e',
          amber: '#e69d45',
          violet: '#8a5cf6',
          violetDeep: '#1e1436',
          nebula: '#16122b',
          crimson: '#9e2a2b',
          emerald: '#1b4332',
          azure: '#1d3557'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Newsreader"', '"Playfair Display"', '"Cormorant Garamond"', '"Noto Serif JP"', '"Noto Serif Myanmar"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', '"Noto Serif JP"', 'serif'],
        body: ['"Cormorant Garamond"', '"Geist Sans"', '"Helvetica Neue"', '"Noto Serif JP"', '"Noto Serif Myanmar"', 'Georgia', 'serif'],
        sans: ['"Geist Sans"', '"SF Pro Display"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"Geist Mono"', '"SF Mono"', '"JetBrains Mono"', '"Space Grotesk"', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevated': '0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'modal': '0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'gold-glow': '0 0 20px -5px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      }
    },
  },
  plugins: [],
}
