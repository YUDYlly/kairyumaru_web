import { HelpCircle, Phone } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import WavyBorder from './WavyBorder'
import FloatingFish from './FloatingFish'

const faqs = [
  {
    question: 'タックルのレンタルはありますか？',
    answer: 'はい。2,000円で貸し出しております。'
  },
  {
    question: '救命胴衣のレンタルはありますか？',
    answer: 'はい。無料にて貸し出しております。救命胴衣の着用にご協力ください。'
  },
  {
    question: '予約のキャンセルは出来ますか？またキャンセル料は発生しますか？',
    answer: 'ご予約のキャンセルは、出来るだけお早目にお願い致します。またキャンセル料は頂いておりません。'
  },
  {
    question: 'タックルの他に用意しておいた方が良いものはありますか？',
    answer: '波を被る場合がございますので、レインコート等のウエアのご用意をお勧め致します。'
  },
  {
    question: '船酔いした場合、帰港してもらえますか？',
    answer: '他のお客様もいらっしゃいますので、基本的には戻りません。ただし、チャーターで同船者が同意した場合は帰港致します。'
  },
  {
    question: '氷はありますか？',
    answer: '船には、用意しておりませんので、各自でご用意下さい。尚、漁港で10kg300円にて販売しております。'
  },
  {
    question: '竿受けバッテリーはありますか？',
    answer: '竿受けバッテリーは完備しております。'
  },
  {
    question: 'トイレはありますか？',
    answer: '個室水洗トイレがございますので、女性の方でも安心してご利用になれます。'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="relative pt-24 pb-16 md:pt-40 md:pb-32 bg-white overflow-hidden">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full z-10 rotate-180 transform translate-y-[-1px]">
        <WavyBorder fill="#3b82f6" />
      </div>

      {/* Wave decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating elements */}
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float-rotate"></div>

        <FloatingFish
          src="/images/illustration/fish_fugu.png"
          alt="フグ"
          width={100}
          height={100}
          className="bottom-40 right-4 md:right-20 opacity-40"
          direction="left"
          delay={2}
        />
        <FloatingFish
          src="/images/illustration/fish_ika.png"
          alt="イカ"
          width={90}
          height={90}
          className="top-40 left-4 md:left-16 opacity-30"
          direction="right"
          delay={0.5}
        />
        <FloatingFish
          src="/images/illustration/fish_ebi.png"
          alt="エビ"
          width={80}
          height={80}
          className="bottom-1/3 left-4 md:left-32 opacity-35"
          direction="right"
          delay={3}
        />
        <FloatingFish
          src="/images/illustration/fish_karei.png"
          alt="カレイ"
          width={110}
          height={110}
          className="top-1/3 right-4 md:right-32 opacity-30"
          direction="left"
          delay={1.5}
        />
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 transform translate-y-[1px]">
        <WavyBorder fill="white" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-thin text-navy-deep mb-4">
              よくあるご質問
            </h2>
            <p className="text-lg text-slate-muted">
              お客様からよくいただくご質問をまとめました
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 50}>
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-thin text-navy-deep mb-2 text-base md:text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-slate-muted text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={450}>
          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-card">
            <p className="text-slate-muted mb-4">
              その他ご不明な点がございましたら、<br className="md:hidden" />
              お気軽にお問い合わせください。
            </p>
            <a
              href="tel:09073837799"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-thin rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-soft"
            >
              <Phone className="w-5 h-5" />
              <span>090-7383-7799</span>
            </a>
            <p className="text-sm text-slate-muted mt-3">
              受付時間：9:00〜21:00（年中無休）
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
