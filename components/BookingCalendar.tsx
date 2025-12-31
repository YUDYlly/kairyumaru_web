import { Calendar, Phone } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function BookingCalendar() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
              予約状況・お問い合わせ
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              空き状況をご確認の上、お気軽にお問い合わせください
            </p>
          </div>
        </ScrollAnimation>

        {/* Google Calendar Embed */}
        <ScrollAnimation delay={100}>
          <div className="mb-10">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=kairyumaru1111%40gmail.com&ctz=Asia%2FTokyo&height=600&wkst=1&bgcolor=%23ffffff&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="予約カレンダー"
                className="w-full"
              ></iframe>
            </div>
            <p className="text-sm text-slate-500 text-center mt-3">
              ※カレンダーは参考です。詳細はお電話でご確認ください
            </p>
          </div>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation delay={200}>
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg border border-slate-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-deep mb-3">
                  お電話でのご予約
                </h3>
                <p className="text-slate-600">
                  お気軽にお問い合わせください
                </p>
              </div>

              {/* Phone Number */}
              <div className="text-center mb-8">
                <a
                  href="tel:09073837799"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-navy-deep text-white font-bold text-xl rounded-lg hover:bg-slate-700 transition-colors duration-200 shadow-lg"
                  aria-label="電話で予約"
                >
                  <Phone className="w-6 h-6" />
                  <span>090-7383-7799</span>
                </a>
                <p className="text-sm text-slate-500 mt-4">
                  受付時間：9:00〜21:00（年中無休）<br />
                  ※21時以降のご連絡は緊急以外はご遠慮ください
                </p>
              </div>

              {/* Email */}
              <div className="text-center pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-2">メールでのお問い合わせ</p>
                <a
                  href="mailto:kairyumaru1111@gmail.com"
                  className="text-navy-deep font-bold hover:underline"
                >
                  kairyumaru1111@gmail.com
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

