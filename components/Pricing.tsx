'use client'

import { Anchor, Fish, Waves, Moon, Target, Circle, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import WavyBorder from './WavyBorder'
import FloatingFish from './FloatingFish'

interface PricePlan {
  name: string
  nameEn: string
  priceRange: string
  description: string
  targetFish: string[]
  season: string
  icon: any
}

const plans: PricePlan[] = [
  {
    name: '落し込み',
    nameEn: 'Otoshikomi',
    priceRange: '¥13,000～15,000',
    description: '伝統的な落とし込み釣法。青物を狙う王道スタイル。',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ'],
    season: '春〜秋',
    icon: Anchor,
  },
  {
    name: 'タイ五目',
    nameEn: 'Tai Gomoku',
    priceRange: '¥13,000～',
    description: 'マダイをメインに多彩な魚種を狙う。',
    targetFish: ['マダイ', 'イサキ', 'アジ', 'ハタ'],
    season: '通年',
    icon: Fish,
  },
  {
    name: '夜焚きイカ',
    nameEn: 'Night Squid',
    priceRange: '¥10,000～12,000',
    description: '夜の海でイカを狙う幻想的な釣り。',
    targetFish: ['ヤリイカ', 'スルメイカ', 'ケンサキイカ'],
    season: '秋〜冬',
    icon: Moon,
  },
  {
    name: 'ジギング',
    nameEn: 'Jigging',
    priceRange: '¥12,000～18,000',
    description: 'スポーティーに大物を狙う。',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ', 'マダイ'],
    season: '通年',
    icon: Zap,
  },
  {
    name: 'タイラバ',
    nameEn: 'Tairaba',
    priceRange: '¥10,000～13,000',
    description: '人気のタイラバでマダイを専門に狙う。',
    targetFish: ['マダイ', 'ハタ', 'アマダイ'],
    season: '通年',
    icon: Waves,
  },
  {
    name: '一つテンヤ',
    nameEn: 'Hitotsutenya',
    priceRange: '¥10,000～13,000',
    description: 'シンプルな仕掛けで繊細な釣りを楽しむ。',
    targetFish: ['マダイ', 'ハタ'],
    season: '通年',
    icon: Circle,
  },
]

export default function Pricing() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="pricing" className="relative pt-28 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-ocean-blue to-ocean-dark overflow-hidden">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full z-10 rotate-180 transform translate-y-[-1px]">
        <WavyBorder fill="#f8fafc" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-rotate"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>

        {/* Wave pattern overlay */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlcyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMjVRMjUgMCA1MCAyNVQxMDAgMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3dhdmVzKSIvPjwvc3ZnPg==')] animate-wave-slow"></div>
        </div>

        {/* Ripple effects */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full border-2 border-white/10 animate-ripple"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full border-2 border-white/10 animate-ripple" style={{ animationDelay: '2s' }}></div>

        <FloatingFish
          src="/images/illustration/fish_iwashi.png"
          alt="イワシ"
          width={120}
          height={120}
          className="top-40 right-4 md:right-32 opacity-30"
          delay={3}
        />
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 transform translate-y-[1px]">
        <WavyBorder fill="white" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-thin text-white mb-6 drop-shadow-lg">
              料金のご案内
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
              多彩な釣法に対応した明確な料金設定
            </p>
          </div>
        </ScrollAnimation>

        {/* Mobile Carousel & Desktop Grid */}
        <div className="relative mb-12">
          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden -mx-4" ref={emblaRef}>
              <div className="flex gap-4 px-4">
                {plans.map((plan, index) => {
                  const Icon = plan.icon
                  return (
                    <div key={index} className="flex-[0_0_85%] min-w-0">
                      <div className="group relative bg-white rounded-2xl p-6 h-full shadow-card-hover border border-white/20 hover:scale-105 transition-all duration-500 overflow-hidden">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                          {/* Icon & Title */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="text-xs font-mono text-slate-muted mb-1 uppercase tracking-wider">
                                {plan.nameEn}
                              </div>
                              <h3 className="text-xl font-serif font-thin text-navy-deep">
                                {plan.name}
                              </h3>
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center text-primary flex-shrink-0 ml-4 group-hover:scale-110 transition-transform duration-500">
                              <Icon className="w-7 h-7" />
                            </div>
                          </div>

                          {/* Price */}
                          <div className="mb-4 pb-4 border-b border-slate-200">
                            <div className="text-2xl font-thin bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                              {plan.priceRange}
                            </div>
                            <p className="text-sm text-slate-muted leading-relaxed">{plan.description}</p>
                          </div>

                          {/* Target Fish */}
                          <div className="mb-4">
                            <div className="text-xs text-slate-muted uppercase mb-2 tracking-wider">
                              対象魚
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {plan.targetFish.map((fish, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gradient-to-r from-soft to-soft-dark text-navy-deep text-xs rounded-lg font-thin"
                                >
                                  {fish}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Season */}
                          <div className="text-sm text-slate-muted">
                            <span>シーズン:</span>{' '}
                            <span className="text-navy-deep font-thin">{plan.season}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white/30 transition-all"
                aria-label="前へ"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-sm text-white/70">
                スワイプで操作
              </div>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white/30 transition-all"
                aria-label="次へ"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <ScrollAnimation key={index} delay={index * 80}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-card-hover hover:-translate-y-2 transition-all duration-500 border border-white/20 overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex-1">
                          <div className="text-xs font-mono text-slate-muted mb-2 uppercase tracking-wider">
                            {plan.nameEn}
                          </div>
                          <h3 className="text-2xl font-serif font-thin text-navy-deep">
                            {plan.name}
                          </h3>
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center text-primary flex-shrink-0 ml-4 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-5 pb-5 border-b border-slate-200">
                        <div className="text-3xl font-thin bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                          {plan.priceRange}
                        </div>
                        <p className="text-sm text-slate-muted leading-relaxed">{plan.description}</p>
                      </div>

                      {/* Target Fish */}
                      <div className="mb-4">
                        <div className="text-xs text-slate-muted uppercase mb-3 tracking-wider">
                          対象魚
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {plan.targetFish.map((fish, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gradient-to-r from-soft to-soft-dark text-navy-deep text-xs rounded-lg font-thin"
                            >
                              {fish}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Season */}
                      <div className="text-sm text-slate-muted">
                        <span>シーズン:</span>{' '}
                        <span className="text-navy-deep font-thin">{plan.season}</span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <ScrollAnimation delay={400}>
          <div className="relative glass-dark p-10 rounded-2xl text-center overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-thin text-white mb-6 drop-shadow">
                レンタル・その他
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="text-sm text-white/95 bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <span className="font-thin">電動リール＋ロッド:</span> ¥1,000～2,000
                </div>
                <div className="text-sm text-white/95 bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <span className="font-thin">仕掛け:</span> ¥500～
                </div>
              </div>
              <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed drop-shadow">
                ※ 上記以外のコースも承ります。お客様のご要望に応じてカスタムプランのご提案も可能です。
              </p>
              <p className="text-xs md:text-sm text-white/70 mb-8 drop-shadow">
                ※ キャンセル料は頂いておりません（天候不良による欠航を含む）。できるだけお早めにご連絡ください。
              </p>
              <div>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-thin rounded-xl hover:bg-blue-50 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                  料金詳細を見る
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}