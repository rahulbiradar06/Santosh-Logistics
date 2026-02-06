import { Link } from 'react-router-dom'
import { Check, Phone, ArrowRight, Truck, PackageCheck, Warehouse, Settings, MapPin, ClipboardList } from 'lucide-react'
import OfficeBg from '@/assets/services/office.png'
import { COMPANY, SERVICES, OFFICES } from '@/data/siteData'

const iconMap: Record<string, React.ElementType> = {
  Truck, PackageCheck, Warehouse, Settings, MapPin, ClipboardList,
}

const processSteps = [
  { step: '01', title: 'Book', desc: 'Place your consignment via call or our booking office.' },
  { step: '02', title: 'Pickup', desc: 'Our fleet collects your goods from the source location.' },
  { step: '03', title: 'Transit', desc: 'GPS-tracked transport on optimised routes.' },
  { step: '04', title: 'Deliver', desc: 'On-time delivery with proof of delivery confirmation.' },
]

export default function ServicesPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-[position:50%_15%] md:bg-[position:50%_20%]"
          style={{ backgroundImage: `url(${OfficeBg})` }}
        />
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="container-xl relative text-white">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">What We Offer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">Our Services</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Comprehensive logistics solutions designed to meet your business needs with efficiency and reliability.
          </p>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End Logistics Solutions</h2>
            <p className="text-foreground/60 text-lg">From booking to delivery, we handle every step with precision.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Truck
              return (
                <div
                  key={service.title}
                  className={`group rounded-2xl p-7 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                    i === 0
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-white border-border hover:border-primary/30'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 ${
                    i === 0 ? 'bg-white/20' : 'bg-accent/50'
                  }`}>
                    <Icon className={`h-6 w-6 ${i === 0 ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${i === 0 ? '' : 'text-foreground'}`}>{service.title}</h3>
                  <p className={`text-sm mb-5 leading-relaxed ${i === 0 ? 'text-white/80' : 'text-foreground/60'}`}>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-sm ${i === 0 ? 'text-white/90' : 'text-foreground/70'}`}>
                        <Check className={`h-4 w-4 shrink-0 ${i === 0 ? 'text-white/70' : 'text-primary'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 bg-accent/30">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 text-lg">Simple, transparent logistics in four steps.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="relative rounded-2xl bg-white border border-border p-7 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl font-extrabold text-primary/15 mb-3">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-foreground/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Network</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coverage</h2>
            <p className="text-foreground/60 text-lg">Strategically located across Maharashtra's key industrial hubs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {OFFICES.filter((o) => o.phones).map((office) => (
              <a
                key={office.name}
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border p-7 bg-white hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{office.name}</h3>
                </div>
                <p className="text-sm text-foreground/60 mb-3 leading-relaxed">{office.address}</p>
                <p className="text-sm font-medium text-primary">
                  <Phone className="inline h-3.5 w-3.5 mr-1" />
                  {office.phones}
                </p>
              </a>
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
        <div className="container-xl relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">Need Logistics Support?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg">
            Contact us today to discuss how we can streamline your logistics operations.
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
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
