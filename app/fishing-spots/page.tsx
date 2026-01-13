import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Anchor, Ship } from 'lucide-react'

export const metadata = {
  title: '釣り場 - 海龍丸',
  description: '七里ヶ瀬・壱岐・対馬・沖ノ島など、玄界灘の一級ポイントへご案内。経験豊富な船長が最適な釣り場へご案内します。'
}

interface FishingSpot {
  name: string
  nameEn: string
  description: string
  distance: string
  targetFish: string[]
  season: string
  icon: any
}

const fishingSpots: FishingSpot[] = [
  {
    name: '七里ヶ瀬',
    nameEn: 'Shichirigase',
    description: '玄界灘を代表する一級ポイント。潮通しが良く、大物が狙える人気エリア。ブリ、ヒラマサなどの青物をはじめ、マダイも豊富。',
    distance: '約30km',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ', 'マダイ'],
    season: '通年',
    icon: Anchor,
  },
  {
    name: '壱岐周辺',
    nameEn: 'Iki Area',
    description: '豊富な魚種が魅力の好漁場。四季を通じて様々な釣りが楽しめる。マダイ、イサキ、アジなど多彩なターゲットが狙える。',
    distance: '約40km',
    targetFish: ['マダイ', 'イサキ', 'アジ', 'ヒラマサ', 'ハタ'],
    season: '通年',
    icon: Anchor,
  },
  {
    name: '対馬方面',
    nameEn: 'Tsushima Area',
    description: '遠征ポイント。大型青物が回遊する絶好のエリア。高速船の機動力を活かして効率よくアクセス可能。',
    distance: '約60km',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ', 'マダイ'],
    season: '春〜秋',
    icon: Ship,
  },
  {
    name: '沖ノ島',
    nameEn: 'Okinoshima',
    description: '神秘的な島周辺の好漁場。潮通しが良く魚影が濃い。マダイをはじめ、ブリ、ハタなど多彩な魚種が狙える。',
    distance: '約50km',
    targetFish: ['マダイ', 'ブリ', 'ハタ', 'イサキ'],
    season: '通年',
    icon: Anchor,
  },
  {
    name: '汐巻',
    nameEn: 'Shiomaki',
    description: '玄界灘の好ポイント。タイラバやジギングに最適。マダイの実績が高く、安定した釣果が期待できる。',
    distance: '約35km',
    targetFish: ['マダイ', 'ハタ', 'アマダイ'],
    season: '通年',
    icon: Anchor,
  },
  {
    name: '八里ヶ瀬',
    nameEn: 'Hachirigas e',
    description: '遠方の一級ポイント。大物狙いに最適。青物の回遊が多く、エキサイティングな釣りが楽しめる。',
    distance: '約45km',
    targetFish: ['ブリ', 'ヒラマサ', 'カンパチ'],
    season: '春〜秋',
    icon: Ship,
  },
]

export default function FishingSpotsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-soft-light via-white to-accent-orangeLight pt-20">
        {/* Hero Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pt-16 pb-8 relative">
          <div className="absolute top-10 right-20 w-96 h-96 bg-pop-cyan/20 rounded-full blur-[100px] opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-pop-blue/20 rounded-full blur-[80px] opacity-20 -z-10"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-white border border-slate-200 text-pop-cyan text-xs font-mono font-thin tracking-widest rounded shadow-sm">
                FISHING SPOTS
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-pop-cyan/50 to-transparent"></span>
            </div>

            <h1 className="text-navy-deep text-4xl md:text-6xl font-serif font-thin leading-tight tracking-tight drop-shadow-sm">
              釣り場
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-cyan font-thin">
              玄界灘の一級ポイントをご案内。<br className="hidden md:block"/>
              <strong className="text-navy-deep">高速船の機動力</strong>を活かした最適な釣り場で、<br/>
              快適な釣行をサポートします。
            </p>
          </div>
        </div>

        {/* Fishing Spots Grid */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fishingSpots.map((spot, index) => {
              const Icon = spot.icon
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-soft-dark rounded-2xl p-6 hover:border-pop-cyan hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
                >
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-xs font-mono text-pop-cyan mb-2 uppercase font-thin">
                        {spot.nameEn}
                      </div>
                      <h3 className="text-2xl font-serif font-thin text-navy-deep mb-2">
                        {spot.name}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-blue to-pop-cyan flex items-center justify-center text-white flex-shrink-0 ml-4 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {spot.description}
                  </p>

                  {/* Distance */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">港から {spot.distance}</span>
                  </div>

                  {/* Target Fish */}
                  <div className="mb-3">
                    <div className="text-xs font-mono text-slate-500 uppercase mb-2">
                      Target Fish
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {spot.targetFish.map((fish, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-100 text-navy-deep text-xs font-thin rounded border border-slate-200"
                        >
                          {fish}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Season */}
                  <div className="text-xs text-slate-600">
                    <span className="font-mono">シーズン:</span>{' '}
                    <span className="font-thin text-navy-deep">{spot.season}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
            <h3 className="text-xl font-serif font-thin text-navy-deep mb-4 text-center">
              釣り場について
            </h3>
            <div className="space-y-3 text-sm text-slate-600 max-w-3xl mx-auto">
              <p>
                海龍丸は、玄界灘の各ポイントを知り尽くした経験豊富な船長が、当日の天候・海況・潮流を見極め、最適な釣り場へご案内いたします。
              </p>
              <p>
                高速船の機動力を活かし、七里ヶ瀬・壱岐・対馬方面・沖ノ島・汐巻・八里ヶ瀬など、遠方の一級ポイントへも迅速にアクセス可能です。
              </p>
              <p className="text-xs text-slate-500 pt-4 border-t border-slate-200">
                ※ 釣り場は当日の天候・海況により変更となる場合がございます。<br />
                ※ 詳しい釣り場情報や当日のおすすめポイントについては、お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-gradient-to-br from-soft-light to-accent-yellowLight py-16">
          <div className="max-w-[800px] mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-thin text-navy-deep mb-6">
              ご予約・お問い合わせ
            </h2>
            <p className="text-slate-text mb-8 font-thin">
              釣り場の詳細やご不明な点は、お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:09073837799"
                className="inline-flex items-center justify-center px-8 py-4 bg-ocean-blue hover:bg-ocean-dark text-white font-thin text-lg rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 min-w-[260px]"
              >
                電話で問い合わせ
              </a>
              <a
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg font-thin font-serif rounded-xl min-w-[260px] shadow-md hover:shadow-xl hover:scale-105"
              >
                予約カレンダー
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
