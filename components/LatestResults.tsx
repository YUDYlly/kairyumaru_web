import { Fish, Calendar, Ruler } from 'lucide-react'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

interface CatchResult {
  date: string
  fish: string
  size: string
  comment: string
  image: string
}

const results: CatchResult[] = [
  {
    date: '2024.03.15',
    fish: 'マダイ',
    size: '68cm',
    comment: '好ポイントで連続でヒット。仕掛けの調整が功を奏した。',
    image: '/images/釣果/釣果-2.jpg',
  },
  {
    date: '2024.03.12',
    fish: 'ブリ',
    size: '85cm',
    comment: '朝一番の潮に合わせて出船。期待通りの結果。',
    image: '/images/釣果/釣果-3.jpg',
  },
  {
    date: '2024.03.10',
    fish: 'ヒラメ',
    size: '52cm',
    comment: '底物狙いで安定した釣果。ポイントの見極めが重要。',
    image: '/images/釣果/釣果-4.jpg',
  },
  {
    date: '2024.03.08',
    fish: 'カサゴ',
    size: '35cm',
    comment: '底物狙いで好調。ポイントの見極めが重要。',
    image: '/images/釣果/釣果-5.jpg',
  },
  {
    date: '2024.03.05',
    fish: 'アジ',
    size: '28cm',
    comment: '群れで回遊。連続でヒット。',
    image: '/images/釣果/釣果-6.jpg',
  },
  {
    date: '2024.03.03',
    fish: 'イサキ',
    size: '42cm',
    comment: '夜釣りで好調。潮の流れが良かった。',
    image: '/images/釣果/釣果-7.jpg',
  },
]

export default function LatestResults() {
  return (
    <section id="results" className="section-container bg-soft">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-thin text-text mb-4">
          最新の釣果
        </h2>
        <p className="text-text-light mt-4 max-w-2xl mx-auto">
          経験を積んだ釣り人たちの実績をご覧ください
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {results.map((result, index) => (
          <ScrollAnimation key={index} delay={index * 100}>
            <div className="card overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={result.image}
                  alt={`${result.fish} ${result.size}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-soft-dark">
                <div className="flex items-center text-text-light">
                  <Calendar className="w-4 h-4 mr-2 text-accent-orange" />
                  <span className="text-sm font-thin">{result.date}</span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-serif font-thin text-text mb-2">
                  {result.fish}
                </h3>
                <div className="flex items-center text-text-light">
                  <Ruler className="w-4 h-4 mr-2 text-accent-yellow" />
                  <span className="font-thin">{result.size}</span>
                </div>
              </div>

              <p className="text-text-light text-sm leading-relaxed">
                {result.comment}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}

