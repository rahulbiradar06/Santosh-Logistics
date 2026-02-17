import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, Clock, Menu, X, ChevronRight } from 'lucide-react'
import logoImg from '../assets/Logo/logo.png'
import { COMPANY, NAV_LINKS, OFFICES } from '@/data/siteData'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Always use dark text for better visibility
  const lightText = false

  return (
    <div className="font-sans text-base leading-7 antialiased">
      {/* ── Top contact bar ── */}
      <div className="hidden md:block bg-secondary text-white/90 text-xs">
        <div className="container-xl flex items-center justify-between py-1.5">
          <div className="flex items-center gap-5">
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition">
              <Mail className="h-3.5 w-3.5" /> {COMPANY.email}
            </a>
            <a href={COMPANY.phones[0].href} className="inline-flex items-center gap-1.5 hover:text-white transition">
              <Phone className="h-3.5 w-3.5" /> {COMPANY.phones[0].label}
            </a>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {COMPANY.hours.weekday}
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : isHome
              ? 'bg-black/10 backdrop-blur-sm'
              : 'bg-white shadow-sm'
        }`}
      >
        <nav className="container-xl flex items-center justify-between py-3" aria-label="Primary">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logoImg}
              alt="Santosh Logistics Logo"
              className={`h-12 md:h-14 w-auto object-contain rounded ${
                lightText ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]' : ''
              }`}
            />
            <div className="leading-tight">
              <span className={`block text-base font-bold tracking-wide ${lightText ? 'text-white' : 'text-foreground'}`}>
                SANTOSH LOGISTICS
              </span>
              <span className={`hidden sm:block text-[11px] tracking-wider uppercase ${lightText ? 'text-white/70' : 'text-foreground/50'}`}>
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className={`hidden lg:flex items-center gap-1 text-sm font-medium ${lightText ? 'text-white/90' : 'text-foreground/80'}`}>
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`relative px-3.5 py-2 rounded-lg transition-colors ${
                      active
                        ? lightText
                          ? 'text-white bg-white/15'
                          : 'text-primary bg-accent/40'
                        : lightText
                          ? 'hover:text-white hover:bg-white/10'
                          : 'hover:text-primary hover:bg-accent/30'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.phones[0].href}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                lightText
                  ? 'bg-white text-primary hover:bg-white/90 shadow-md'
                  : 'bg-primary text-white hover:bg-primary/90 shadow-sm'
              }`}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 transition ${
              lightText ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
            }`}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* ── Mobile menu panel ── */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-border bg-white">
            <div className="container-xl py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const active = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    onClick={closeMenu}
                    to={link.to}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition ${
                      active ? 'bg-accent/40 text-primary' : 'hover:bg-muted text-foreground/80'
                    }`}
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 opacity-40" />
                  </Link>
                )
              })}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={COMPANY.phones[0].href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground"
                >
                  <Mail className="h-4 w-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="min-h-screen">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-secondary text-white/90">
        {/* Top section */}
        <div className="container-xl py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={logoImg} alt="Logo" className="h-10 w-auto rounded" />
                <span className="text-lg font-bold text-white tracking-wide">SANTOSH LOGISTICS</span>
              </Link>
              <p className="text-white/60 text-sm mb-5">{COMPANY.tagline}</p>
              <p className="text-white/50 text-xs leading-relaxed">
                {COMPANY.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition">
                      <ChevronRight className="h-3.5 w-3.5" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Offices</h3>
              <ul className="space-y-3 text-sm text-white/60">
                {OFFICES.filter((o) => o.phones).map((o) => (
                  <li key={o.name}>
                    <a href={o.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      <span className="font-medium text-white/80">{o.name}</span>
                      <br />
                      <span className="text-xs">{o.city}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 text-white/60 hover:text-white transition">
                    <Mail className="h-4 w-4 shrink-0" /> {COMPANY.email}
                  </a>
                </li>
                {COMPANY.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="inline-flex items-center gap-2 text-white/60 hover:text-white transition">
                      <Phone className="h-4 w-4 shrink-0" /> {p.label}
                    </a>
                  </li>
                ))}
                <li className="inline-flex items-center gap-2 text-white/60">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>{COMPANY.hours.weekday}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-xl py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <div>© {new Date().getFullYear()} {COMPANY.name} All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link className="hover:text-white/70 transition" to="/privacy">Privacy Policy</Link>
              <Link className="hover:text-white/70 transition" to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
