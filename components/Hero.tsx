'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Background - Ship Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ships/kairyumaru_upscale.jpg"
          alt="海龍丸"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-10">
        <div className="flex justify-center">
          {/* Logo Only */}
          <div className="drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]">
            <Image
              src="/images/logo/logo_v3.png"
              alt="海龍丸"
              width={700}
              height={382}
              className="object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
