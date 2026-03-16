import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0c0c',
        card: '#1a1a1a',
        primary: {
          DEFAULT: '#f59e0b',
          foreground: '#0c0c0c',
        },
        accent: {
          DEFAULT: '#10b981',
          orange: '#f97316',
        },
        muted: {
          DEFAULT: '#9ca3af',
          foreground: '#6b7280',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

