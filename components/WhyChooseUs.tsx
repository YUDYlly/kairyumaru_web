'use client'

import { Map, Award, Users, Waves, Compass, Ship, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import WavyBorder from './WavyBorder'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import FloatingFish from './FloatingFish'

export default function WhyChooseUs() {
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

  const features = [
    {
      icon: Map,
      title: '玄界灘を知り尽くす',
      description: '七里ヶ瀬、壱岐、対馬、沖ノ島——玄界灘の一級ポイントを完全精通。季節、潮流、天候を読み、最適なポイントへご案内。',
    },
    {
      icon: Waves,
      title: '最新釣法に完全対応',
      description: 'タイラバ、一つテンヤ、ジギング——話題の最新釣法をいち早く取り入れ、進化し続ける釣りのスタイルに対応。',
    },
    {
      icon: Compass,
      title: '高速船で遠征も自在',
      description: '高速船の機動力を活かし、遠方の好ポイントへも迅速にアクセス。限られた時間を最大限に活用。',
    },
    {
      icon: Award,
      title: '経験豊富な船長',
      description: '長年の経験と実績に裏打ちされた確かな技術。潮の読み、ポイント選定まで、プロの知識でサポート。',
    },
    {
      icon: Users,
      title: '星龍丸との2艇体制',
      description: '師匠である東船長艇「星龍丸」との連携体制。満席時でも柔軟に対応可能。',
    },
    {
      icon: Ship,
      title: 'お客様第一の姿勢',
      description: '餌釣り、ルアーフィッシング、あらゆるニーズに対応。安全かつ快適にお楽しみいただけます。',
    }
  ]

  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-ocean-blue to-ocean-dark">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full z-10 rotate-180 transform translate-y-[-1px]">
        <WavyBorder fill="white" />
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-rotate"></div>

        {/* Ripple effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-white/10 animate-ripple"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full border-2 border-white/5 animate-ripple" style={{ animationDelay: '1.5s' }}></div>

        {/* Fish Illustrations */}
        <FloatingFish
          src="/images/illustration/fish_iwashi.png"
          alt="イワシ"
          width={120}
          height={120}
          className="top-20 left-4 md:left-20 opacity-40 mix-blend-screen"
          direction="left"
        />
        <FloatingFish
          src="/images/illustration/fish_karei.png"
          alt="カレイ"
          width={150}
          height={150}
          className="bottom-10 right-4 md:right-20 opacity-40 mix-blend-screen"
          delay={1.5}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6 drop-shadow-md">
              海龍丸の特徴
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
              本格派の釣り人が海龍丸を選ぶ理由
            </p>
          </div>
        </ScrollAnimation>

        {/* Mobile Carousel & Desktop Grid */}
        <div className="relative">
          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden -mx-4" ref={emblaRef}>
              <div className="flex gap-4 px-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex-[0_0_85%] min-w-0">
                      <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/50 overflow-hidden">
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                          <div className="mb-4">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white text-ocean-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft">
                              <Icon className="w-7 h-7" />
                            </div>
                          </div>
                          <h3 className="text-lg font-light text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {feature.description}
                          </p>
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
                className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white hover:text-ocean-blue transition-all shadow-soft"
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
                className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white hover:text-ocean-blue transition-all shadow-soft"
                aria-label="次へ"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <ScrollAnimation key={index} delay={index * 80}>
                  <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/50 overflow-hidden hover:-translate-y-2">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="mb-5">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white text-ocean-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="text-xl font-light text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 transform translate-y-[1px]">
        <WavyBorder fill="white" />
      </div>
    </section>
  )
}