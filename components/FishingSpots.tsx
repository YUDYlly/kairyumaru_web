'use client'

import { MapPin, Anchor, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

interface FishingSpot {
  name: string
  description: string
  distance: string
  targetFish: string[]
}

const spots: FishingSpot[] = [
  {
    name: '七里ヶ瀬',
    description: '玄界灘を代表する一級ポイント。大物が狙える人気エリア。',
    distance: '約30km',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ', 'マダイ'],
  },
  {
    name: '壱岐周辺',
    description: '豊富な魚種が魅力。四季を通じて様々な釣りが楽しめる。',
    distance: '約40km',
    targetFish: ['マダイ', 'イサキ', 'アジ', 'ヒラマサ'],
  },
  {
    name: '対馬方面',
    description: '遠征ポイント。大型青物が回遊する絶好のエリア。',
    distance: '約60km',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ'],
  },
  {
    name: '沖ノ島',
    description: '神秘的な島周辺の好漁場。潮通しが良く魚影が濃い。',
    distance: '約50km',
    targetFish: ['マダイ', 'ブリ', 'ハタ'],
  },
]

export default function FishingSpots() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
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
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
              釣り場のご案内
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              玄界灘の一級ポイントへご案内
            </p>
          </div>
        </ScrollAnimation>

        {/* Mobile Carousel & Desktop Grid */}
        <div className="relative mb-8">
          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {spots.map((spot, index) => (
                  <div key={index} className="flex-[0_0_90%] min-w-0">
                    <div className="bg-white border border-slate-200 rounded-lg p-6 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-bold text-navy-deep mb-2">
                            {spot.name}
                          </h3>
                          <p className="text-sm text-slate-600 mb-3">
                            {spot.description}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-ocean-blue/10 flex items-center justify-center text-ocean-blue flex-shrink-0 ml-3">
                          <Anchor className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>港から {spot.distance}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {spot.targetFish.map((fish, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-ocean-blue/10 text-ocean-dark text-xs font-bold rounded"
                          >
                            {fish}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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
          <div className="hidden md:grid grid-cols-2 gap-6">
            {spots.map((spot, index) => (
              <ScrollAnimation key={index} delay={index * 80}>
                <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-ocean-blue/50 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-navy-deep mb-2">
                        {spot.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        {spot.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-ocean-blue/10 flex items-center justify-center text-ocean-blue flex-shrink-0 ml-4">
                      <Anchor className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>港から {spot.distance}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {spot.targetFish.map((fish, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-ocean-blue/10 text-ocean-dark text-xs font-bold rounded"
                      >
                        {fish}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <ScrollAnimation delay={300}>
          <div className="bg-white border border-slate-200 p-6 rounded-lg text-center">
            <p className="text-sm text-slate-600 mb-6">
              ※ 釣り場は当日の天候・海況により変更となる場合がございます。<br />
              ※ 詳しい釣り場情報については、お気軽にお問い合わせください。
            </p>
            <a
              href="/fishing-spots"
              className="inline-flex items-center justify-center px-8 py-3 bg-navy-deep text-white font-bold rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              詳細はこちら
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
