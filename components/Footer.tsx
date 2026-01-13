import { MapPin, Phone, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="access" className="relative bg-gradient-to-b from-navy-deep to-navy-base text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl animate-float-rotate"></div>
      </div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-serif font-thin mb-6 text-white text-center">
              お問い合わせ
            </h3>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:09073837799"
                  className="font-thin text-xl text-white/90 hover:text-white transition-colors"
                >
                  090-7383-7799
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white/70">
                  受付時間：9:00〜21:00
                </p>
                <p className="text-sm text-white/70">
                  年中無休
                </p>
                <p className="text-xs text-white/50 mt-2">
                  ※21時以降のご連絡は緊急以外はご遠慮ください
                </p>
              </div>
            </div>
          </div>

          {/* Access */}
          <div className="flex flex-col">
            <h3 className="text-xl font-serif font-thin mb-6 text-white text-center">
              アクセス
            </h3>
            <div className="flex flex-col items-center text-center space-y-3">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="text-white/90 font-thin text-base mb-1">
                  福岡県遠賀郡芦屋町山鹿
                </p>
                <p className="text-white/70 text-base">
                  鐘崎漁港
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h3 className="text-xl font-serif font-thin mb-6 text-white text-center">
              SNS
            </h3>
            <div className="flex flex-col items-center text-center space-y-3">
              <a
                href="https://www.instagram.com/kairyumaru1802"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kairyumaru1802"
                target="_blank"
                rel="noopener noreferrer"
                className="font-thin text-white/90 hover:text-white transition-colors"
              >
                @kairyumaru1802
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} 遊漁船 海龍丸. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
