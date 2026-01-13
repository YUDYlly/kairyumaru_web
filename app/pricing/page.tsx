import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Anchor, Fish, Waves, Moon, Target, Circle, Zap } from 'lucide-react'

export const metadata = {
  title: '料金のご案内 - 海龍丸',
  description: '落し込み・タイ五目・夜焚きイカ・ジギング・タイラバなど、多彩な釣法に対応。明確な料金設定で安心してご利用いただけます。'
}

interface PricingPlan {
  name: string
  nameEn: string
  priceRange: string
  description: string
  targetFish: string[]
  season: string
  icon: any
  color: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: '落し込み',
    nameEn: 'Otoshikomi',
    priceRange: '¥13,000～15,000',
    description: '伝統的な落とし込み釣法。青物を狙う王道スタイル。',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ'],
    season: '春〜秋',
    icon: Anchor,
    color: 'pop-blue'
  },
  {
    name: 'タイ五目',
    nameEn: 'Tai Gomoku',
    priceRange: '¥13,000～',
    description: 'マダイをメインに多彩な魚種を狙う。初心者にもおすすめ。',
    targetFish: ['マダイ', 'イサキ', 'アジ', 'ハタ'],
    season: '通年',
    icon: Fish,
    color: 'pop-orange'
  },
  {
    name: '夜焚きイカ',
    nameEn: 'Night Squid',
    priceRange: '¥10,000～12,000',
    description: '夜の海でイカを狙う幻想的な釣り。ファミリーにも人気。',
    targetFish: ['ヤリイカ', 'スルメイカ', 'ケンサキイカ'],
    season: '秋〜冬',
    icon: Moon,
    color: 'pop-yellow'
  },
  {
    name: '掛かり釣り',
    nameEn: 'Kakari Fishing',
    priceRange: '¥13,000～15,000',
    description: 'ポイントに掛かって狙う本格派の釣法。',
    targetFish: ['マダイ', 'イサキ', 'アジ'],
    season: '通年',
    icon: Target,
    color: 'pop-cyan'
  },
  {
    name: '一つテンヤ',
    nameEn: 'Hitotsute nya',
    priceRange: '¥10,000～13,000',
    description: 'シンプルな仕掛けで繊細な釣りを楽しむ。',
    targetFish: ['マダイ', 'ハタ'],
    season: '通年',
    icon: Circle,
    color: 'pop-blue'
  },
  {
    name: 'メダイ',
    nameEn: 'Medai',
    priceRange: '¥13,000～15,000',
    description: '深場の高級魚メダイを狙う本格釣行。',
    targetFish: ['メダイ', 'アカムツ'],
    season: '冬〜春',
    icon: Fish,
    color: 'pop-orange'
  },
  {
    name: 'ジギング',
    nameEn: 'Jigging',
    priceRange: '¥12,000～18,000',
    description: 'スポーティーに大物を狙う。上級者向けの釣法。',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ', 'マダイ'],
    season: '通年',
    icon: Zap,
    color: 'pop-cyan'
  },
  {
    name: 'タイラバ',
    nameEn: 'Tairaba',
    priceRange: '¥10,000～13,000',
    description: '人気のタイラバでマダイを専門に狙う。',
    targetFish: ['マダイ', 'ハタ', 'アマダイ'],
    season: '通年',
    icon: Waves,
    color: 'pop-yellow'
  }
]

const rentalItems = [
  {
    name: '電動リール＋ロッド',
    price: '¥1,000～2,000',
    description: '初心者の方も安心してご利用いただけます'
  },
  {
    name: '仕掛け',
    price: '¥500～',
    description: '各種釣法に対応した仕掛けを販売'
  }
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-body pt-20">
        {/* Hero Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pt-16 pb-8 relative">
          <div className="absolute top-10 right-20 w-96 h-96 bg-pop-orange/20 rounded-full blur-[100px] opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-pop-yellow/20 rounded-full blur-[80px] opacity-20 -z-10"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-white border border-slate-200 text-pop-orange text-xs font-mono font-bold tracking-widest rounded shadow-sm">
                PRICING PLANS
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-pop-orange/50 to-transparent"></span>
            </div>

            <h1 className="text-navy-deep text-4xl md:text-6xl font-serif font-black leading-tight tracking-tight drop-shadow-sm">
              料金のご案内
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-orange font-medium">
              多彩な釣法に対応した<strong className="text-navy-deep">明確な料金設定</strong>。<br className="hidden md:block"/>
              落し込み・タイ五目・夜焚きイカ・ジギング・タイラバなど、<br/>
              お客様のスタイルに合わせたプランをご用意しております。
            </p>
          </div>
        </div>

        {/* Pricing Plans Grid */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-${plan.color} hover:shadow-xl transition-all duration-300 shadow flex flex-col"
                >
                  <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-${plan.color} to-transparent`}></div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className={`text-[10px] font-mono text-${plan.color} mb-2 tracking-widest bg-${plan.color}/10 inline-block px-2 py-0.5 rounded font-bold`}>
                          {plan.nameEn.toUpperCase()}
                        </div>
                        <h3 className="text-2xl font-serif font-black text-navy-deep mb-2 group-hover:text-${plan.color} transition-colors">
                          {plan.name}
                        </h3>
                      </div>
                      <div className={`w-12 h-12 rounded-lg bg-${plan.color}/10 flex items-center justify-center text-${plan.color} border border-${plan.color}/20 flex-shrink-0 ml-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4 pb-4 border-b border-slate-100">
                      <div className="text-3xl font-mono font-black text-navy-deep mb-1">
                        {plan.priceRange}
                      </div>
                      <p className="text-xs text-slate-500">{plan.description}</p>
                    </div>

                    {/* Target Fish */}
                    <div className="mb-4 flex-1">
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
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
                    <div className="text-xs text-slate-500 mt-auto">
                      <span className="font-mono">シーズン:</span>{' '}
                      <span className="font-bold text-navy-deep">{plan.season}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Rental Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-12">
          <div className="flex items-end gap-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-serif font-black text-navy-deep">
              RENTAL
            </h3>
            <span className="text-pop-blue font-mono text-sm font-bold mb-2 tracking-widest">
              // レンタル
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-pop-blue/30 to-transparent mb-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rentalItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-pop-blue transition-all shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-serif font-bold text-navy-deep">{item.name}</h4>
                  <div className="text-2xl font-mono font-black text-pop-blue">{item.price}</div>
                </div>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-pop-cyan rounded-2xl p-8">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-serif font-bold text-navy-deep mb-3">
                上記以外のコースも承ります
              </h4>
              <p className="text-slate-muted max-w-2xl mx-auto">
                お客様のご要望に応じて、カスタムプランのご提案も可能です。<br/>
                料金や詳細については、お気軽にお問い合わせください。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:09073837799"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ocean-blue hover:bg-ocean-dark text-white font-bold text-lg rounded-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                お問い合わせ
              </a>
              <a
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg font-bold font-serif rounded-lg shadow-md hover:shadow-xl hover:scale-105"
              >
                予約カレンダー
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full relative py-24 bg-slate-100">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8 px-4">
            <div>
              <span className="text-pop-orange font-mono text-sm tracking-[0.5em] uppercase block mb-4 font-bold">
                Book Your Trip
              </span>
              <h2 className="text-navy-deep text-4xl md:text-5xl font-serif font-black">
                お好みのスタイルで。
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8">
              <a
                href="/booking"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 bg-accent-orange hover:bg-orange-600 text-white transition-all text-lg font-black tracking-wider shadow-xl hover:shadow-2xl hover:scale-105"
              >
                予約カレンダー
              </a>
              <a
                href="/fishing-spots"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-all text-lg font-bold font-serif shadow-md hover:shadow-xl hover:scale-105"
              >
                釣り場を見る
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
