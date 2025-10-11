import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-sans text-base leading-7">
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
        <nav className="container-xl flex items-center justify-between py-4" aria-label="Primary">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-wide text-foreground">
            <span className="inline-block h-3 w-3 rounded-sm bg-[--primary]"></span>
            <span className={`text-lg ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-foreground'}`}>
              SANTOSH LOGISTICS PVT. LTD.
            </span>
          </Link>

          {/* Middle: Links */}
          <ul className={`hidden md:flex items-center gap-6 text-sm ${!isScrolled && location.pathname === '/' ? 'text-white/90' : 'text-foreground/80'}`}>
            <li><Link className="hover:text-[--primary] transition" to="/">Home</Link></li>
            <li><Link className="hover:text-[--primary] transition" to="/about">About</Link></li>
            <li><Link className="hover:text-[--primary] transition" to="/services">Services</Link></li>
            <li><Link className="hover:text-[--primary] transition" to="/clients">Clients</Link></li>
            <li><Link className="hover:text-[--primary] transition" to="/contact">Contact</Link></li>
          </ul>

          {/* Right: CTA */}
          {/* <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-[--primary] px-4 py-2 text-sm font-medium text-[--primary-foreground] shadow-sm hover:opacity-90"
            >
              Get a Quote
            </Link>
            <Link
              to="/track"
              className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium border ${
                !isScrolled && location.pathname === '/' 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-border text-foreground hover:bg-muted'
              }`}
            >
              Track Shipment
            </Link>
          </div> */}

          {/* Mobile: menu button */}
          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm ${
              !isScrolled && location.pathname === '/' 
                ? 'border-white/20 text-white' 
                : 'border-border text-foreground'
            }`}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border bg-white">
            <div className="container-xl py-3 space-y-2">
              <Link onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" to="/">Home</Link>
              <Link onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" to="/about">About</Link>
              <Link onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" to="/services">Services</Link>
              <Link onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" to="/clients">Clients</Link>
              <Link onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" to="/contact">Contact</Link>
              {/* <div className="flex items-center gap-2 pt-2">
                <Link to="/contact" className="flex-1 inline-flex items-center justify-center rounded-md bg-[--primary] px-4 py-2 text-sm font-medium text-[--primary-foreground]">
                  Get a Quote
                </Link>
                <Link to="/track" className="flex-1 inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground">
                  Track Shipment
                </Link>
              </div> */}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo + Tagline */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 font-semibold tracking-wide text-foreground mb-4">
                <span className="inline-block h-3 w-3 rounded-sm bg-[--primary]"></span>
                <span className="text-lg">SANTOSH LOGISTICS</span>
              </Link>
              <p className="text-foreground/70 mb-4">Prompt Delivery of Material.</p>
              <div className="flex gap-4">
                <a href="mailto:santoshlog.waluj@gmail.com" className="text-foreground/70 hover:text-[--primary]">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a href="tel:+919225304131" className="text-foreground/70 hover:text-[--primary]">
                  <span className="sr-only">Phone</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link className="hover:text-[--primary]" to="/about">About Us</Link></li>
                <li><Link className="hover:text-[--primary]" to="/services">Services</Link></li>
                <li><Link className="hover:text-[--primary]" to="/clients">Our Clients</Link></li>
                <li><Link className="hover:text-[--primary]" to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>304/ Kaveri Co-op Hsg. Soc.</li>
                <li>Plot No. 73, Sec 05</li>
                <li>Sanpada, Navi Mumbai - 400705</li>
                <li>Maharashtra, India</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
            <div>© {new Date().getFullYear()} Santosh Logistics Pvt. Ltd. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link className="hover:text-[--primary]" to="/privacy">Privacy Policy</Link>
              <Link className="hover:text-[--primary]" to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
