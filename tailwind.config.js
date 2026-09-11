/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'primary-hover': '#4338ca',
        canvas: '#f8fafc',
        surface: '#ffffff',
        muted: '#f1f5f9',
        ink: '#172033',
        secondary: '#64748b',
        line: '#e2e8f0',
        success: '#059669',
        warning: '#d97706',
        danger: '#dc2626',
        info: '#0284c7',
      },
      borderRadius: { panel: '14px' },
    },
  },
  plugins: [],
}

