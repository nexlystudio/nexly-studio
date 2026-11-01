import { Users, Lightbulb, RefreshCw } from 'lucide-react'
import { useScrollReveal } from '../hooks'

const FEATURES = [
  {
    icon: <Users size={28} />,
    title: 'Tworzone z myślą o ludziach',
    description:
      'Zaczynamy od codziennych problemów i tworzymy narzędzia, które są łatwe do zrozumienia i przyjemne w użyciu.',
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Design z celem',
    description:
      'Każdy interfejs, interakcja i funkcja powinna mieć jasny powód, by istnieć.',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'Ciągłe doskonalenie',
    description:
      'Wierzymy, że świetne oprogramowanie rośnie dzięki feedbackowi, eksperymentom i nieustannemu doskonaleniu.',
  },
]

function FeatureCard({ feature, index }: { feature: typeof FEATURES[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`group relative bg-bg-card border border-border rounded-2xl p-8 transition-all duration-700 hover:border-border-hover hover:shadow-xl hover:shadow-accent-primary/5 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      <div className="relative">
        <div className="w-14 h-14 bg-accent-primary/10 border border-accent-primary/20 rounded-xl flex items-center justify-center text-accent-primary mb-6 group-hover:bg-accent-primary/15 transition-colors duration-300">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
        <p className="text-text-secondary leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

export default function WhyNexly() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section className="relative py-28 md:py-36 bg-bg-secondary">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Małe pomysły.{' '}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Znaczący wpływ.
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            W Nexly Studio wierzymy, że oprogramowanie powinno pracować dla ludzi — nie odwrotnie.
            Skupiamy się na tworzeniu aplikacji, które są proste w obsłudze, świetnie wyglądają
            i rozwiązują problemy, które naprawdę mają znaczenie w codziennym życiu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
