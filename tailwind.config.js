/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        quantum: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        northern: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      animation: {
        'aurora-flow': 'aurora-flow 20s ease-in-out infinite',
        'northern-lights': 'northern-lights 15s ease-in-out infinite',
        'title-glow': 'title-glow 4s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 3s ease-in-out infinite',
        'rotate-border': 'rotate-border 4s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'aurora-drift': 'aurora-drift 25s linear infinite',
        'aurora-pulse': 'aurora-pulse 18s ease-in-out infinite',
      },
      backdropBlur: {
        '4xl': '72px',
      },
      boxShadow: {
        'quantum': '0 0 20px rgba(59, 130, 246, 0.3)',
        'northern': '0 0 20px rgba(16, 185, 129, 0.3)',
        'purple': '0 0 20px rgba(139, 92, 246, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(135deg, #8b5cf6, #3b82f6, #10b981)',
      },
    },
  },
  plugins: [],
}
