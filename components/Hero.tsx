'use client'

import { Phone } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background - Ocean Image with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/ocean-hero.jpg"
          alt="玄界灘の海"
          fill
          className="object-cover opacity-50"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Simple gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80"></div>
      </div>

      {/* Content - Simplified and centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Heading - Clean and bold */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black text-white mb-8 tracking-tight leading-tight">
          海龍丸
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-relaxed">
          その一投に、経験と技術を。
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          玄界灘を知り尽くした本格派のための遊漁船<br />
          タイラバ・テンヤ・ジギング　最新の釣法に完全対応
        </p>

        {/* CTA Buttons - Simple and clear */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:09073837799"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-navy-deep text-white font-bold text-lg rounded-lg hover:bg-slate-700 transition-colors duration-200 shadow-xl min-w-[280px]"
            aria-label="電話で予約"
          >
            <Phone className="w-5 h-5" />
            <span>090-7383-7799</span>
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/95 backdrop-blur-sm text-navy-deep font-bold text-lg rounded-lg hover:bg-white transition-all duration-200 shadow-xl min-w-[280px]"
            aria-label="予約状況を確認"
          >
            <span>予約カレンダー</span>
          </a>
        </div>
      </div>
    </section>
  )
}

