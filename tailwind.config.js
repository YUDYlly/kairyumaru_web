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
        // Primary - 深い紺色（メインカラー）
        primary: {
          DEFAULT: '#1a3a5c', // 深い紺
          light: '#2a5a8c',
          dark: '#0d2840',
        },
        // 勝色（かついろ） - 伝統的な深い紺色
        katsuiro: '#002B5B',
        // 海の青系（ポップなトーンに変更）
        'ocean-blue': '#3b82f6',     // 明るい青 (blue-500)
        'ocean-light': '#93c5fd',    // 優しい水色 (blue-300)
        'ocean-dark': '#1d4ed8',     // 鮮やかな深青 (blue-700)
        // アクセントカラー（より鮮やかに）
        'accent-gold': '#f59e0b',    // 明るいアンバー (amber-500)
        'accent-orange': '#f97316',  // ポップなオレンジ (orange-500)
        // ネイビー系
        'navy-deep': '#0f172a',      // 濃い紺
        'navy-base': '#1e293b',      // ベース紺
        'navy-card': '#334155',      // カード背景
        // 背景系
        'slate-body': '#fdfbf7',     // ほんのり温かみのある白
        'slate-light': '#f3f4f6',    // 明るいグレー
        'slate-text': '#334155',     // テキスト
        'slate-muted': '#64748b',    // 薄いテキスト
        // ソフトカラー
        soft: {
          DEFAULT: '#e0f2fe',    // スカイブルー
          light: '#f0f9ff',      // とても薄い青
          dark: '#bae6fd',       // 少し濃い青
        },
        // テキスト
        text: {
          DEFAULT: '#1e293b',
          light: '#475569',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        serif: ['var(--font-noto-serif)', '"Noto Serif JP"', 'serif'],
        sans: ['var(--font-noto-sans)', '"Noto Sans JP"', 'sans-serif'],
      },
      borderRadius: {
        'lg': '1rem',    // 16px
        'xl': '1.5rem',  // 24px
        '2xl': '2rem',   // 32px
        '3xl': '3rem',   // 48px
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(30, 41, 59, 0.1)',
        'soft-lg': '0 8px 30px rgba(30, 41, 59, 0.15)',
        'card': '0 2px 10px rgba(30, 41, 59, 0.08)',
        'card-hover': '0 12px 40px rgba(30, 41, 59, 0.15)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'wave-flow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'wave-slow': 'wave-flow 25s linear infinite',
        'wave-medium': 'wave-flow 20s linear infinite',
        'wave-fast': 'wave-flow 15s linear infinite',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(rgba(26, 58, 92, 0.2) 1.5px, transparent 1.5px)',
      },
      backgroundSize: {
        'dot': '24px 24px',
      },
    },
  },
  plugins: [],
}
