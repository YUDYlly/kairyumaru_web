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
        primary: {
          DEFAULT: '#dc2626', // red-600
          light: '#ef4444',   // red-500
          dark: '#991b1b',    // red-800
        },
        'pop-blue': '#0ea5e9',    // sky-500
        'pop-cyan': '#06b6d4',    // cyan-500
        'pop-orange': '#f97316',  // orange-500
        'pop-yellow': '#eab308',  // yellow-500
        'navy-deep': '#0f172a',   // slate-900
        'navy-base': '#1e293b',   // slate-800
        'navy-card': '#334155',   // slate-700
        'slate-body': '#f8fafc',  // slate-50
        'slate-text': '#1e293b',  // slate-800
        'slate-muted': '#64748b', // slate-500
        'accent-silver': '#94a3b8', // slate-400
        accent: {
          yellow: '#fbbf24',      // amber-400
          orange: '#fb923c',      // orange-400
          yellowLight: '#fde68a', // amber-200
          orangeLight: '#fed7aa', // orange-200
        },
        soft: {
          DEFAULT: '#eff6ff',  // blue-50
          light: '#ffffff',
          dark: '#dbeafe',     // blue-100
        },
        text: {
          DEFAULT: '#1e3a8a',  // blue-900
          light: '#64748b',    // slate-500
          dark: '#0f172a',     // slate-950
        },
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
