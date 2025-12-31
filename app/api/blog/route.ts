import { NextResponse } from 'next/server'
import { client } from '@/lib/microcms'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const data = await client.get({
      endpoint: 'blog',
      queries: {
        orders: '-publishedAt',
        limit: 100,
      },
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
