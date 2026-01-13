import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
})

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kairyumaru.com'),
  title: '遊漁船 海龍丸 - 玄界灘での本格的な釣り',
  description: '遊漁船「海龍丸」の公式サイト。玄界灘での餌釣り、ルアーフィッシングなどお客様のあらゆるニーズに対応。七里ヶ瀬・壱岐・対馬方面・沖ノ島・汐巻・八里ヶ瀬等の遠方の釣場にも精通。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://kairyumaru.com/#organization',
    name: '遊漁船 海龍丸',
    alternateName: '海龍丸',
    description: '玄界灘での餌釣り、ルアーフィッシングなどお客様のあらゆるニーズに対応する遊漁船。七里ヶ瀬・壱岐・対馬方面・沖ノ島・汐巻・八里ヶ瀬等の遠方の釣場にも精通。',
    url: 'https://kairyumaru.com',
    telephone: '+81-90-7383-7799',
    priceRange: '¥¥',
    image: 'https://kairyumaru.com/images/ships/kairyumaru_upscale.jpg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: '福岡県',
      addressLocality: '遠賀郡芦屋町',
      streetAddress: '山鹿',
      postalCode: '',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.8867',
      longitude: '130.6512',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    sameAs: [
      'https://www.instagram.com/kairyumaru1802',
    ],
    areaServed: {
      '@type': 'Place',
      name: '玄界灘',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '釣りプラン',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '餌釣り',
            description: '玄界灘での餌釣りプラン',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ルアーフィッシング',
            description: '玄界灘でのルアーフィッシングプラン',
          },
        },
      ],
    },
  }

  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
                var config = {
                  kitId: 'hdf7hnv',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

