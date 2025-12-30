import type { ReactNode } from 'react'

interface SectionTitleProps {
  icon: ReactNode
  title: string
  description?: string
}

export default function SectionTitle({ icon, title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center mb-4">
        <div className="text-silver mr-3">{icon}</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-silver">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-silver-light mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

