'use client'

import { Map, Award, Users, Waves, Compass, Ship, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

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
      description: '七里ヶ瀬、壱岐、対馬、沖ノ島——玄界灘の一級ポイントを完全精通。季節、潮流、天候を読み、最適なポイントへご案内。'
    },
    {
      icon: Waves,
      title: '最新釣法に完全対応',
      description: 'タイラバ、一つテンヤ、ジギング——話題の最新釣法をいち早く取り入れ、進化し続ける釣りのスタイルに対応。'
    },
    {
      icon: Compass,
      title: '高速船で遠征も自在',
      description: '高速船の機動力を活かし、遠方の好ポイントへも迅速にアクセス。限られた時間を最大限に活用。'
    },
    {
      icon: Award,
      title: '経験豊富な船長',
      description: '長年の経験と実績に裏打ちされた確かな技術。潮の読み、ポイント選定まで、プロの知識でサポート。'
    },
    {
      icon: Users,
      title: '星龍丸との2艇体制',
      description: '師匠である東船長艇「星龍丸」との連携体制。満席時でも柔軟に対応可能。'
    },
    {
      icon: Ship,
      title: 'お客様第一の姿勢',
      description: '餌釣り、ルアーフィッシング、あらゆるニーズに対応。安全かつ快適にお楽しみいただけます。'
    }
  ]

  return (
    <section className="pt-16 pb-28 md:pt-24 md:pb-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-navy-deep mb-6">
              海龍丸の特徴
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-bold">
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
                      <div className="bg-white rounded-lg p-6 border border-slate-200 h-full">
                        <div className="mb-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ocean-blue text-white">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-navy-deep mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
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
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <ScrollAnimation key={index} delay={index * 80}>
                  <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-ocean-blue/50 hover:shadow-lg transition-all duration-200">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ocean-blue text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-navy-deep mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}
