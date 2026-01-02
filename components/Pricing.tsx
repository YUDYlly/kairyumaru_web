'use client'

import { Anchor, Fish, Waves, Moon, Target, Circle, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

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
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
              料金のご案内
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
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
                      <div className="bg-white border border-slate-200 rounded-lg p-6 h-full">
                        {/* Icon & Title */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="text-xs font-mono text-slate-500 mb-2 uppercase">
                              {plan.nameEn}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-navy-deep mb-2">
                              {plan.name}
                            </h3>
                          </div>
                          <div className="w-12 h-12 rounded-lg bg-navy-deep/10 flex items-center justify-center text-navy-deep flex-shrink-0 ml-4">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Price */}
                        <div className="mb-4 pb-4 border-b border-slate-200">
                          <div className="text-2xl font-mono font-bold text-navy-deep mb-1">
                            {plan.priceRange}
                          </div>
                          <p className="text-xs text-slate-600">{plan.description}</p>
                        </div>

                        {/* Target Fish */}
                        <div className="mb-3">
                          <div className="text-xs font-mono text-slate-500 uppercase mb-2">
                            Target Fish
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {plan.targetFish.map((fish, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-slate-100 text-navy-deep text-xs font-bold rounded border border-slate-200"
                              >
                                {fish}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Season */}
                        <div className="text-xs text-slate-600">
                          <span className="font-mono">シーズン:</span>{' '}
                          <span className="font-bold text-navy-deep">{plan.season}</span>
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
                className="p-2 rounded-full bg-white border border-slate-200 disabled:opacity-30 hover:bg-ocean-blue hover:text-white hover:border-ocean-blue transition-all"
                aria-label="前へ"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-sm text-slate-500 font-mono">
                スワイプで操作
              </div>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-2 rounded-full bg-white border border-slate-200 disabled:opacity-30 hover:bg-ocean-blue hover:text-white hover:border-ocean-blue transition-all"
                aria-label="次へ"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <ScrollAnimation key={index} delay={index * 80}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-navy-deep/30 hover:shadow-lg transition-all duration-200">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="text-xs font-mono text-slate-500 mb-2 uppercase">
                          {plan.nameEn}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-navy-deep mb-2">
                          {plan.name}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-navy-deep/10 flex items-center justify-center text-navy-deep flex-shrink-0 ml-4">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <div className="text-2xl font-mono font-bold text-navy-deep mb-1">
                        {plan.priceRange}
                      </div>
                      <p className="text-xs text-slate-600">{plan.description}</p>
                    </div>

                    {/* Target Fish */}
                    <div className="mb-3">
                      <div className="text-xs font-mono text-slate-500 uppercase mb-2">
                        Target Fish
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {plan.targetFish.map((fish, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-100 text-navy-deep text-xs font-bold rounded border border-slate-200"
                          >
                            {fish}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Season */}
                    <div className="text-xs text-slate-600">
                      <span className="font-mono">シーズン:</span>{' '}
                      <span className="font-bold text-navy-deep">{plan.season}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <ScrollAnimation delay={400}>
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg text-center">
            <h3 className="text-xl font-serif font-bold text-navy-deep mb-4">
              レンタル・その他
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
              <div className="text-sm text-slate-600">
                <span className="font-bold text-navy-deep">電動リール＋ロッド:</span> ¥1,000～2,000
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-bold text-navy-deep">仕掛け:</span> ¥500～
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              ※ 上記以外のコースも承ります。お客様のご要望に応じてカスタムプランのご提案も可能です。
            </p>
            <p className="text-xs text-slate-500">
              ※ キャンセル料は頂いておりません（天候不良による欠航を含む）。できるだけお早めにご連絡ください。
            </p>
            <div className="mt-6">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 bg-navy-deep text-white font-bold rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                料金詳細を見る
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

