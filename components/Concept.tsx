import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function Concept() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
              コンセプト
            </h2>
            <p className="text-lg text-slate-600">
              玄界灘での本格的な釣りを追求
            </p>
          </div>
        </ScrollAnimation>

        {/* Content with Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <ScrollAnimation delay={100}>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-base">
                当遊漁船「海龍丸」は、玄界灘での餌釣り、ルアーフィッシングなどお客様のあらゆるニーズに対応出来る様、日々研究を重ね、お客様に快適且つ安全に楽しんで頂けるよう心がけて出航中です。
              </p>

              <p className="text-base">
                七里ヶ瀬・壱岐・対馬方面・沖ノ島・汐巻・八里ヶ瀬等の遠方の釣場にも精通し、高速船の機動力を生かして案内しております。
                タイラバ・一つテンヤ等話題の釣りも、いち早く取り入れており、お客様のあらゆるご要望にお答え出来る体制です。
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sections/ocean-waves.jpg"
                alt="玄界灘の海"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimation>
        </div>

        {/* 2-Ship System */}
        <ScrollAnimation delay={300}>
          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-deep mb-4 text-center">
              「星龍丸」との2艇体制
            </h3>
            <p className="text-base text-slate-600 text-center max-w-3xl mx-auto">
              当遊漁船は、私の師匠でもある、東船長艇「星龍丸」との2艇体制で行っております。
              どちらかが満席になった場合でもご乗船可能です。
              お気軽にお問合せ下さい。
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <p className="text-base md:text-lg font-bold text-navy-deep mt-12 text-center">
            その一投に、経験と技術を。それが海龍丸の釣りです。
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}

