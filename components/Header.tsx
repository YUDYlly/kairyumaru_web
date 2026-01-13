'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: '釣果情報・お知らせ', href: '/blog' },
  { label: '海龍丸', href: '/ship' },
  { label: '星龍丸', href: '/seiryumaru' },
  { label: '釣場', href: '/fishing-spots' },
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
          ? 'bg-white/98 backdrop-blur-md shadow-soft'
          : 'bg-white/90 backdrop-blur-sm'
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
                className="text-navy-deep hover:text-ocean-blue transition-colors duration-200 font-thin text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side - Phone & Menu Button */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Desktop */}
            <a
              href="tel:09073837799"
              className="hidden lg:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-soft"
              aria-label="電話で予約"
            >
              <Phone className="w-4 h-4" />
              <span className="font-thin">090-7383-7799</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-navy-deep hover:text-ocean-blue transition-colors p-2"
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
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-200 mt-4 pt-4">
            {/* Phone Number - Mobile */}
            <a
              href="tel:09073837799"
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg mx-4 mb-4 hover:bg-primary-dark transition-all duration-300"
              aria-label="電話で予約"
            >
              <Phone className="w-4 h-4" />
              <span className="font-thin">090-7383-7799</span>
            </a>

            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={`${item.label}セクションへ移動`}
                  className="text-navy-deep hover:text-ocean-blue hover:bg-soft-light transition-all duration-200 font-thin px-4 py-3 rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
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
