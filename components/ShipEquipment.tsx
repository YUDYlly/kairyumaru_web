import { Ship, Zap, Radio, Users, Home } from 'lucide-react'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

const specs = [
  {
    icon: Ship,
    label: '全長',
    value: '15.5m',
  },
  {
    icon: Zap,
    label: 'エンジン',
    value: 'ディーゼル 500馬力',
  },
  {
    icon: Radio,
    label: '魚探',
    value: 'フルカラー ソナー完備',
  },
  {
    icon: Users,
    label: '最大乗船人数',
    value: '12名',
  },
  {
    icon: Home,
    label: '個室トイレ',
    value: '完備',
  },
]

export default function ShipEquipment() {
  return (
    <section id="ship" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Ship Image - Full Section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/sections/kairyumaru-ship.jpg"
            alt="海龍丸"
            fill
            className="object-contain opacity-15"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
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
                    <div className="text-base font-bold text-navy-deep">
                      {spec.value}
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </ScrollAnimation>

        {/* Additional Equipment */}
        <ScrollAnimation delay={400}>
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg">
            <h3 className="text-xl font-serif font-bold text-navy-deep mb-6 text-center">
              その他の装備
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-navy-deep rounded-full"></span>
                GPS・レーダー完備
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-navy-deep rounded-full"></span>
                ライブウェル完備
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-navy-deep rounded-full"></span>
                大型クーラーボックス
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-navy-deep rounded-full"></span>
                安全装備一式
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-navy-deep rounded-full"></span>
                エサ冷凍庫
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-navy-deep rounded-full"></span>
                釣り座席（12席）
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

