import { Mail, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks'

/* ─── Configuration ─── */
// Replace with your real email address when ready:
const CONTACT_EMAIL: string | null = null // e.g. 'hello@nexlystudio.com'

// Replace with your real social links when ready:
const SOCIAL_LINKS: { label: string; href: string | null; icon: string }[] = [
  // { label: 'Discord', href: 'https://discord.gg/your-invite', icon: 'discord' },
  // { label: 'Twitter / X', href: 'https://x.com/nexlystudio', icon: 'twitter' },
  // { label: 'GitHub', href: 'https://github.com/nexlystudio', icon: 'github' },
]

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-accent-primary/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="w-16 h-16 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl flex items-center justify-center text-accent-primary mx-auto mb-8">
            <Mail size={28} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Masz pomysł?{' '}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Stwórzmy coś przydatnego.
            </span>
          </h2>

          <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
            Pytania, feedback czy pomysł na przyszłą aplikację? Chętnie usłyszymy, co masz do powiedzenia.
          </p>

          {CONTACT_EMAIL ? (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-primary hover:bg-accent-secondary text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:-translate-y-0.5"
            >
              Napisz do nas
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-bg-card border border-border rounded-xl text-text-secondary">
              <Mail size={18} className="text-accent-primary" />
              <span className="text-sm">Adres e-mail zostanie dodany wkrótce</span>
            </div>
          )}

          {/* Social links — only rendered if any exist */}
          {SOCIAL_LINKS.filter(s => s.href).length > 0 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              {SOCIAL_LINKS.filter(s => s.href).map((link) => (
                <a
                  key={link.label}
                  href={link.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-border-hover rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
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
