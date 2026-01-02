import type { Metadata } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Concept from '../components/Concept'
import ShipEquipment from '../components/ShipEquipment'
import FishingSpots from '../components/FishingSpots'
import Pricing from '../components/Pricing'
import TideTable from '../components/TideTable'
import RecentBlog from '../components/RecentBlog'
import FAQ from '../components/FAQ'
import BookingCalendar from '../components/BookingCalendar'
import Notice from '../components/Notice'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: '遊漁船 海龍丸 | 玄界灘での本格的な釣り - 福岡県芦屋町',
  description: '遊漁船「海龍丸」の公式サイト。玄界灘での餌釣り、ルアーフィッシングなどお客様のあらゆるニーズに対応。七里ヶ瀬・壱岐・対馬方面・沖ノ島・汐巻・八里ヶ瀬等の遠方の釣場にも精通。53フィート・720馬力の高速船で快適な釣行をサポート。',
  keywords: ['海龍丸', '遊漁船', '玄界灘', '福岡', '芦屋町', '釣り', 'フィッシング', '餌釣り', 'ルアー', '七里ヶ瀬', '壱岐', '対馬'],
  openGraph: {
    title: '遊漁船 海龍丸 | 玄界灘での本格的な釣り',
    description: '玄界灘での餌釣り、ルアーフィッシングなどお客様のあらゆるニーズに対応。53フィート・720馬力の高速船で快適な釣行をサポート。',
    url: 'https://kairyumaru.com',
    siteName: '遊漁船 海龍丸',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/ships/kairyumaru_upscale.jpg',
        width: 1200,
        height: 630,
        alt: '遊漁船 海龍丸',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '遊漁船 海龍丸 | 玄界灘での本格的な釣り',
    description: '玄界灘での餌釣り、ルアーフィッシングなどお客様のあらゆるニーズに対応。',
    images: ['/images/ships/kairyumaru_upscale.jpg'],
  },
  alternates: {
    canonical: 'https://kairyumaru.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section - First Impression */}
      <Hero />

      {/* Why Choose Us - Brand Message */}
      <WhyChooseUs />

      {/* Recent Blog - Latest Updates & Fishing Reports */}
      <RecentBlog />

      {/* Concept - Brand Story */}
      <Concept />

      {/* Ship & Equipment - Trust Building */}
      <ShipEquipment />

      {/* Fishing Spots - Value Proposition */}
      <FishingSpots />

      {/* Pricing - Clear Information */}
      <Pricing />

      {/* Tide Table - Useful Information */}
      <TideTable />

      {/* FAQ - Frequently Asked Questions */}
      <FAQ />

      {/* Booking Calendar - Conversion */}
      <BookingCalendar />

      {/* Notice - Updates */}
      <Notice />

      <Footer />
    </main>
  )
}

