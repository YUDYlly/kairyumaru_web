import { Info } from 'lucide-react'

export default function Notice() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 text-primary">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-thin text-navy-deep mb-2">
              お客様へお願い
            </h3>
            <p className="text-slate-600 font-medium">
              ごみは各自お持ち帰り下さい。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

