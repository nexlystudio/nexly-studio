import { ArrowRight, ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks'

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-accent-primary/20 via-accent-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-accent-primary/40 rounded-full animate-float-slow" />
        <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-accent-secondary/30 rounded-full animate-float-medium" />
        <div className="absolute bottom-[35%] left-[25%] w-1 h-1 bg-purple-400/30 rounded-full animate-float-fast" />
        <div className="absolute top-[60%] right-[15%] w-3 h-3 border border-accent-primary/20 rounded-sm rotate-45 animate-float-medium" />
        <div className="absolute top-[15%] right-[35%] w-4 h-4 border border-purple-500/15 rounded-full animate-float-slow" />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-accent-primary/10 border border-accent-primary/20 rounded-full">
          <div className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
          <span className="text-xs font-medium text-accent-primary tracking-widest uppercase">
            Niezależne studio software
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
          <span className="text-text-primary">Technologia zaprojektowana,</span>
          <br />
          <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-purple-400 bg-clip-text text-transparent">
            by ułatwiać życie.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          Nexly Studio tworzy nowoczesne, intuicyjne aplikacje, które upraszczają codzienne zadania,
          poprawiają produktywność i zamieniają przydatne pomysły w&nbsp;prawdziwe cyfrowe doświadczenia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#applications"
            onClick={(e) => handleClick(e, '#applications')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-primary hover:bg-accent-secondary text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:-translate-y-0.5"
          >
            Odkryj nasze aplikacje
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            onClick={(e) => handleClick(e, '#about')}
            className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-border-hover text-text-secondary hover:text-text-primary font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Poznaj Nexly Studio
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-text-muted" />
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-14px) }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite }
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
