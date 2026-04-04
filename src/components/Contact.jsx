import { useFetch } from '../hooks/useFetch'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const { data: profile, loading } = useFetch('/profile')

  if (loading) return <section id="contact" className="py-28" />

  const { contact } = profile

  return (
    <section id="contact" className="py-28 border-t border-zinc-800/60 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Get In Touch" title="Contact" />

        <div className="mt-14 max-w-md">
          <p className="text-zinc-400 leading-relaxed text-sm mb-10">
            I am currently seeking internship opportunities and junior analyst roles in
            cybersecurity and threat intelligence. If my profile is relevant to your team,
            I would welcome a conversation.
          </p>

          <div className="space-y-1">
            <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <ContactRow label="LinkedIn" value={contact.linkedin} href={`https://${contact.linkedin}`} />
            <ContactRow label="GitHub" value={contact.github} href={`https://${contact.github}`} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href }) {
  return (
    <div className="flex items-center gap-6 py-4 border-b border-zinc-800">
      <span className="mono text-xs text-zinc-600 uppercase tracking-widest w-16 shrink-0">
        {label}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
      >
        {value}
      </a>
    </div>
  )
}
