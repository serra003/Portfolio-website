import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import SectionHeader from './SectionHeader'
import CaseModal from './CaseModal'

export default function Cases() {
  const { data: cases, loading } = useFetch('/cases')
  const [selected, setSelected] = useState(null)

  if (loading) return <section id="cases" className="py-28" />

  return (
    <section id="cases" className="py-28 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Investigations" title="Case Reports" />
        <p className="mt-3 text-sm text-zinc-500 max-w-lg">
          Academic exercises conducted in fictional environments. Each report documents
          methodology, tools, and findings in a format consistent with professional
          threat intelligence reporting.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div
              key={c.id}
              className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/30 hover:border-zinc-600 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="mono text-xs text-zinc-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mono text-xs text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded border border-blue-400/20">
                  {c.tag.split(' / ')[0]}
                </span>
              </div>

              <h3 className="font-semibold text-white text-base leading-snug mb-3">{c.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1">{c.summary}</p>

              <div className="mt-6 pt-5 border-t border-zinc-800">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.tools.slice(0, 3).map((t) => (
                    <span key={t} className="mono text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                  {c.tools.length > 3 && (
                    <span className="mono text-xs text-zinc-600">+{c.tools.length - 3}</span>
                  )}
                </div>

                <button
                  onClick={() => setSelected(c)}
                  className="w-full py-2.5 text-sm mono border border-zinc-700 rounded text-zinc-300 hover:bg-white hover:text-zinc-900 hover:border-white transition-all"
                >
                  View Report →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <CaseModal caseData={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
