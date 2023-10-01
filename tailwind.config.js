module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'Inter',
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],
      },
      colors: {
        twitter: '#1da1f2',
        'blue-gray': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        cyan: {
          400: '#22D3EE',
        },
      },
      animation: {
        'fade-in':
          'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
