'use client'

import { useState, useEffect } from 'react'
import { BlogPost } from '@/types/blog'
import { Calendar, Tag, Fish, Trophy, Waves } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categories: Record<string, { name: string; color: string }> = {
  'fishing-report': { name: '釣果レポート', color: 'bg-primary' },
  'news': { name: 'お知らせ', color: 'bg-accent-orange' },
  'tips': { name: '釣りのコツ', color: 'bg-accent-yellow' }
}

const defaultCategory = { name: 'その他', color: 'bg-gray-500' }

type TabType = 'all' | 'fishing-report' | 'news' | 'tips'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [activeTab, setActiveTab] = useState<TabType>('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        const data = await response.json()
        console.log('📊 取得したデータ:', data.contents)
        data.contents.forEach((post: BlogPost) => {
          console.log(`📝 記事: ${post.title} - カテゴリ: "${post.category}"`)
        })
        setPosts(data.contents)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // カテゴリを正規化するヘルパー関数
  const normalizeCategory = (category: string | string[] | undefined): string => {
    if (!category) return ''
    return Array.isArray(category) ? category[0] || '' : category
  }

  // 各タブの投稿数をカウント
  const fishingReportCount = posts.filter(p => {
    const cat = normalizeCategory(p.category)
    return cat === 'fishing-report' || cat === '釣果レポート'
  }).length

  const newsCount = posts.filter(p => {
    const cat = normalizeCategory(p.category)
    return cat === 'news'
  }).length

  const tipsCount = posts.filter(p => {
    const cat = normalizeCategory(p.category)
    return cat === 'tips'
  }).length

  const filteredPosts = posts.filter((post) => {
    const category = normalizeCategory(post.category)

    console.log(`🔍 フィルタリング: "${post.title}" - カテゴリ: "${category}" - activeTab: "${activeTab}"`)

    if (activeTab === 'all') return true
    if (activeTab === 'fishing-report') {
      const match = category === 'fishing-report' || category === '釣果レポート'
      console.log(`  → fishing-report チェック: ${match}`)
      return match
    }
    if (activeTab === 'news') {
      const match = category === 'news'
      console.log(`  → news チェック: ${match}`)
      return match
    }
    if (activeTab === 'tips') {
      const match = category === 'tips'
      console.log(`  → tips チェック: ${match}`)
      return match
    }
    return true
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-body pt-20">
        {/* Hero Section */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pt-16 pb-8 relative">
          <div className="absolute top-10 right-20 w-96 h-96 bg-pop-orange/20 rounded-full blur-[100px] opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-pop-yellow/20 rounded-full blur-[80px] opacity-20 -z-10"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-white border border-slate-200 text-pop-orange text-xs font-mono font-bold tracking-widest rounded shadow-sm">
                FISHING BLOG
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-pop-orange/50 to-transparent"></span>
            </div>

            <h1 className="text-navy-deep text-4xl md:text-6xl font-serif font-black leading-tight tracking-tight drop-shadow-sm">
              釣果情報・お知らせ
            </h1>

            <p className="text-slate-muted mt-4 max-w-3xl text-sm md:text-base leading-relaxed pl-6 border-l-4 border-pop-orange font-medium">
              <strong className="text-navy-deep">釣果レポート</strong>、お知らせ、釣りのコツなど<br className="hidden md:block"/>
              海龍丸からの最新情報をお届けします。
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-8">
          <div className="flex gap-3 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 font-bold text-sm transition-all relative ${
                activeTab === 'all'
                  ? 'text-navy-deep border-b-2 border-navy-deep'
                  : 'text-slate-500 hover:text-navy-deep'
              }`}
            >
              すべて
              <span className="ml-2 text-xs bg-slate-200 px-2 py-0.5 rounded-full">
                {posts.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('fishing-report')}
              className={`px-6 py-3 font-bold text-sm transition-all relative ${
                activeTab === 'fishing-report'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-slate-500 hover:text-primary'
              }`}
            >
              釣果情報
              <span className="ml-2 text-xs bg-slate-200 px-2 py-0.5 rounded-full">
                {fishingReportCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-3 font-bold text-sm transition-all relative ${
                activeTab === 'news'
                  ? 'text-accent-orange border-b-2 border-accent-orange'
                  : 'text-slate-500 hover:text-accent-orange'
              }`}
            >
              お知らせ
              <span className="ml-2 text-xs bg-slate-200 px-2 py-0.5 rounded-full">
                {newsCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`px-6 py-3 font-bold text-sm transition-all relative ${
                activeTab === 'tips'
                  ? 'text-accent-yellow border-b-2 border-accent-yellow'
                  : 'text-slate-500 hover:text-accent-yellow'
              }`}
            >
              釣りのコツ
              <span className="ml-2 text-xs bg-slate-200 px-2 py-0.5 rounded-full">
                {tipsCount}
              </span>
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-10 pb-20">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-slate-500">読み込み中...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">投稿がありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                // カテゴリを正規化
                const category = Array.isArray(post.category)
                  ? post.category[0]
                  : post.category

                return (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-navy-deep/30 hover:shadow-xl transition-all duration-200"
                >
                  {/* Image */}
                  {(post.images?.[0] || post.image) && (
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <Image
                        src={post.images?.[0]?.url || post.image!.url}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge on Image */}
                      {category && (
                        <div className="absolute top-4 right-4">
                          <span className={`${(categories[category] || defaultCategory).color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                            {(categories[category] || defaultCategory).name}
                          </span>
                        </div>
                      )}
                      {/* Multiple Images Indicator */}
                      {post.images && post.images.length > 1 && (
                        <div className="absolute bottom-4 right-4">
                          <span className="bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full">
                            +{post.images.length - 1}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-navy-deep mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* 釣果情報の場合の詳細表示 */}
                    {category === 'fishing-report' && (post.fish || post.weight || post.count || post.location) && (
                      <div className="space-y-2 mb-4 bg-slate-50 rounded-lg p-4">
                        {post.fish && (
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                              <Fish className="w-4 h-4 text-primary" />
                              <span className="font-mono text-xs">魚種</span>
                            </div>
                            <span className="font-bold text-navy-deep">{post.fish}</span>
                          </div>
                        )}
                        {post.weight && (
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                              <Trophy className="w-4 h-4 text-accent-orange" />
                              <span className="font-mono text-xs">重量</span>
                            </div>
                            <span className="font-bold text-navy-deep">{post.weight}</span>
                          </div>
                        )}
                        {post.count && (
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                              <Fish className="w-4 h-4 text-accent-yellow" />
                              <span className="font-mono text-xs">匹数</span>
                            </div>
                            <span className="font-bold text-navy-deep">{post.count}匹</span>
                          </div>
                        )}
                        {post.location && (
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                              <Waves className="w-4 h-4 text-pop-cyan" />
                              <span className="font-mono text-xs">釣り場</span>
                            </div>
                            <span className="font-bold text-navy-deep">{post.location}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
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
                )
              })}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
