import { useScrollReveal } from '../hooks'

export default function StudioIntro() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-primary/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Logo visual */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-primary/20 rounded-3xl blur-2xl scale-150" />
              <div className="relative w-24 h-24 bg-bg-card border border-border rounded-3xl flex items-center justify-center shadow-2xl shadow-accent-primary/10">
                <img
                  src="/images/nexly-logo.png"
                  alt="Nexly Studio"
                  className="w-16 h-16 rounded-xl object-contain"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Stworzone z ciekawości.{' '}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Napędzane pomysłami.
            </span>
          </h2>

          {/* Text */}
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              Nexly Studio to niezależny projekt software skupiony na zamienianiu praktycznych pomysłów
              w użyteczne produkty cyfrowe. Od organizowania garderoby po zrozumienie swojego żywienia —
              naszym celem jest tworzenie aplikacji, które naturalnie wpisują się w codzienne życie.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Wierzymy, że dobre oprogramowanie nie musi być skomplikowane. Musi być przemyślane,
              dostępne i stworzone z jasnym celem.
            </p>
            <p className="text-xl font-semibold text-text-primary mt-8">
              To dopiero początek.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center mt-12">
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
          </div>
        </div>
      </div>

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
