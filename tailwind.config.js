/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#060810',
        'bg-card': '#0d1117',
        'bg-elevated': '#111827',
        'fg-light': '#f0f4ff',
        'fg-muted': '#94a3b8',
        'accent-primary': '#818cf8',
        'accent-secondary': '#6366f1',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.2s steps(2) forwards',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-4px, 0)' },
          '25%': { clipPath: 'inset(60% 0 10% 0)', transform: 'translate(4px, 0)' },
          '50%': { clipPath: 'inset(40% 0 30% 0)', transform: 'translate(-2px, 0)' },
          '75%': { clipPath: 'inset(10% 0 70% 0)', transform: 'translate(2px, 0)' },
          '100%': { clipPath: 'inset(0)', transform: 'translate(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}