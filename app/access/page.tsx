import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Car, Train, Clock, Phone, ExternalLink, Navigation } from 'lucide-react'

export const metadata = {
  title: 'アクセス・乗船場所のご案内 - 海龍丸',
  description: '福岡県遠賀郡芦屋町大字山鹿柏原2291・芦屋柏原漁港。車・公共交通機関でのアクセス方法、駐車場情報をご案内。'
}

export default function AccessPage() {
  const address = '福岡県遠賀郡芦屋町大字山鹿柏原2291'
  const portName = '芦屋柏原漁港'
  const googleMapsUrl = 'https://maps.app.goo.gl/KABZtcuVr8gLoaWT9'
  const googleMapsEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.5!2d130.6642082!3d33.909129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543cb6ec135bb39%3A0x36037dea4c53f745!2z6YGK5ryr6Ij5IOa1t-m-jOS4uocg!5e0!3m2!1sja!2sjp!4v1234567890!5m2!1sja!2sjp'

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
                ACCESS & LOCATION
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-pop-blue/50 to-transparent"></span>
            </div>

            <h1 className="text-navy-deep text-4xl md:text-6xl font-serif font-black leading-tight tracking-tight drop-shadow-sm">
              アクセス・乗船場所のご案内
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-blue font-medium">
              <strong className="text-navy-deep">芦屋柏原漁港</strong>を拠点に、玄界灘へ出航。<br className="hidden md:block"/>
              福岡市内から車で約60分、アクセス良好な立地です。<br/>
              駐車場完備で、お車でのご来港も安心です。
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            {/* Map Embed */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-slate-100">
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="芦屋柏原漁港の地図"
              ></iframe>
            </div>

            {/* Address Info */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-pop-blue/10 flex items-center justify-center text-pop-blue border border-pop-blue/20">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-black text-navy-deep">
                        {portName}
                      </h2>
                      <p className="text-sm text-slate-500 font-mono">ASHIYA KASHIWABARA PORT</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-pop-blue mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-navy-deep font-bold">{address}</p>
                        <p className="text-sm text-slate-500">{portName}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-pop-cyan mt-1 flex-shrink-0" />
                      <div>
                        <a
                          href="tel:09073837799"
                          className="text-navy-deep font-bold hover:text-pop-blue transition-colors"
                        >
                          090-7383-7799
                        </a>
                        <p className="text-sm text-slate-500">
                          受付時間：9:00〜21:00（年中無休）<br />
                          <span className="text-xs">※21時以降のご連絡は緊急以外はご遠慮ください</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-blue hover:bg-ocean-dark text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Google Mapsで開く
                  </a>
                </div>

                {/* Quick Info */}
                <div className="w-full md:w-auto bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Navigation className="w-5 h-5 text-pop-orange" />
                    <h3 className="font-serif font-bold text-navy-deep">所要時間</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-slate-400" />
                      <div className="text-sm">
                        <p className="font-bold text-navy-deep">福岡市内から</p>
                        <p className="text-slate-500">車で約60分</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-slate-400" />
                      <div className="text-sm">
                        <p className="font-bold text-navy-deep">北九州市内から</p>
                        <p className="text-slate-500">車で約40分</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Access Methods */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-12">
          <div className="flex items-end gap-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-serif font-black text-navy-deep">
              ACCESS
            </h3>
            <span className="text-pop-cyan font-mono text-sm font-bold mb-2 tracking-widest">
              // アクセス方法
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-pop-cyan/30 to-transparent mb-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* By Car */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow hover:shadow-lg transition-all flex flex-col">
              <div className="bg-gradient-to-r from-ocean-blue to-ocean-light p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-serif font-black">お車でお越しの方</h4>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h5 className="font-bold text-navy-deep">福岡方面より</h5>
                      <span className="text-xs bg-pop-blue/10 text-pop-blue px-2 py-0.5 rounded-full font-bold">
                        所要時間：約60分
                      </span>
                    </div>
                    <ol className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pop-blue/10 text-pop-blue flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                        <span>福岡都市高速から国道3号線（北九州方面）へ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pop-blue/10 text-pop-blue flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                        <span>岡垣バイパスを進み、「今川」交差点付近から県道74号線を芦屋・柏原方面へ北上</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pop-blue/10 text-pop-blue flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                        <span>案内板に従い芦屋柏原漁港へ</span>
                      </li>
                    </ol>
                  </div>

                  <div className="h-px bg-slate-200"></div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h5 className="font-bold text-navy-deep">北九州方面より</h5>
                      <span className="text-xs bg-pop-cyan/10 text-pop-cyan px-2 py-0.5 rounded-full font-bold">
                        所要時間：約40分
                      </span>
                    </div>
                    <ol className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pop-cyan/10 text-pop-cyan flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                        <span>国道3号線を福岡方面へ進む</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pop-cyan/10 text-pop-cyan flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                        <span>遠賀川付近の接続から県道74号線に入り、芦屋町山鹿・柏原方面へ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pop-cyan/10 text-pop-cyan flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                        <span>芦屋柏原漁港に到着</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-pop-blue/30">
                    <div className="flex items-start gap-2 mb-3">
                      <Navigation className="w-5 h-5 text-pop-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-navy-deep text-sm mb-1">ナビ設定のポイント</p>
                        <p className="text-xs text-slate-600 mb-2">カーナビやGoogleマップをご利用の際は、以下の地点を目印に設定してください。</p>
                      </div>
                    </div>
                    <div className="space-y-2 pl-7">
                      <div className="text-sm">
                        <p className="font-bold text-navy-deep mb-1">目的地：</p>
                        <p className="text-slate-700 leading-relaxed">
                          <span className="font-bold">柏原漁業協同組合</span><br />
                          <span className="text-xs text-slate-600">（福岡県遠賀郡芦屋町大字柏原285）</span>
                        </p>
                      </div>
                      <div className="text-sm">
                        <p className="font-bold text-navy-deep mb-1">駐車場：</p>
                        <p className="text-slate-700 text-xs">港内の無料駐車場をご利用いただけます。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* By Public Transport */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow hover:shadow-lg transition-all flex flex-col">
              <div className="bg-gradient-to-r from-accent-gold to-accent-orange p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Train className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-serif font-black">公共交通機関でお越しの方</h4>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h5 className="font-bold text-navy-deep">JR鹿児島本線「遠賀川駅」よりタクシー</h5>
                      <span className="text-xs bg-pop-orange/10 text-pop-orange px-2 py-0.5 rounded-full font-bold">
                        推奨
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      遠賀川駅からタクシーで約20分。
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-bold text-amber-900 mb-1">早朝便ご利用の方へ</p>
                          <p className="text-amber-800 leading-relaxed">
                            午前便ご利用の場合、バスの始発前となるため<span className="font-bold">タクシーが唯一の手段</span>となります。早朝は台数が限られるため、タクシー会社（芦屋タクシー等）への<span className="font-bold">事前予約を強くお勧めします。</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200"></div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h5 className="font-bold text-navy-deep">バスをご利用の場合</h5>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                        帰路・午後便向け
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <p className="text-slate-700 mb-2">
                          <span className="font-bold text-navy-deep">芦屋タウンバス</span>「柏原」バス停下車、徒歩約5分。
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          「遠賀川駅」または「折尾駅」方面からの路線がございます。
                        </p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                        <p className="text-xs text-slate-700 leading-relaxed">
                          <span className="font-bold text-navy-deep">※</span> 運行本数が少ないため、事前に最新の時刻表をご確認ください。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-ocean-light/30 to-ocean-blue/10 rounded-lg p-4 border border-ocean-blue/30 mt-auto">
                    <div className="flex items-start gap-2">
                      <Phone className="w-5 h-5 text-ocean-blue mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-bold text-navy-deep mb-1">タクシー会社のご案内</p>
                        <p className="text-slate-700 text-xs leading-relaxed">
                          早朝のご予約は「芦屋タクシー」などの地元タクシー会社がおすすめです。事前にお問い合わせください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Port Information */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-pop-blue rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-serif font-bold text-navy-deep mb-3">
                港施設のご案内
              </h4>
              <p className="text-slate-muted max-w-2xl mx-auto">
                快適にご利用いただけるよう、各種設備を整えております。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-5 text-center border border-slate-200">
                <div className="text-3xl mb-2">🚻</div>
                <h5 className="font-bold text-navy-deep mb-1">トイレ完備</h5>
                <p className="text-xs text-slate-500">清潔なトイレ設備</p>
              </div>
              <div className="bg-white rounded-lg p-5 text-center border border-slate-200">
                <div className="text-3xl mb-2">🅿️</div>
                <h5 className="font-bold text-navy-deep mb-1">駐車場無料</h5>
                <p className="text-xs text-slate-500">漁港敷地内に完備</p>
              </div>
              <div className="bg-white rounded-lg p-5 text-center border border-slate-200">
                <div className="text-3xl mb-2">🧊</div>
                <h5 className="font-bold text-navy-deep mb-1">氷・エサ</h5>
                <p className="text-xs text-slate-500">現地で購入可能</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-600 mb-4">
                ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <a
                href="tel:09073837799"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ocean-blue hover:bg-ocean-dark text-white font-bold text-lg rounded-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full relative py-24 bg-slate-100">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8 px-4">
            <div>
              <span className="text-pop-blue font-mono text-sm tracking-[0.5em] uppercase block mb-4 font-bold">
                Find Your Way
              </span>
              <h2 className="text-navy-deep text-4xl md:text-5xl font-serif font-black">
                お待ちしております。
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8">
              <a
                href="/booking"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 bg-ocean-blue hover:bg-ocean-dark text-white transition-all text-lg font-black tracking-wider shadow-xl hover:shadow-2xl hover:scale-105"
              >
                予約カレンダー
              </a>
              <a
                href="/pricing"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-all text-lg font-bold font-serif shadow-md hover:shadow-xl hover:scale-105"
              >
                料金を見る
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
