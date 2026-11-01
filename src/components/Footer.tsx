const YEAR = new Date().getFullYear()

const NAV_LINKS = [
  { label: 'Strona główna', href: '#home' },
  { label: 'Aplikacje', href: '#applications' },
  { label: 'O nas', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
]

const APP_LINKS = [
  { label: 'Nexly Fitcheck', href: '#applications' },
  { label: 'Nexly Nutrition', href: '#applications' },
]

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="inline-flex items-center gap-3 mb-4"
            >
              <img
                src="/images/nexly-logo.png"
                alt="Nexly Studio"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-lg font-semibold text-text-primary">Nexly Studio</span>
            </a>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Niezależne studio software tworzące nowoczesne aplikacje, które upraszczają codzienne zadania
              i zamieniają przydatne pomysły w cyfrowe doświadczenia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 tracking-wider uppercase">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 tracking-wider uppercase">
              Aplikacje
            </h4>
            <ul className="space-y-3">
              {APP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {YEAR} Nexly Studio. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <span>Stworzone z</span>
            <span className="text-accent-primary">♥</span>
            <span>przez Nexly Studio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
