export default function SectionHeader({ eyebrow, title }) {
  return (
    <div>
      <p className="mono text-xs text-blue-400 tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
    </div>
  )
}
