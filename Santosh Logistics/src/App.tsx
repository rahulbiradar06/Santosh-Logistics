import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="font-sans text-base leading-7">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border">
        <nav className="container-xl flex items-center justify-between py-3" aria-label="Primary">
          {/* Left: Logo */}
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-wide text-foreground">
            <span className="inline-block h-3 w-3 rounded-sm bg-[--primary]"></span>
            <span className="text-lg">SANTOSH LOGISTICS</span>
          </a>

          {/* Middle: Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm text-foreground/80">
            {/* <li><a className="hover:text-foreground transition" href="#home">Hero</a></li> */}
            <li><a className="hover:text-foreground transition" href="#who">Who are we</a></li>
            <li><a className="hover:text-foreground transition" href="#offer">What we offer</a></li>
            <li><a className="hover:text-foreground transition" href="#about">About us</a></li>
            <li><a className="hover:text-foreground transition" href="#contact">Contact us</a></li>
            {/* <li><a className="hover:text-foreground transition" href="#fleet">Fleet</a></li>
            <li><a className="hover:text-foreground transition" href="#coverage">Coverage</a></li> */}
          </ul>

          {/* Right: CTAs */}
          {/* <div className="hidden md:flex items-center gap-2">
            <a href="#join" className="inline-flex items-center rounded-md bg-[--primary] px-4 py-2 text-sm font-medium text-[--primary-foreground] shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--ring]">
              Join up
            </a>
            <a href="#login" className="inline-flex items-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
              Login
            </a>
          </div> */}
          {/* Mobile: menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-border bg-white px-3 py-2 text-sm"
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
              <a onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" href="#home">Hero</a>
              <a onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" href="#who">Who are we</a>
              <a onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" href="#offer">What we offer</a>
              <a onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" href="#about">About us</a>
              <a onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" href="#contact">Contact us</a>
              {/* <a onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" href="#fleet">Fleet</a>
              <a onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-muted rounded" href="#coverage">Coverage</a> */}
              {/* <div className="flex items-center gap-2 pt-2">
                <a href="#join" className="inline-flex items-center rounded-md bg-[--primary] px-4 py-2 text-sm font-medium text-[--primary-foreground]">Join up</a>
                <a href="#login" className="inline-flex items-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">Login</a>
              </div> */}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[100vh] grid">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-amber-100"></div>
        <div className="container-xl w-full h-full flex items-end pb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground max-w-5xl pl-1">
            SANTOSH LOGISTICS .
          </h1>
        </div>
      </section>

      {/* Who are we */}
      <section id="who" className="py-20 bg-white">
        <div className="container-xl grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who are we</h2>
            <p className="text-foreground/80 mb-4">We are a technology-led logistics partner focused on safe, on-time deliveries across India with transparent communication and live tracking.</p>
            <ul className="space-y-2 text-foreground/80">
              <li><strong>Mission:</strong> Reliable, technology-led logistics that powers customer growth.</li>
              <li><strong>Expertise:</strong> 15+ years in FTL/PTL, warehousing, and distribution.</li>
              <li><strong>Certifications:</strong> ISO 9001:2015; Compliant with safety and road transport norms.</li>
              <li><strong>Team:</strong> Experienced dispatch, ops, and driver partners trained on safety-first SOPs.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-6 bg-muted">
            <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Real-time GPS tracking and proactive alerts</li>
              <li>Strong network for pan-India coverage</li>
              <li>Modern fleet with strict maintenance cycles</li>
              <li>Dedicated customer support and SLAs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section id="offer" className="py-20 bg-accent/40">
        <div className="container-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Full-Truckload (FTL) Transport',
                body: 'Direct, point-to-point trucking for high-volume shipments with minimal handling and faster transit across corridors like Mumbai–Delhi and Chennai–Bengaluru.'
              },
              {
                title: 'Part-Truckload (PTL) / LTL',
                body: 'Optimized shared-capacity solutions to reduce freight costs while maintaining reliable delivery schedules and shipment visibility.'
              },
              {
                title: 'Warehousing & Distribution',
                body: 'Short- and long-term storage, inventory management, and city-wise distribution with barcode/scan and FIFO control.'
              },
              {
                title: 'Last-Mile Delivery',
                body: 'Urban delivery with route optimization for ecommerce, retail and spare parts, supporting COD and flexible time windows.'
              },
              {
                title: 'Cold Chain Logistics',
                body: 'Temperature-controlled transport and storage for pharma and perishables with continuous temperature logging.'
              },
              {
                title: 'Customs & Documentation',
                body: 'Support for e-way bills, permits, and compliance paperwork to ensure smooth interstate movement.'
              }
            ].map((s) => (
              <article key={s.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-foreground/80 text-sm">{s.body}</p>
              </article>
            ))}
          </div>
          <p className="sr-only">
            Keywords: logistics company India, transport services, freight forwarding, trucking, FTL, PTL, warehousing, last-mile delivery, supply chain, distribution, fleet, pan-India logistics
          </p>
        </div>
      </section>

      {/*
      Fleet (hidden for now)
      <section id="fleet" className="py-20 bg-white">
        ...
      </section>
      */}

      {/*
      Coverage (hidden for now)
      <section id="coverage" className="py-20 bg-accent/40">
        ...
      </section>
      */}

      {/* About us (detailed) */}
      <section id="about" className="py-20 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About us</h2>
          <p className="text-foreground/80 max-w-3xl">Since our inception, SANTOSH LOGISTICS has delivered dependable, on-time transport solutions across India. We combine operations excellence with modern technology to deliver visibility, reliability, and safety at scale.</p>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container-xl grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-foreground/80">
              <li><strong>Phone:</strong> <a className="text-[--primary] hover:underline" href="tel:+919000000000">+91 90000 00000</a></li>
              <li><strong>Email:</strong> <a className="text-[--primary] hover:underline" href="mailto:info@santoshlogistics.example">info@santoshlogistics.example</a></li>
              <li><strong>Address:</strong> <a className="text-[--primary] hover:underline" href="https://maps.google.com/?q=Logistics+Park+Mumbai" target="_blank" rel="noreferrer">123 Logistics Park, Mumbai, MH 400001</a></li>
              <li><strong>Hours:</strong> Mon–Sat: 9:00–19:00 IST</li>
            </ul>
          </div>
          <form className="rounded-lg border border-border p-6 bg-muted" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input id="name" name="name" required className="w-full rounded-md border border-input bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--ring]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required className="w-full rounded-md border border-input bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--ring]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" className="w-full rounded-md border border-input bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--ring]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-input bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--ring]"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[--primary] px-4 py-2 text-sm font-medium text-[--primary-foreground] hover:opacity-90">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-white">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
          <div>© {new Date().getFullYear()} SANTOSH LOGISTICS. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#coverage" className="hover:text-foreground">Coverage</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
