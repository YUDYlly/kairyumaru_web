import { MapPin, Phone, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="access" className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              お問い合わせ
            </h3>
            <div className="space-y-3">
              <a
                href="tel:09073837799"
                className="flex items-center gap-2 text-white hover:text-pop-cyan transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-xl font-bold">090-7383-7799</span>
              </a>
              <p className="text-sm text-white/70 pl-7">
                受付時間：8:00〜18:00<br />
                年中無休
              </p>
            </div>
          </div>

          {/* Access */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              アクセス
            </h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-medium">福岡県遠賀郡芦屋町山鹿</p>
                <p className="text-white/70">鐘崎漁港</p>
              </div>
            </div>
          </div>

          {/* Social Media & Logo */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              SNS
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pop-blue hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kairyumaru1802"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pop-cyan hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <a href="/" className="flex items-center gap-2 mt-6 hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo/logo.png"
                alt="海龍丸"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-lg font-serif font-bold">海龍丸</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} 遊漁船 海龍丸. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

