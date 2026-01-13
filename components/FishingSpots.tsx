'use client'

import { MapPin, Anchor, ChevronLeft, ChevronRight, Waves } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import WavyBorder from './WavyBorder'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import FloatingFish from './FloatingFish'

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
    align: 'center',
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
    <section id="fishing-spots" className="relative py-24 md:py-32 bg-ocean-blue overflow-hidden">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full z-10 rotate-180 transform translate-y-[-1px]">
        <WavyBorder fill="white" />
      </div>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingFish
          src="/images/illustration/fish_fugu.png"
          alt="フグ"
          width={130}
          height={130}
          className="top-32 right-[-20px] md:right-10 opacity-40 mix-blend-screen"
          delay={2}
        />
        <FloatingFish
          src="/images/illustration/fish_ika.png"
          alt="イカ"
          width={140}
          height={140}
          className="top-20 left-[-20px] md:left-10 opacity-40 mix-blend-screen"
          direction="left"
          delay={0.5}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-thin text-white mb-6 drop-shadow-md">
              釣り場のご案内
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-thin max-w-2xl mx-auto">
              玄界灘の一級ポイントへご案内
            </p>
          </div>
        </ScrollAnimation>

        {/* Mobile Carousel & Desktop Grid */}
        <div className="relative mb-8">
          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden -mx-4" ref={emblaRef}>
              <div className="flex gap-4 px-4">
                {spots.map((spot, index) => (
                  <div key={index} className="flex-[0_0_90%] min-w-0">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full shadow-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-thin text-white mb-2">
                            {spot.name}
                          </h3>
                          <p className="text-sm text-white/80 mb-3">
                            {spot.description}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0 ml-3">
                          <Anchor className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3 text-sm text-white/90">
                        <MapPin className="w-4 h-4 text-accent-gold" />
                        <span>港から {spot.distance}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {spot.targetFish.map((fish, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded"
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
                className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white hover:text-ocean-blue transition-all"
                aria-label="前へ"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-sm text-white/70 font-mono">
                スワイプで操作
              </div>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white hover:text-ocean-blue transition-all"
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
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-white/50 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-thin text-white mb-2 group-hover:text-accent-gold transition-colors">
                        {spot.name}
                      </h3>
                      <p className="text-white/80 mb-3 text-base leading-relaxed">
                        {spot.description}
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-white text-ocean-blue flex items-center justify-center flex-shrink-0 ml-4 shadow-soft group-hover:rotate-6 transition-transform">
                      <Anchor className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-white/90">
                    <MapPin className="w-5 h-5 text-accent-gold" />
                    <span className="font-medium">港から {spot.distance}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {spot.targetFish.map((fish, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-lg border border-white/10"
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
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center shadow-lg">
            <p className="text-white/80 mb-8 leading-relaxed">
              ※ 釣り場は当日の天候・海況により変更となる場合がございます。<br />
              ※ 詳しい釣り場情報については、お気軽にお問い合わせください。
            </p>
            <a
              href="/fishing-spots"
              className="group inline-flex items-center justify-center px-10 py-4 bg-white text-ocean-blue font-thin rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              詳細はこちら
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}