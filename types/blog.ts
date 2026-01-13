export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'fishing-report' | 'news' | 'tips' | string | string[]
  image?: {
    url: string
    width?: number
    height?: number
  }
  images?: Array<{
    url: string
    width?: number
    height?: number
  }>
  tags?: string[]
  publishedAt?: string
  createdAt: string
  updatedAt: string
  // 釣果専用フィールド
  fish?: string // 魚種
  weight?: string // 重量
  count?: number // 匹数
  location?: string // 釣り場
}

export interface BlogCategory {
  id: string
  name: string
  color: string
}