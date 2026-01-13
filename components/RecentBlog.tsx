import { client } from '@/lib/microcms'
import { BlogPost } from '@/types/blog'
import { Calendar, ArrowRight, Newspaper } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FloatingFish from './FloatingFish'

const categories: Record<string, { name: string; color: string }> = {
  'fishing-report': { name: '釣果レポート', color: 'bg-ocean-blue' },
  'news': { name: 'お知らせ', color: 'bg-accent-orange' },
  'tips': { name: '釣りのコツ', color: 'bg-accent-gold' }
}

// デフォルトカテゴリー
const defaultCategory = { name: 'その他', color: 'bg-slate-muted' }

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
    <section id="blog" className="section-container bg-white relative overflow-hidden">
      {/* Decorative Fish */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingFish
          src="/images/illustration/fish_ebi.png"
          alt="エビ"
          width={110}
          height={110}
          className="top-10 left-[-10px] md:left-20 opacity-60"
          direction="left"
          delay={1.5}
          />
      </div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-deep mb-4">
          釣果情報・お知らせ
        </h2>
        <p className="text-lg text-slate-muted mt-4 max-w-2xl mx-auto">
          釣果レポートやお知らせなど、最新情報をお届けします
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {recentPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            {(post.images?.[0] || post.image) && (
              <div className="relative h-48 md:h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={post.images?.[0]?.url || post.image!.url}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Multiple Images Indicator */}
                {post.images && post.images.length > 1 && (
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-navy-deep/80 text-white text-xs font-medium px-2 py-1 rounded-md">
                      +{post.images.length - 1}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                {post.category && (() => {
                  const categoryKey = Array.isArray(post.category) ? post.category[0] : post.category
                  const categoryData = categories[categoryKey] || defaultCategory
                  return (
                    <span className={`${categoryData.color} text-white text-xs font-medium px-2 py-1 rounded-md`}>
                      {categoryData.name}
                    </span>
                  )
                })()}
              </div>

              <h3 className="text-lg font-bold text-navy-deep mb-2 group-hover:text-ocean-blue transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-slate-muted mb-4 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-muted">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('ja-JP')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-soft"
        >
          一覧を見る
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
