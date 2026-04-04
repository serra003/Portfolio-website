import { useFetch } from '../hooks/useFetch'

export default function Hero() {
  const { data: profile, loading } = useFetch('/profile')

  if (loading) return <section className="min-h-screen" id="home" />

  return (
    <section id="home" className="min-h-screen flex items-center pt-14 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Blue glow top-left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-28 relative z-10 w-full">
        <p className="mono text-xs text-blue-400 tracking-widest uppercase mb-6">
          {profile.tagline}
        </p>

        <h1 className="text-6xl font-semibold tracking-tight text-white leading-tight mb-4">
          {profile.name}
        </h1>

        <p className="text-lg text-zinc-400 font-light mb-8 max-w-xl">{profile.title}</p>

        <p className="text-zinc-500 leading-relaxed max-w-lg mb-12 text-sm">{profile.summary}</p>

        <div className="flex gap-3 mb-20">
          <a
            href={`https://${profile.contact.github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-sm text-zinc-300 rounded hover:border-zinc-500 hover:text-white transition-colors mono"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href={`https://${profile.contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-sm text-zinc-300 rounded hover:border-zinc-500 hover:text-white transition-colors mono"
          >
            <LinkedinIcon /> LinkedIn
          </a>
        </div>

        <div className="flex gap-px border border-zinc-800 rounded-lg overflow-hidden w-fit">
          {profile.stats.map(({ n, label }) => (
            <div key={label} className="bg-zinc-900 px-8 py-5 text-center">
              <p className="text-2xl font-semibold text-white mono">{n}</p>
              <p className="mono text-xs text-zinc-500 mt-1 tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
