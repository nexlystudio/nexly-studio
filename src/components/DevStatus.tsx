import { useScrollReveal } from '../hooks'
import { Shirt, Apple } from 'lucide-react'

/* ─── Edit statuses here ─── */
type AppStatus = 'in-development' | 'testing' | 'available-soon' | 'available-now'

interface StatusEntry {
  name: string
  status: AppStatus
  icon: React.ReactNode
}

const APP_STATUSES: StatusEntry[] = [
  { name: 'Nexly Fitcheck',   status: 'in-development', icon: <Shirt size={18} /> },
  { name: 'Nexly Nutrition',  status: 'available-now',  icon: <Apple size={18} /> },
]

const STATUS_CONFIG: Record<AppStatus, { label: string; color: string; bg: string; dot: string }> = {
  'in-development': { label: 'W trakcie rozwoju',      color: 'text-yellow-400', bg: 'bg-yellow-400/10', dot: 'bg-yellow-400' },
  'testing':        { label: 'Testowanie',              color: 'text-blue-400',   bg: 'bg-blue-400/10',   dot: 'bg-blue-400' },
  'available-soon': { label: 'Wkrótce dostępna',        color: 'text-emerald-400',bg: 'bg-emerald-400/10',dot: 'bg-emerald-400' },
  'available-now':  { label: 'Pierwsza wersja wydana',  color: 'text-green-400',  bg: 'bg-green-400/10',  dot: 'bg-green-400' },
}

export default function DevStatus() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section className="relative py-20 md:py-28 bg-bg-secondary">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Status <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">rozwoju</span>
          </h2>
          <p className="text-text-secondary text-center mb-10">
            Aktualny stan prac nad naszymi aplikacjami.
          </p>

          <div className="space-y-4">
            {APP_STATUSES.map((app) => {
              const cfg = STATUS_CONFIG[app.status]
              return (
                <div
                  key={app.name}
                  className="flex items-center justify-between bg-bg-card border border-border rounded-xl px-6 py-4 hover:border-border-hover transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-accent-primary">{app.icon}</span>
                    <span className="font-medium text-text-primary">{app.name}</span>
                  </div>
                  <span className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full ${cfg.bg} ${cfg.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
                    {cfg.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
