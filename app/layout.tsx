import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '遊漁船 海龍丸 - 玄界灘での本格的な釣り',
  description: '遊漁船「海龍丸」の公式サイト。玄界灘での餌釣り、ルアーフィッシングなどお客様のあらゆるニーズに対応。七里ヶ瀬・壱岐・対馬方面・沖ノ島・汐巻・八里ヶ瀬等の遠方の釣場にも精通。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

