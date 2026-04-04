import { useFetch } from '../hooks/useFetch'
import SectionHeader from './SectionHeader'

export default function Skills() {
  const { data: skills, loading } = useFetch('/skills')

  if (loading) return <section id="skills" className="py-28" />

  return (
    <section id="skills" className="py-28 border-t border-zinc-800/60 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Capabilities" title="Skills & Tools" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/30 hover:border-zinc-700 transition-colors"
            >
              <h3 className="mono text-xs text-blue-400 uppercase tracking-widest mb-5">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
