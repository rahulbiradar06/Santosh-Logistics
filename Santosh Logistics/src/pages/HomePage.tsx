import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Truck, Shield, Clock, Award, MapPin, Headphones } from 'lucide-react'
import heroImg from '../assets/transport/5.jpg'
import warehouseImg from '@/assets/warehouse/1.jpg'
import { COMPANY, OFFICES, TESTIMONIALS } from '@/data/siteData'

// Client logos for trust strip
import bajajauto from '@/assets/clients/bajajauto.png'
import varroc from '@/assets/clients/varroc.png'
import endurance from '@/assets/clients/endurance.jpeg'
import minda from '@/assets/clients/minda.png'
import badve from '@/assets/clients/bavde.jpeg'

const clientLogos = [
  { name: 'Bajaj Auto', src: bajajauto },
  { name: 'Varroc', src: varroc },
  { name: 'Endurance', src: endurance },
  { name: 'Minda Sai', src: minda },
  { name: 'Badve', src: badve },
]

const whyUs = [
  { icon: Clock, title: 'On-time Delivery', desc: 'Efficient route planning and proactive tracking to meet your deadlines.' },
  { icon: Shield, title: 'Safe & Secure', desc: 'Well-maintained fleet and trained drivers to safeguard your goods.' },
  { icon: Headphones, title: 'Responsive Support', desc: 'Quick coordination and real-time updates throughout the delivery cycle.' },
  { icon: Award, title: '25+ Years Experience', desc: 'A proven track record with leading manufacturers across Maharashtra.' },
  { icon: Truck, title: 'Modern Fleet', desc: 'GPS-enabled vehicles with real-time tracking across all routes.' },
  { icon: MapPin, title: 'Strategic Coverage', desc: 'Warehouses in Navi Mumbai, Pune, and Chh. Sambhajinagar.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img src={heroImg} alt="Transport fleet" className="w-full h-full object-cover" loading="eager" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="container-xl relative py-24">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white/90 ring-1 ring-white/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Since 1990
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-4 py-1.5 text-sm text-white/90 ring-1 ring-primary/30">
                Trusted by industry leaders
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
              Your Reliable
              <br />
              <span className="text-primary">Logistics Partner</span>
              <br />
              Across Maharashtra
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              Dependable transportation, warehousing, and distribution with a GPS-enabled fleet and responsive support.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={COMPANY.phones[0].href}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client trust strip ── */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container-xl">
          <p className="text-center text-sm text-foreground/50 uppercase tracking-wider font-medium mb-6">
            Trusted by leading manufacturers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((c) => (
              <img
                key={c.name}
                src={c.src}
                alt={c.name}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Goods, Delivered Safely — Every Time</h2>
            <p className="text-foreground/60 text-lg">
              Over three decades of logistics excellence built on reliability, safety, and customer-first service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-2xl p-7 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  i === 0
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white border-border hover:border-primary/30'
                }`}
              >
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 ${
                  i === 0 ? 'bg-white/20' : 'bg-accent/50'
                }`}>
                  <item.icon className={`h-6 w-6 ${i === 0 ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${i === 0 ? '' : 'text-foreground'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/85' : 'text-foreground/60'}`}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Explore all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Coverage highlight ── */}
      <section className="py-20 bg-accent/30">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Network</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Strategic Coverage Across Maharashtra</h2>
              <p className="text-foreground/60 text-lg mb-8">
                With warehouses and offices in key industrial hubs, we ensure fast and efficient delivery to your doorstep.
              </p>
              <div className="space-y-4">
                {OFFICES.filter((o) => o.phones).map((office) => (
                  <a
                    key={office.name}
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{office.name}</h3>
                      <p className="text-sm text-foreground/60 mt-0.5">{office.city}</p>
                      <p className="text-xs text-foreground/40 mt-1">📞 {office.phones}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={warehouseImg}
                alt="Warehouse operations"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 hidden md:block">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-foreground/60">Warehouse Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
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

      {/* ── CTA Section ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
          />
        </div>
        <div className="container-xl relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Ready to Streamline Your Logistics?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join Bajaj Auto, Varroc, and other industry leaders who trust Santosh Logistics for reliable, on-time deliveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={COMPANY.phones[0].href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur px-8 py-4 text-lg font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors"
              >
                Send a Message
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
