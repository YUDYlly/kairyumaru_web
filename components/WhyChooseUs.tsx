import { Map, Award, Users, Waves, Compass, Ship } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function WhyChooseUs() {
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
              海龍丸の特徴
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              本格派の釣り人が海龍丸を選ぶ理由
            </p>
          </div>
        </ScrollAnimation>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollAnimation key={index} delay={index * 80}>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-navy-deep/30 hover:shadow-lg transition-all duration-200">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-navy-deep text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
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
    </section>
  )
}
