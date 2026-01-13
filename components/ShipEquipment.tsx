import { Ship, Zap, Users, Home, Wind, Coffee, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimation from './ScrollAnimation'

const specs = [
  {
    icon: Ship,
    label: '船体サイズ',
    value: '53フィート',
  },
  {
    icon: Zap,
    label: 'エンジン',
    value: '720馬力',
  },
  {
    icon: Users,
    label: '最大乗船人数',
    value: '14名',
  },
]

const facilities = [
  {
    icon: Wind,
    label: '冷暖房',
    description: '夏は涼しく冬は暖かく、キャビンで快適移動',
  },
  {
    icon: Coffee,
    label: 'ポット・レンジ',
    description: 'カップ麺や温かい食事を楽しめる',
  },
  {
    icon: Zap,
    label: 'バッテリー',
    description: 'バッテリー完備',
  },
  {
    icon: Home,
    label: 'ウォシュレット',
    description: '清潔で快適なウォシュレット付きトイレ',
  },
]

export default function ShipEquipment() {
  return (
    <section id="ship" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Ship Image - Full Section */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/sections/kairyumaru-ship.jpg"
          alt="海龍丸"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        {/* Gradient overlays to fade the image at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-thin text-navy-deep mb-4">
              船体・装備
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              機能性を重視した装備で、本格的な釣りをサポート
            </p>
          </div>
        </ScrollAnimation>

        {/* Specs Grid - Foreground */}
        <ScrollAnimation delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {specs.map((spec, index) => {
              const Icon = spec.icon
              return (
                <ScrollAnimation key={index} delay={150 + index * 50}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 border border-slate-200 hover:border-navy-deep/30 hover:shadow-lg hover:bg-white transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-deep text-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-medium text-slate-500">
                        {spec.label}
                      </div>
                    </div>
                    <div className="text-base font-thin text-navy-deep">
                      {spec.value}
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </ScrollAnimation>

        {/* Facilities Grid */}
        <ScrollAnimation delay={400}>
          <div className="mt-12">
            <h3 className="text-2xl font-serif font-thin text-navy-deep mb-6 text-center">
              快適装備
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {facilities.map((facility, index) => {
                const Icon = facility.icon
                return (
                  <ScrollAnimation key={index} delay={450 + index * 50}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 border border-slate-200 hover:border-navy-deep/30 hover:shadow-lg hover:bg-white transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-navy-deep text-white flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-thin text-navy-deep mb-1">
                            {facility.label}
                          </h4>
                          <p className="text-xs text-slate-600">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                )
              })}
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Button */}
        <ScrollAnimation delay={700}>
          <div className="text-center mt-12">
            <Link
              href="/ship"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-deep text-white font-thin rounded-lg hover:bg-navy-base transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              詳しく見る
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

