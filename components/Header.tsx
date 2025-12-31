'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: '釣果情報・お知らせ', href: '/blog' },
  { label: '海龍丸', href: '/ship' },
  { label: '星龍丸', href: '/seiryumaru' },
  { label: '釣場・潮汐表', href: '/fishing-spots' },
  { label: '料金', href: '/pricing' },
  { label: '予約状況', href: '/booking' },
  { label: 'アクセス', href: '/access' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-soft-dark shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo/logo_v3.png"
              alt="海龍丸"
              width={160}
              height={87}
              className="object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={`${item.label}セクションへ移動`}
                className="text-text hover:text-primary transition-colors duration-200 font-medium text-sm"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Phone Number - Desktop */}
          <a
            href="tel:09073837799"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="電話で予約"
          >
            <Phone className="w-5 h-5" />
            <span className="font-bold text-lg">090-7383-7799</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニュー"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-soft-dark mt-4 pt-4 bg-white rounded-b-2xl shadow-lg">
            {/* Phone Number - Mobile */}
            <a
              href="tel:09073837799"
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-lg mx-4 mb-4 hover:bg-primary-dark transition-all duration-300 shadow-md"
              aria-label="電話で予約"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold text-lg">090-7383-7799</span>
            </a>

            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={`${item.label}セクションへ移動`}
                  className="text-text hover:text-primary transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-soft"
                  onClick={() => setIsMobileMenuOpen(false)}
                  {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

