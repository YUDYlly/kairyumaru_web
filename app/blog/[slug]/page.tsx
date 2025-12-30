import { client } from '@/lib/microcms'
import { BlogPost } from '@/types/blog'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PageProps {
  params: { slug: string }
}

const categories: Record<string, { name: string; color: string }> = {
  'fishing-report': { name: '釣果レポート', color: 'bg-primary' },
  'news': { name: 'お知らせ', color: 'bg-accent-orange' },
  'tips': { name: '釣りのコツ', color: 'bg-accent-yellow' }
}

const defaultCategory = { name: 'その他', color: 'bg-gray-500' }

export const revalidate = 60

export async function generateStaticParams() {
  const data = await client.get({
    endpoint: 'blog',
    queries: { limit: 100 },
  })

  return data.contents.map((post: BlogPost) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const post = await client.get({
      endpoint: 'blog',
      contentId: params.slug,
    })

    return {
      title: `${post.title} - 海龍丸ブログ`,
      description: post.excerpt,
    }
  } catch {
    return {
      title: '記事が見つかりません - 海龍丸',
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  let post: BlogPost

  try {
    post = await client.get({
      endpoint: 'blog',
      contentId: params.slug,
    })
  } catch {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-soft pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            {post.category && (
              <span className={`${(categories[post.category] || defaultCategory).color} text-white text-sm font-bold px-4 py-2 rounded-full`}>
                {(categories[post.category] || defaultCategory).name}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-white/20 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative h-64 sm:h-96 bg-white rounded-lg overflow-hidden shadow-xl">
            <Image
              src={post.image.url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <div className="prose prose-lg max-w-none">
            <div
              className="whitespace-pre-wrap text-text-light leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-text mb-4 mt-8">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-text mb-3 mt-6">$2</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-text mb-2 mt-4">$3</h3>')
                  .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text">$1</strong>')
              }}
            />
          </div>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            ブログ一覧に戻る
          </Link>
        </div>
      </article>
    </main>
    <Footer />
    </>
  )
}
