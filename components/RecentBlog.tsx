import { client } from '@/lib/microcms'
import { BlogPost } from '@/types/blog'
import { Calendar, Tag, ArrowRight, Newspaper } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const categories: Record<string, { name: string; color: string }> = {
  'fishing-report': { name: '釣果レポート', color: 'bg-primary' },
  'news': { name: 'お知らせ', color: 'bg-accent-orange' },
  'tips': { name: '釣りのコツ', color: 'bg-accent-yellow' }
}

// デフォルトカテゴリー
const defaultCategory = { name: 'その他', color: 'bg-gray-500' }

export default async function RecentBlog() {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      orders: '-publishedAt',
      limit: 3,
    },
  })

  const recentPosts: BlogPost[] = data.contents

  return (
    <section id="blog" className="section-container bg-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="p-2 bg-primary/10 rounded-lg mr-3">
            <Newspaper className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text">
            最新ブログ
          </h2>
        </div>
        <p className="text-text-light mt-4 max-w-2xl mx-auto">
          釣果レポートやお知らせなど、最新情報をお届けします
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {recentPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white border-2 border-soft-dark rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
          >
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

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                {post.category && (
                  <span className={`${(categories[post.category] || defaultCategory).color} text-white text-xs font-bold px-2 py-1 rounded`}>
                    {(categories[post.category] || defaultCategory).name}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-text-light mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-text-light">
                <Calendar className="w-3 h-3" />
                <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('ja-JP')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          ブログ一覧を見る
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
