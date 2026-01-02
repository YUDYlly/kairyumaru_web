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
        'ocean-blue': '#0369a1',  // sky-700 - 深い海の青
        'ocean-light': '#0284c7', // sky-600 - 明るい海の青
        'ocean-dark': '#075985',  // sky-800 - より深い海の青
        'pop-blue': '#0ea5e9',    // sky-500
        'pop-cyan': '#06b6d4',    // cyan-500
        'pop-orange': '#f97316',  // orange-500
        'pop-yellow': '#eab308',  // yellow-500
        'navy-deep': '#0c4a6e',   // sky-900 - 深い紺色（青寄り）
        'navy-base': '#075985',   // sky-800 - 紺色ベース（青寄り）
        'navy-card': '#0369a1',   // sky-700 - カード背景（青寄り）
        'slate-body': '#f0f9ff',  // sky-50 - 薄い青みのある背景
        'slate-text': '#0c4a6e',  // sky-900 - テキスト（青寄り）
        'slate-muted': '#64748b', // slate-500
        'accent-silver': '#94a3b8', // slate-400
        accent: {
          blue: '#3b82f6',        // blue-500 - 鮮やかな青
          blueLight: '#60a5fa',   // blue-400 - 明るい青
          yellow: '#fbbf24',      // amber-400
          orange: '#fb923c',      // orange-400
          yellowLight: '#fde68a', // amber-200
          orangeLight: '#fed7aa', // orange-200
        },
        soft: {
          DEFAULT: '#e0f2fe',  // sky-100 - 柔らかい青
          light: '#f0f9ff',    // sky-50 - とても薄い青
          dark: '#bae6fd',     // sky-200 - 少し濃い青
        },
        text: {
          DEFAULT: '#0c4a6e',  // sky-900 - 深い青
          light: '#64748b',    // slate-500
          dark: '#082f49',     // sky-950 - 最も深い青
        },
      },
      fontFamily: {
        serif: ['var(--font-noto-serif)', 'serif'],
        sans: ['var(--font-noto-sans)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
