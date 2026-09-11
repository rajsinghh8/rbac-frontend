/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#2563eb', 'primary-dark': '#1d4ed8', surface: '#ffffff', canvas: '#f8fafc', muted: '#64748b', border: '#e2e8f0', ink: '#0f172a', success: '#16a34a', warning: '#d97706', danger: '#dc2626', accent: '#eef2ff' },
      borderRadius: { card: '12px' },
    },
  },
  plugins: [],
}

