import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Waves, Calendar, Clock, Info } from 'lucide-react'

export const metadata = {
  title: '潮汐表 - 海龍丸',
  description: '福岡県の潮汐情報。最適な釣行タイミングをチェックできます。'
}

export default function TidePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-body pt-20">
        {/* Hero Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pt-16 pb-8 relative">
          <div className="absolute top-10 right-20 w-96 h-96 bg-pop-cyan/20 rounded-full blur-[100px] opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-pop-blue/20 rounded-full blur-[80px] opacity-20 -z-10"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-white border border-slate-200 text-pop-cyan text-xs font-mono font-bold tracking-widest rounded shadow-sm">
                TIDE INFORMATION
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-pop-cyan/50 to-transparent"></span>
            </div>

            <h1 className="text-navy-deep text-4xl md:text-6xl font-serif font-black leading-tight tracking-tight drop-shadow-sm">
              潮汐表
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-cyan font-medium">
              福岡県の<strong className="text-navy-deep">潮汐情報</strong>を掲載。<br className="hidden md:block"/>
              最適な釣行タイミングをご確認いただけます。
            </p>
          </div>
        </div>

        {/* Tide Table */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pop-cyan/10 text-pop-cyan">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-navy-deep">
                  福岡県 潮汐情報
                </h3>
                <p className="text-sm text-slate-500 font-mono">
                  FUKUOKA TIDE TABLE
                </p>
              </div>
            </div>

            {/* Tide Widget Placeholder */}
            <div className="aspect-[16/9] bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Waves className="w-16 h-16 text-slate-300 mx-auto" />
                <div>
                  <p className="text-lg font-bold text-slate-400 mb-2">
                    潮汐表を表示
                  </p>
                  <p className="text-sm text-slate-500">
                    ここに潮汐表のウィジェットや<br />
                    外部サービスの埋め込みが入ります
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tide Guide */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 大潮 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-pop-blue transition-all">
              <div className="w-12 h-12 rounded-lg bg-pop-blue/10 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-pop-blue" />
              </div>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-3">
                大潮
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                潮の満ち引きが最も大きい日。魚の活性が高まりやすく、釣果が期待できるベストタイミング。
              </p>
            </div>

            {/* 中潮 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-pop-cyan transition-all">
              <div className="w-12 h-12 rounded-lg bg-pop-cyan/10 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-pop-cyan" />
              </div>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-3">
                中潮
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                大潮と小潮の中間。安定した潮流で、初心者の方にもおすすめのコンディション。
              </p>
            </div>

            {/* 小潮 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-pop-yellow transition-all">
              <div className="w-12 h-12 rounded-lg bg-pop-yellow/10 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-pop-yellow" />
              </div>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-3">
                小潮
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                潮の満ち引きが小さい日。魚の活性は控えめですが、ポイント選びで釣果を狙えます。
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-pop-blue mt-0.5" />
              <div>
                <h4 className="font-bold text-navy-deep mb-2">潮汐情報について</h4>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    掲載している潮汐情報は福岡県の予測データです。実際の海況は天候や気象条件により変動する場合があります。
                  </p>
                  <p>
                    当日の詳しい潮汐情報や釣行に最適なタイミングについては、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full relative py-24 bg-slate-100">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8 px-4">
            <div>
              <span className="text-pop-cyan font-mono text-sm tracking-[0.5em] uppercase block mb-4 font-bold">
                Plan Your Fishing
              </span>
              <h2 className="text-navy-deep text-4xl md:text-5xl font-serif font-black">
                潮に合わせた釣行を
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8">
              <a
                href="/booking"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 bg-pop-cyan hover:bg-cyan-400 text-white transition-all text-lg font-black tracking-wider shadow-xl"
              >
                予約カレンダー
              </a>

              <a
                href="tel:09073837799"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 border-2 border-slate-300 bg-white text-navy-deep hover:bg-slate-50 transition-all text-lg font-bold font-serif"
              >
                電話で相談
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
