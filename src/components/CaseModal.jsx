import { useEffect } from 'react'

export default function CaseModal({ caseData, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-16 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-950 border border-zinc-700 rounded-xl w-full max-w-2xl">
        {/* Header */}
        <div className="border-b border-zinc-800 px-8 py-6 flex items-start justify-between gap-4">
          <div>
            <span className="mono text-xs text-blue-400 uppercase tracking-widest">
              {caseData.tag}
            </span>
            <h2 className="mt-2 text-xl font-semibold text-white tracking-tight">
              {caseData.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 rounded transition-colors text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-7 space-y-8">
          <ReportSection label="Objective">
            <p className="text-zinc-400 text-sm leading-relaxed">{caseData.objective}</p>
          </ReportSection>

          <ReportSection label="Methodology">
            <ol className="space-y-3">
              {caseData.methodology.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                  <span className="mono text-xs text-blue-500 shrink-0 mt-0.5 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </ReportSection>

          <ReportSection label="Tools Used">
            <div className="flex flex-wrap gap-2">
              {caseData.tools.map((tool) => (
                <span
                  key={tool}
                  className="mono text-xs px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Findings">
            <p className="text-zinc-400 text-sm leading-relaxed">{caseData.findings}</p>
          </ReportSection>

          <ReportSection label="Conclusion">
            <p className="text-zinc-400 text-sm leading-relaxed">{caseData.conclusion}</p>
          </ReportSection>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 px-8 py-4 rounded-b-xl bg-zinc-900/50">
          <p className="mono text-xs text-zinc-600">
            ⚠ Academic exercise only. No real individuals or organizations were investigated.
          </p>
        </div>
      </div>
    </div>
  )
}

function ReportSection({ label, children }) {
  return (
    <div>
      <h3 className="mono text-xs text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-zinc-800">
        {label}
      </h3>
      {children}
    </div>
  )
}
