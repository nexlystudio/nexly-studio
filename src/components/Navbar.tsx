import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../hooks'

const NAV_LINKS = [
  { label: 'Strona główna', href: '#home' },
  { label: 'Aplikacje', href: '#applications' },
  { label: 'O nas', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/nexly-logo.png"
            alt="Nexly Studio"
            className="h-9 w-9 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-semibold text-text-primary tracking-tight">
            Nexly Studio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#applications"
            onClick={(e) => handleNavClick(e, '#applications')}
            className="text-sm font-medium px-5 py-2.5 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Odkryj aplikacje
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-18 bg-bg-primary/95 backdrop-blur-xl transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 pt-12 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#applications"
            onClick={(e) => handleNavClick(e, '#applications')}
            className="mt-4 text-base font-medium px-8 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
          >
            Odkryj aplikacje
          </a>
        </div>
      </div>
    </header>
  )
}
