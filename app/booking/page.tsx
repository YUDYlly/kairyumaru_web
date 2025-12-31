import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Info } from 'lucide-react'

export const metadata = {
  title: '予約状況 - 海龍丸',
  description: '海龍丸の予約状況をご確認いただけます。空き状況をチェックしてご予約ください。'
}

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-body pt-20">
        {/* Hero Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pt-16 pb-8 relative">
          <div className="absolute top-10 right-20 w-96 h-96 bg-pop-blue/20 rounded-full blur-[100px] opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-pop-cyan/20 rounded-full blur-[80px] opacity-20 -z-10"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-white border border-slate-200 text-pop-blue text-xs font-mono font-bold tracking-widest rounded shadow-sm">
                BOOKING STATUS
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-pop-blue/50 to-transparent"></span>
            </div>

            <h1 className="text-navy-deep text-4xl md:text-6xl font-serif font-black leading-tight tracking-tight drop-shadow-sm">
              予約状況
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-blue font-medium">
              海龍丸の<strong className="text-navy-deep">予約状況</strong>を確認。<br className="hidden md:block"/>
              ご希望の日程の空き状況をチェックしてご予約ください。
            </p>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pop-blue/10 text-pop-blue">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-navy-deep">
                  予約カレンダー
                </h3>
                <p className="text-sm text-slate-500 font-mono">
                  AVAILABILITY CALENDAR
                </p>
              </div>
            </div>

            {/* Google Calendar Embed */}
            <div className="w-full rounded-xl overflow-hidden border border-slate-200">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=kairyumaru1111%40gmail.com&ctz=Asia%2FTokyo&height=600&wkst=1&bgcolor=%23ffffff&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0"
                className="w-full h-[600px]"
                frameBorder="0"
                scrolling="no"
                title="予約カレンダー"
              ></iframe>
            </div>
            <p className="text-sm text-slate-500 text-center mt-3">
              ※カレンダーは参考です。詳細はお電話でご確認ください
            </p>
          </div>
        </div>

        {/* Booking Info */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-start gap-3 mb-6">
              <Info className="w-5 h-5 text-pop-blue mt-0.5" />
              <div>
                <h4 className="font-bold text-navy-deep text-lg mb-4">ご予約について</h4>
                <div className="text-sm text-slate-600 space-y-3">
                  <p>
                    ・ご予約は<strong>お電話</strong>にて承っております。空き状況をご確認の上、お気軽にお問い合わせください。
                  </p>
                  <p>
                    ・天候や海況により出船できない場合がございます。前日または当日朝にご連絡いたします。
                  </p>
                  <p>
                    ・ご予約のキャンセルは、できるだけお早めにお願い致します。キャンセル料は頂いておりません（天候不良による欠航を含む）。
                  </p>
                  <p>
                    ・団体でのご予約や貸切をご希望の場合は、お電話にてご相談ください。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <a
                href="tel:09073837799"
                className="inline-flex items-center justify-center px-8 py-4 bg-pop-blue text-white font-bold text-lg rounded-lg hover:bg-sky-400 transition-all shadow-lg"
              >
                電話で予約する
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full relative py-24 bg-slate-100">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8 px-4">
            <div>
              <span className="text-pop-blue font-mono text-sm tracking-[0.5em] uppercase block mb-4 font-bold">
                Reserve Your Spot
              </span>
              <h2 className="text-navy-deep text-4xl md:text-5xl font-serif font-black">
                今すぐご予約を
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8">
              <a
                href="tel:09073837799"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 bg-pop-blue hover:bg-sky-400 text-white transition-all text-lg font-black tracking-wider shadow-xl"
              >
                090-7383-7799
              </a>

              <a
                href="/fishing-spots"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 border-2 border-slate-300 bg-white text-navy-deep hover:bg-slate-50 transition-all text-lg font-bold font-serif"
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
