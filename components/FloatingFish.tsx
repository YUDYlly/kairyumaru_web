'use client'

import Image from 'next/image'

interface FloatingFishProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  direction?: 'left' | 'right'
  delay?: number
}

export default function FloatingFish({
  src,
  alt,
  width = 100,
  height = 100,
  className = '',
  direction = 'right',
  delay = 0
}: FloatingFishProps) {
  return (
    <div
      className={`absolute pointer-events-none z-0 ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-contain drop-shadow-lg opacity-90 ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
      />
    </div>
  )
}
