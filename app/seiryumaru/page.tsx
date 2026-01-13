import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Anchor, Zap, Wind, Coffee, Phone } from 'lucide-react'

export const metadata = {
  title: '船体・装備紹介 - 星龍丸',
  description: '全長16.5m、幅3.60m、673馬力の高速船。最大15名乗船可能。GPS、魚探、レーダー、冷暖房、個室水洗トイレ完備で快適な釣行をサポート。'
}

export default function SeiryumaruPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-body pt-20">
        {/* Hero Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pt-16 pb-8 relative">
          <div className="absolute top-10 right-20 w-96 h-96 bg-pop-blue/20 rounded-full blur-[100px] opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-pop-orange/20 rounded-full blur-[80px] opacity-20 -z-10"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-white border border-slate-200 text-pop-blue text-xs font-mono font-bold tracking-widest rounded shadow-sm">
                MACHINE SPECIFICATION
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-pop-blue/50 to-transparent"></span>
            </div>

            <h1 className="text-navy-deep text-4xl md:text-6xl font-serif font-black leading-tight tracking-tight drop-shadow-sm">
              船体・装備紹介 - 星龍丸
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-blue font-medium">
              <strong className="text-navy-deep">全長16.5m、幅3.60m、673馬力</strong>の高速船。<br className="hidden md:block"/>
              最大15名乗船、釣り定員10名。冷暖房、個室水洗トイレ、電子レンジ完備。<br/>
              快適な空間で、最高の釣行をサポートします。
            </p>
          </div>
        </div>

        {/* Ship Image */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-8">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ships/seiryumaru_upscale.jpg"
              alt="星龍丸"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* External Link Notice */}
          <div className="mt-8 bg-white border-2 border-pop-blue rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-navy-deep mb-4">
                星龍丸について
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                星龍丸は、海龍丸の師匠である東船長が運営する遊漁船です。<br/>
                詳しい情報、最新の釣果情報、予約については、星龍丸の公式サイトをご覧ください。
              </p>
              <a
                href="http://www.seiryumaru.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ocean-blue hover:bg-ocean-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                星龍丸公式サイトへ
              </a>
            </div>
          </div>
        </div>

        {/* Specs Card - Placeholder for now */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-6">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-pop-blue shadow-sm">
                  <Anchor className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif font-bold text-lg text-navy-deep tracking-widest leading-none">
                    VESSEL DATA
                  </h3>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wider mt-1">
                    SPECIFICATION SHEET
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-3">
              {/* Ship Size */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 border-dashed">
                <div className="flex items-center gap-4">
                  <Anchor className="w-5 h-5 text-pop-blue" />
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">
                    Ship Size
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono font-bold text-2xl text-navy-deep">54</span>
                  <span className="text-xs font-bold text-pop-blue">feet</span>
                </div>
              </div>

              {/* Engine */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50/50 border-l-4 border-pop-orange my-1">
                <div className="flex items-center gap-4">
                  <Zap className="w-6 h-6 text-pop-orange" />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-pop-orange uppercase tracking-wider font-bold">
                      Main Engine
                    </span>
                    <span className="text-[10px] text-slate-500">High Power Diesel</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="font-mono font-black text-3xl text-navy-deep">673</span>
                    <span className="text-sm font-bold text-pop-orange">HP</span>
                  </div>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[9px] font-bold text-primary tracking-widest">HIGH OUTPUT</span>
                  </div>
                </div>
              </div>

              {/* Capacity */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 border-dashed">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-navy-card" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">
                    Max Passengers
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono font-bold text-2xl text-navy-deep">15</span>
                  <span className="text-xs font-bold text-navy-card">Persons</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-navy-card" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">
                    Fishing Capacity
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono font-bold text-2xl text-navy-deep">10</span>
                  <span className="text-xs font-bold text-navy-card">Persons</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-50 text-right border-t border-slate-200">
              <span className="text-[9px] text-slate-400 font-mono tracking-widest">
                ALL SYSTEMS NOMINAL
              </span>
            </div>
          </div>
        </div>

        {/* UTILITIES Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
          <div className="flex items-end gap-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-serif font-black text-navy-deep">
              UTILITIES & EQUIPMENT
            </h3>
            <span className="text-pop-orange font-mono text-sm font-bold mb-2 tracking-widest">
              // 居住性・快適装備・航海機器
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-pop-orange/30 to-transparent mb-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Existing Utilities */}
            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-cyan transition-all p-5 shadow">
              <Wind className="w-10 h-10 text-pop-cyan mb-3" />
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">冷暖房完備</h4>
              <p className="text-xs text-slate-500 leading-relaxed">夏は涼しく冬は暖かく、キャビンで快適移動。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-orange transition-all p-5 shadow">
              <Coffee className="w-10 h-10 text-pop-orange mb-3" />
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">電子レンジ</h4>
              <p className="text-xs text-slate-500 leading-relaxed">温かい食事を楽しめる設備を完備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-yellow transition-all p-5 shadow">
              <Zap className="w-10 h-10 text-pop-yellow mb-3" />
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">電動リール用バッテリー・100V電源</h4>
              <p className="text-xs text-slate-500 leading-relaxed">電動リール用バッテリー、携帯電話充電用の100V電源を完備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-blue transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-blue mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">個室水洗トイレ完備</h4>
              <p className="text-xs text-slate-500 leading-relaxed">清潔で快適な個室水洗トイレ完備。</p>
            </div>

            {/* New Utilities for Seiryumaru */}
            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-green transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-green mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM21 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">GPS・魚探・レーダー</h4>
              <p className="text-xs text-slate-500 leading-relaxed">最新鋭の航海・魚群探知設備を完備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-red transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-red mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">サイドスラスター・スパンカー</h4>
              <p className="text-xs text-slate-500 leading-relaxed">安定した船位保持で釣りをサポート。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-purple transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-purple mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">海水蛇口（各釣座）</h4>
              <p className="text-xs text-slate-500 leading-relaxed">各釣座に海水蛇口を完備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-yellow transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-yellow mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.971 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.329 1.176l1.519 4.674c.3.921-.755 1.688-1.539 1.176l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.512-1.838-.255-1.539-1.176l1.519-4.674a1 1 0 00-.329-1.176l-3.976-2.888c-.783-.57-.383-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">ラーク有り</h4>
              <p className="text-xs text-slate-500 leading-relaxed">ラークを装備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-cyan transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-cyan mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10l8-4m0 4l-8 4m0-4v10M4 7v10l8 4" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">共用イケス（前4・後2）</h4>
              <p className="text-xs text-slate-500 leading-relaxed">新鮮な釣果を保つ共用イケスを前後に完備。</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full relative py-24 bg-slate-100">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8 px-4">
            <div>
              <span className="text-pop-blue font-mono text-sm tracking-[0.5em] uppercase block mb-4 font-bold">
                Book Your Challenge
              </span>
              <h2 className="text-navy-deep text-4xl md:text-5xl font-serif font-black">
                星龍丸で、最高の思い出を。
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8">
              <a
                href="http://www.seiryumaru.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 bg-ocean-blue hover:bg-ocean-dark text-white transition-all text-lg font-black tracking-wider shadow-xl hover:shadow-2xl hover:scale-105"
              >
                星龍丸公式サイト
              </a>

              <a
                href="tel:09097773355"
                className="flex min-w-[260px] items-center justify-center gap-3 rounded-lg h-16 px-8 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-all text-lg font-bold font-serif shadow-md hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                電話でお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}