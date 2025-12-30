import { client } from '@/lib/microcms'
import { BlogPost } from '@/types/blog'
import { Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ブログ - 海龍丸',
  description: '釣果レポート、お知らせ、釣りのコツなど、海龍丸からの最新情報をお届けします。'
}

const categories: Record<string, { name: string; color: string }> = {
  'fishing-report': { name: '釣果レポート', color: 'bg-primary' },
  'news': { name: 'お知らせ', color: 'bg-accent-orange' },
  'tips': { name: '釣りのコツ', color: 'bg-accent-yellow' }
}

const defaultCategory = { name: 'その他', color: 'bg-gray-500' }

export const revalidate = 60 // 60秒ごとに再生成

export default async function BlogPage() {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      orders: '-publishedAt',
      limit: 100,
    },
  })

  const posts: BlogPost[] = data.contents

  return (
    <>
      <Header />
      <main className="min-h-screen bg-soft pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            ブログ
          </h1>
          <p className="text-lg text-white/80">
            釣果レポート、お知らせ、釣りのコツなど最新情報をお届けします
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              {post.image && (
                <div className="relative h-48 bg-soft-dark overflow-hidden">
                  <Image
                    src={post.image.url}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  {post.category && (
                    <span className={`${(categories[post.category] || defaultCategory).color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {(categories[post.category] || defaultCategory).name}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-text-light text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-text-light">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('ja-JP')}</span>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{post.tags[0]}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
