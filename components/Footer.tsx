import { MapPin, Phone, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="access" className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 place-items-center">
          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold mb-4 text-white">
              お問い合わせ
            </h3>
            <div className="space-y-3 flex flex-col items-center">
              <a
                href="tel:09073837799"
                className="flex items-center justify-center gap-2 text-white hover:text-pop-cyan transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-xl font-bold">090-7383-7799</span>
              </a>
              <p className="text-sm text-white/70 text-center">
                受付時間：9:00〜21:00<br />
                年中無休<br />
                <span className="text-xs">※21時以降のご連絡は緊急以外はご遠慮ください</span>
              </p>
            </div>
          </div>

          {/* Access */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold mb-4 text-white">
              アクセス
            </h3>
            <div className="text-sm space-y-1">
              <p className="font-medium flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                福岡県遠賀郡芦屋町山鹿
              </p>
              <p className="text-white/70">鐘崎漁港</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold mb-4 text-white">
              SNS
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/kairyumaru1802"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-pop-cyan hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
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

