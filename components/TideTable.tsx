'use client'

import { Waves } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import { useEffect, useState } from 'react'

interface TideData {
  date: string
  highTides: { time: string; height: string }[]
  lowTides: { time: string; height: string }[]
}

export default function TideTable() {
  const [tideData, setTideData] = useState<TideData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 潮汐データを取得（ここではダミーデータ）
    // 実際のAPIに接続する場合は、ここでfetchを実行
    const fetchTideData = async () => {
      try {
        // ダミーデータ（実際のAPIに置き換え可能）
        const dummyData: TideData[] = [
          {
            date: '2025-01-15',
            highTides: [
              { time: '06:30', height: '3.2m' },
              { time: '18:45', height: '3.1m' },
            ],
            lowTides: [
              { time: '00:15', height: '0.5m' },
              { time: '12:30', height: '0.6m' },
            ],
          },
          {
            date: '2025-01-16',
            highTides: [
              { time: '07:15', height: '3.3m' },
              { time: '19:30', height: '3.0m' },
            ],
            lowTides: [
              { time: '01:00', height: '0.4m' },
              { time: '13:15', height: '0.7m' },
            ],
          },
          {
            date: '2025-01-17',
            highTides: [
              { time: '08:00', height: '3.4m' },
              { time: '20:15', height: '2.9m' },
            ],
            lowTides: [
              { time: '01:45', height: '0.3m' },
              { time: '14:00', height: '0.8m' },
            ],
          },
        ]
        setTideData(dummyData)
        setLoading(false)
      } catch (error) {
        console.error('潮汐データの取得に失敗しました:', error)
        setLoading(false)
      }
    }

    fetchTideData()
  }, [])

  return (
    <section id="tide" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
              潮汐表
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              玄界灘の潮汐情報（福岡県・博多湾周辺）
            </p>
          </div>
        </ScrollAnimation>

        {/* Tide Table Content */}
        <ScrollAnimation delay={100}>
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg">
            {loading ? (
              <div className="p-12 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-navy-deep"></div>
                <p className="mt-4 text-slate-600">潮汐データを読み込み中...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-navy-deep text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">日付</th>
                      <th className="px-6 py-4 text-left font-bold">満潮</th>
                      <th className="px-6 py-4 text-left font-bold">干潮</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {tideData.map((day, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-navy-deep">
                          {new Date(day.date).toLocaleDateString('ja-JP', {
                            month: 'long',
                            day: 'numeric',
                            weekday: 'short',
                          })}
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {day.highTides.map((tide, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Waves className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium text-slate-700">
                                  {tide.time}
                                </span>
                                <span className="text-xs text-slate-500">
                                  ({tide.height})
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {day.lowTides.map((tide, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Waves className="w-4 h-4 text-slate-400" />
                                <span className="text-sm font-medium text-slate-700">
                                  {tide.time}
                                </span>
                                <span className="text-xs text-slate-500">
                                  ({tide.height})
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </ScrollAnimation>

        {/* External Link */}
        <ScrollAnimation delay={200}>
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 mb-4">
              より詳細な潮汐情報は気象庁の潮汐表をご確認ください
            </p>
            <a
              href="https://www.data.jma.go.jp/gmd/kaiyou/db/tide/suisan/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-navy-deep font-medium rounded-lg hover:bg-slate-200 transition-colors duration-200 border border-slate-300"
            >
              気象庁 潮汐表を見る
            </a>
          </div>
        </ScrollAnimation>

        {/* Note */}
        <ScrollAnimation delay={300}>
          <div className="mt-6 bg-slate-50 border border-slate-200 p-6 rounded-lg">
            <p className="text-sm text-slate-600 text-center">
              ※ 潮汐情報は参考値です。実際の海況は気象条件により変動する場合があります。<br />
              ※ 出航判断については必ずお問い合わせください。
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
