import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '釣果情報・お知らせ - 海龍丸',
  description: '釣果レポート、お知らせ、釣りのコツなど、海龍丸からの最新情報をお届けします。'
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
