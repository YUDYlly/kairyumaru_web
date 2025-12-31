import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Anchor, Zap, Wind, Coffee } from 'lucide-react'

export const metadata = {
  title: '船体・装備紹介 - 海龍丸',
  description: '53フィート、720馬力の高速船。最大14名乗船可能。冷暖房、ポット、レンジ、バッテリー、救命胴衣、寝室、ウォシュレット完備で快適な釣行をサポート。'
}

export default function ShipPage() {
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
              船体・装備紹介 - 海龍丸
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-blue font-medium">
              <strong className="text-navy-deep">53フィート・720馬力</strong>の高速船。<br className="hidden md:block"/>
              最大14名乗船可能で、冷暖房・寝室・ウォシュレット完備。<br/>
              快適な居住空間で、最高の釣行をサポートします。
            </p>
          </div>
        </div>

        {/* Ship Image */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-8">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ships/kairyumaru_upscale.jpg"
              alt="海龍丸"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Specs Card */}
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
              {/* Ship Model */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 border-dashed">
                <div className="flex items-center gap-4">
                  <Anchor className="w-5 h-5 text-pop-blue" />
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">
                    Ship Size
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono font-bold text-2xl text-navy-deep">53</span>
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
                    <span className="font-mono font-black text-3xl text-navy-deep">720</span>
                    <span className="text-sm font-bold text-pop-orange">HP</span>
                  </div>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[9px] font-bold text-primary tracking-widest">HIGH OUTPUT</span>
                  </div>
                </div>
              </div>

              {/* Capacity */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-navy-card" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-medium">
                    Capacity
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono font-bold text-2xl text-navy-deep">14</span>
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
              UTILITIES
            </h3>
            <span className="text-pop-orange font-mono text-sm font-bold mb-2 tracking-widest">
              // 居住性・快適装備
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-pop-orange/30 to-transparent mb-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-cyan transition-all p-5 shadow">
              <Wind className="w-10 h-10 text-pop-cyan mb-3" />
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">冷暖房完備</h4>
              <p className="text-xs text-slate-500 leading-relaxed">夏は涼しく冬は暖かく、キャビンで快適移動。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-orange transition-all p-5 shadow">
              <Coffee className="w-10 h-10 text-pop-orange mb-3" />
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">ポット・レンジ</h4>
              <p className="text-xs text-slate-500 leading-relaxed">カップ麺や温かい食事を楽しめる設備を完備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-yellow transition-all p-5 shadow">
              <Zap className="w-10 h-10 text-pop-yellow mb-3" />
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">バッテリー</h4>
              <p className="text-xs text-slate-500 leading-relaxed">バッテリー完備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-blue transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-blue mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">救命胴衣完備</h4>
              <p className="text-xs text-slate-500 leading-relaxed">全員分の救命胴衣を完備。安全第一で出航。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-cyan transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-cyan mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">寝室完備</h4>
              <p className="text-xs text-slate-500 leading-relaxed">休憩・仮眠ができる専用スペースを完備。</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:border-pop-orange transition-all p-5 shadow">
              <svg className="w-10 h-10 text-pop-orange mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h4 className="text-navy-deep font-bold text-lg font-serif mb-2">ウォシュレット完備</h4>
              <p className="text-xs text-slate-500 leading-relaxed">清潔で快適なウォシュレット付きトイレ完備。</p>
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
                最高の一日を、海龍丸で。
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8">
              <a
                href="/booking"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 bg-pop-blue hover:bg-sky-400 text-white transition-all text-lg font-black tracking-wider shadow-xl"
              >
                予約カレンダー
              </a>

              <a
                href="/pricing"
                className="flex min-w-[260px] items-center justify-center rounded-lg h-16 px-8 border-2 border-slate-300 bg-white text-navy-deep hover:bg-slate-50 transition-all text-lg font-bold font-serif"
              >
                料金・プランを確認
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
