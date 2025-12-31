'use client'

import { client } from '@/lib/microcms'
import { BlogPost } from '@/types/blog'
import { Calendar, Tag, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

interface PageProps {
  params: { slug: string }
}

const categories: Record<string, { name: string; color: string }> = {
  'fishing-report': { name: '釣果レポート', color: 'bg-primary' },
  'news': { name: 'お知らせ', color: 'bg-accent-orange' },
  'tips': { name: '釣りのコツ', color: 'bg-accent-yellow' }
}

const defaultCategory = { name: 'その他', color: 'bg-gray-500' }

// Image Gallery Component
function ImageGallery({ images }: { images: Array<{ url: string; width?: number; height?: number }> }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev))
  }

  if (images.length === 0) return null

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div
        className="relative h-64 sm:h-96 bg-white rounded-lg overflow-hidden shadow-xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={images[currentIndex].url}
          alt={`画像 ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority={currentIndex === 0}
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
              aria-label="前の画像"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex === images.length - 1}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all ${
                currentIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
              aria-label="次の画像"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm font-bold px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? 'border-primary shadow-lg' : 'border-gray-300 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={image.url}
                alt={`サムネイル ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function BlogPostPage({ params }: PageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetch(`/api/blog/${params.slug}`)
        if (!data.ok) {
          throw new Error('Failed to fetch')
        }
        const postData = await data.json()
        setPost(postData)
      } catch (error) {
        console.error('Failed to fetch post:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-soft pt-20 flex items-center justify-center">
          <p className="text-slate-500">読み込み中...</p>
        </main>
        <Footer />
      </>
    )
  }

  if (!post) {
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

      {/* Featured Image(s) */}
      {post.images && post.images.length > 0 ? (
        <ImageGallery images={post.images} />
      ) : post.image ? (
        <ImageGallery images={[post.image]} />
      ) : null}

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
