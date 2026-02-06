import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Award, Truck, MapPin, Users, Building2 } from 'lucide-react'
import bajajauto from '../assets/clients/bajajauto.png'
import maskpolymers from '../assets/clients/maskpolymers.jpeg'
import rooppolymers from '../assets/clients/rooppolymers.jpeg'
import minda from '../assets/clients/minda.png'
import kumar from '../assets/clients/kumar.jpeg'
import thackerbrothers from '../assets/clients/thackerbrothers.jpeg'
import varroc from '../assets/clients/varroc.png'
import endurance from '../assets/clients/endurance.jpeg'
import badve from '../assets/clients/bavde.jpeg'
import ClientsHero from '@/assets/clients/team2.png'
import { COMPANY, TESTIMONIALS } from '@/data/siteData'

const clients = [
  { name: 'Bajaj Auto Ltd.', logo: bajajauto },
  { name: 'Varroc Engineering', logo: varroc },
  { name: 'Endurance Technologies Pvt. Ltd.', logo: endurance },
  { name: 'Minda Sai Ltd.', logo: minda },
  { name: 'Badve Engineering', logo: badve },
  { name: 'Mask Polymers Pvt. Ltd.', logo: maskpolymers },
  { name: 'Roop Polymers Ltd.', logo: rooppolymers },
  { name: 'Kumar Elastomec Pvt. Ltd.', logo: kumar },
  { name: 'Thacker Brothers', logo: thackerbrothers },
  { name: 'Vidicast Engineering Pvt. Ltd.', logo: undefined as string | undefined },
]

const whyBrands = [
  { icon: Award, title: 'Industry Experience', desc: '25+ years serving major manufacturers' },
  { icon: Truck, title: 'Modern Fleet', desc: 'GPS-enabled vehicles with real-time tracking' },
  { icon: MapPin, title: 'Strategic Network', desc: 'Multiple warehouses across Maharashtra' },
  { icon: Users, title: 'Professional Team', desc: 'Trained staff and experienced drivers' },
]

export default function ClientsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover"
          style={{ backgroundImage: `url(${ClientsHero})` }}
        />
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="container-xl relative text-white">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Partners</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">Our Clients</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Proud logistics partner for leading manufacturers across Maharashtra.
          </p>
        </div>
      </section>

      {/* ── Client Grid ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Trusted By</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Leaders We Serve</h2>
            <p className="text-foreground/60 text-lg">
              From automotive giants to polymer specialists, we deliver for the best.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group rounded-2xl border border-border bg-white p-6 flex flex-col items-center justify-center text-center hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all aspect-square"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="mb-4 max-h-14 md:max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-xl bg-accent/50">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                )}
                <p className="font-medium text-sm text-foreground/70 group-hover:text-foreground transition-colors leading-tight">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-accent/20">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="rounded-2xl border border-border p-7 bg-white hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-foreground/50">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Brands Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Edge</span>
            <h2 className="text-3xl md:text-4xl font-bold">Why Leading Brands Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyBrands.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border p-7 text-center hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/50 mb-5">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-foreground/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
        />
        <div className="container-xl relative text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Join Our Growing Client List</h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Experience the difference of working with Maharashtra's most trusted logistics partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY.phones[0].href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-8 py-4 text-lg font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors"
            >
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
