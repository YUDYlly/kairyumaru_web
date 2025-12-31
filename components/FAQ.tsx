import { HelpCircle } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

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
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
              よくあるご質問
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              お客様からよくいただくご質問をまとめました
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 50}>
              <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-navy-deep/30 hover:shadow-lg transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-navy-deep text-white flex items-center justify-center">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-deep mb-2 text-base md:text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={450}>
          <div className="mt-12 text-center bg-white rounded-lg p-8 border border-slate-200">
            <p className="text-slate-600 mb-4">
              その他ご不明な点がございましたら、<br className="md:hidden" />
              お気軽にお問い合わせください。
            </p>
            <a
              href="tel:09073837799"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-navy-deep text-white font-bold rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              <span>090-7383-7799</span>
            </a>
            <p className="text-sm text-slate-500 mt-3">
              受付時間：9:00〜21:00（年中無休）
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
