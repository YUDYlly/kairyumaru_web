import { Info } from 'lucide-react'

export default function Notice() {
  return (
    <section className="section-container bg-soft border-t border-soft-dark">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-accent-yellow p-6 rounded-2xl shadow-lg">
          <div className="flex items-start">
            <div className="p-2 bg-gradient-to-br from-accent-orange to-accent-yellow rounded-lg mr-4 flex-shrink-0">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-text mb-3">
                お客様へお願い
              </h3>
              <p className="text-text-light">
                ごみは各自お持ち帰り下さい。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

