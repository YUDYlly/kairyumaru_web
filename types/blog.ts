export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'fishing-report' | 'news' | 'tips'
  image?: {
    url: string
    width?: number
    height?: number
  }
  tags?: string[]
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

export interface BlogCategory {
  id: string
  name: string
  color: string
}
