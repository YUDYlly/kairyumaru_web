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

