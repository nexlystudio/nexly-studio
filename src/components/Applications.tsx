import { Shirt, CalendarDays, Heart, Sparkles, LayoutGrid, Palette, Apple, BarChart3, ScanBarcode, BookOpen, Scale, Target, CalendarCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks'

/* ─── Status config ─── */
type AppStatus = 'in-development' | 'testing' | 'available-soon' | 'available-now'

const STATUS_MAP: Record<AppStatus, { label: string; color: string; dot: string }> = {
  'in-development': { label: 'W trakcie rozwoju', color: 'text-yellow-400', dot: 'bg-yellow-400' },
  'testing':        { label: 'Testowanie',        color: 'text-blue-400',   dot: 'bg-blue-400' },
  'available-soon': { label: 'Wkrótce dostępna',  color: 'text-emerald-400',dot: 'bg-emerald-400' },
  'available-now':  { label: 'Dostępna',           color: 'text-green-400',  dot: 'bg-green-400' },
}

/* ─── App data ─── */
interface AppData {
  name: string
  category: string
  tagline: string
  description: string
  label: string
  status: AppStatus
  icon: string | null
  features: { icon: React.ReactNode; text: string }[]
  cta: string
  ctaHref: string | null
}

const APPS: AppData[] = [
  {
    name: 'Nexly Fitcheck',
    category: 'Lifestyle / Moda',
    tagline: 'Twórz lepsze stylizacje z ubraniami, które już masz.',
    description:
      'Nexly Fitcheck pomaga organizować garderobę, odkrywać kombinacje ubrań, planować codzienne stylizacje i znajdować nowe sposoby na noszenie tego, co już posiadasz. Utrzymuj porządek w szafie i spraw, by codzienne ubieranie się było odrobinę łatwiejsze.',
    label: 'TWÓJ STYL, UPORZĄDKOWANY',
    status: 'in-development',
    icon: '/images/fitcheck-icon.png',
    features: [
      { icon: <Shirt size={16} />, text: 'Cyfrowa szafa na Twoje ubrania' },
      { icon: <Sparkles size={16} />, text: 'Tworzenie i pomysły na stylizacje' },
      { icon: <LayoutGrid size={16} />, text: 'Planowanie codziennych outfitów' },
      { icon: <CalendarDays size={16} />, text: 'Kalendarz planowanych stylizacji' },
      { icon: <Heart size={16} />, text: 'Ulubione i organizacja garderoby' },
      { icon: <Palette size={16} />, text: 'Prosty interfejs do codziennego użytku' },
    ],
    cta: 'Poznaj Fitcheck',
    ctaHref: null,
  },
  {
    name: 'Nexly Nutrition',
    category: 'Zdrowie / Żywienie',
    tagline: 'Zrozum swoje odżywianie. Śledź postępy.',
    description:
      'Nexly Nutrition ułatwia codzienne śledzenie żywienia. Monitoruj kalorie, białko, węglowodany, tłuszcze i inne składniki, organizuj posiłki, zapisuj własne przepisy i obserwuj postępy w realizacji celów żywieniowych — wszystko w jednym przejrzystym miejscu.',
    label: 'TWOJE ŻYWIENIE, UPROSZCZONE',
    status: 'in-development',
    icon: null,
    features: [
      { icon: <Apple size={16} />, text: 'Dzienny monitoring kalorii i makroskładników' },
      { icon: <BookOpen size={16} />, text: 'Dziennik posiłków z podziałem na kategorie' },
      { icon: <ScanBarcode size={16} />, text: 'Wyszukiwanie produktów po kodzie kreskowym' },
      { icon: <BarChart3 size={16} />, text: 'Własne produkty i osobiste przepisy' },
      { icon: <Scale size={16} />, text: 'Śledzenie wagi i historia postępów' },
      { icon: <CalendarCheck size={16} />, text: 'Kalendarz z dzienniymi podsumowaniami' },
      { icon: <Target size={16} />, text: 'Spersonalizowane cele żywieniowe' },
    ],
    cta: 'Poznaj Nutrition',
    ctaHref: null,
  },
]

/* ─── Nutrition CSS icon fallback ─── */
function NutritionIcon() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent-primary via-purple-600 to-accent-secondary rounded-2xl flex items-center justify-center">
      <Apple size={40} className="text-white/90" />
    </div>
  )
}

/* ─── App Card ─── */
function AppCard({ app, index }: { app: AppData; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)
  const status = STATUS_MAP[app.status]

  return (
    <div
      ref={ref}
      className={`group relative bg-bg-card border border-border rounded-2xl overflow-hidden transition-all duration-700 hover:border-border-hover hover:shadow-2xl hover:shadow-accent-primary/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card inner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative p-8 md:p-10">
        {/* Top row: label + status */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-accent-primary uppercase">
            {app.label}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${status.color}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
            {status.label}
          </span>
        </div>

        {/* Icon + info */}
        <div className="flex gap-6 mb-6">
          <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg shadow-black/30">
            {app.icon ? (
              <img
                src={app.icon}
                alt={`${app.name} — ikona aplikacji`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <NutritionIcon />
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-1">{app.name}</h3>
            <p className="text-sm text-text-muted mb-2">{app.category}</p>
            <p className="text-base font-medium text-accent-secondary">{app.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed mb-8">{app.description}</p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {app.features.map((f, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-text-secondary">
              <span className="mt-0.5 text-accent-primary flex-shrink-0">{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        {app.ctaHref ? (
          <a
            href={app.ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary/10 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary hover:text-white font-medium rounded-full transition-all duration-300"
          >
            {app.cta}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-bg-secondary border border-border text-text-muted font-medium rounded-full cursor-default">
            {app.cta} — wkrótce
          </span>
        )}
      </div>
    </div>
  )
}

/* ─── Applications Section ─── */
export default function Applications() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="applications" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Poznaj nasze <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">aplikacje</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Starannie zaprojektowane narzędzia stworzone wokół prawdziwych, codziennych potrzeb.
          </p>
        </div>

        {/* App cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {APPS.map((app, i) => (
            <AppCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
