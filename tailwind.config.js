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
        tarot: {
          dark: '#07070a',
          card: '#0e0e15',
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
        serif: ['"Cinzel"', '"Cormorant Garamond"', '"Noto Serif JP"', '"Noto Serif Myanmar"', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', '"Cinzel"', '"Noto Serif JP"', 'serif'],
        body: ['"Cormorant Garamond"', '"Philosopher"', '"Noto Serif JP"', '"Noto Serif Myanmar"', 'Georgia', 'serif'],
        cosmic: ['"Philosopher"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Cormorant Garamond"', '"Philosopher"', '"Noto Serif JP"', '"Noto Serif Myanmar"', 'serif'],
        mono: ['"Space Grotesk"', '"Cinzel"', 'monospace']
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(223, 183, 108, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(223, 183, 108, 0.55)',
        'violet-glow': '0 0 30px -5px rgba(138, 92, 246, 0.4)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(223, 183, 108, 0.2)',
        'inner-bevel': 'inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'celestial-glow': 'celestial 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        celestial: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
