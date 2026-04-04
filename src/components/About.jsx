import { useFetch } from '../hooks/useFetch'
import SectionHeader from './SectionHeader'

export default function About() {
  const { data: profile, loading } = useFetch('/profile')

  if (loading) return <section id="about" className="py-28" />

  return (
    <section id="about" className="py-28 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Background" title="About Me" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-5">
            {profile.about.map((para, i) => (
              <p key={i} className="text-zinc-400 leading-relaxed text-sm">
                {para}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            {profile.info.map(({ label, value }) => (
              <div
                key={label}
                className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/40"
              >
                <p className="mono text-xs text-zinc-500 uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-sm text-zinc-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
