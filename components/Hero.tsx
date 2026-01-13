'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import WavyBorder from './WavyBorder'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-slate-900/90 via-blue-950/40 to-transparent"></div>
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-transparent via-transparent to-slate-900/60"></div>

      {/* Radial Spotlight Effect */}
      <div className="absolute inset-0 z-[4] bg-radial-spotlight opacity-40"></div>

      {/* Background - Ship Image with Parallax */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`
        }}
      >
        <Image
          src="/images/ships/kairyumaru_upscale.jpg"
          alt="海龍丸"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Dark overlay on image for better contrast */}
        <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-24 min-h-screen flex flex-col items-center justify-between">
        <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-10 w-full -mt-16 md:-mt-24">
          {/* Logo with Enhanced Effects */}
          <div
            className={`transform transition-all duration-1500 ease-out ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            style={{
              filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 120px rgba(255, 255, 255, 0.2))'
            }}
          >
            <Image
              src="/images/logo/logo_v3.png"
              alt="海龍丸"
              width={1680}
              height={917}
              className="object-contain w-auto h-auto max-w-[100vw] max-h-[66vh] md:max-h-[78vh]"
              priority
            />
          </div>

          {/* Tagline */}
          <div
            className={`text-center transform transition-all duration-1500 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl font-serif font-thin tracking-wide mb-3 hero-text-shadow">
              玄界灘の大海原へ
            </p>
            <p className="text-blue-200/80 text-base md:text-lg font-sans font-thin tracking-wider hero-text-shadow">
              53フィート・720馬力の高速船で、究極の釣り体験を
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1500 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <a
              href="#booking"
              className="group relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-thin rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] overflow-hidden text-center"
            >
              <span className="relative z-10">予約カレンダー</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#pricing"
              className="group flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-thin rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center"
            >
              料金を見る
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`transform transition-all duration-1500 delay-700 ease-out mt-8 ${mounted ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce-slow pb-4 md:pb-0">
            <span className="text-white/60 text-sm font-sans tracking-widest">SCROLL</span>
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Seamless Wavy Border Transition */}
      <div className="absolute bottom-0 left-0 w-full z-20 text-slate-body">
        <WavyBorder />
      </div>
    </section>
  )
}
