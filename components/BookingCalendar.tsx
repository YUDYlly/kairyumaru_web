import { Phone } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function BookingCalendar() {
  return (
    <section id="booking" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-rotate"></div>

        {/* Floating circles */}
        <div className="absolute top-1/4 right-1/3 w-48 h-48 rounded-full border border-blue-500/10 animate-float-rotate"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full border border-primary/10 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              予約状況・お問い合わせ
            </h2>
            <p className="section-subtitle">
              空き状況をご確認の上、お気軽にお問い合わせください
            </p>
          </div>
        </ScrollAnimation>

        {/* Google Calendar Embed */}
        <ScrollAnimation delay={100}>
          <div className="mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card-hover border border-slate-200/50">
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
            <p className="text-sm text-slate-muted text-center mt-4">
              ※カレンダーは参考です。詳細はお電話でご確認ください
            </p>
          </div>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation delay={200}>
          <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 md:p-12 shadow-card-hover border border-slate-200/50 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-primary/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-thin text-navy-deep mb-4">
                  お電話でのご予約
                </h3>
                <p className="text-slate-muted text-lg">
                  お気軽にお問い合わせください
                </p>
              </div>

              {/* Phone Number */}
              <div className="text-center mb-10">
                <a
                  href="tel:09073837799"
                  className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-primary to-primary-light text-white font-thin text-xl md:text-2xl rounded-2xl hover:shadow-[0_8px_30px_rgba(26,58,92,0.4)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  aria-label="電話で予約"
                >
                  <Phone className="w-7 h-7 group-hover:animate-pulse" />
                  <span>090-7383-7799</span>
                </a>
                <p className="text-sm text-slate-muted mt-6 leading-relaxed">
                  受付時間：9:00〜21:00（年中無休）<br />
                  ※21時以降のご連絡は緊急以外はご遠慮ください
                </p>
              </div>

              {/* Email */}
              <div className="text-center pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-muted mb-2">メールでのお問い合わせ</p>
                <a
                  href="mailto:kairyumaru1111@gmail.com"
                  className="text-ocean-blue font-thin hover:underline transition-colors"
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
