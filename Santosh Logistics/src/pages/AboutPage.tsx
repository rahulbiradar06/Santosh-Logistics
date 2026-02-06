import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Clock, Users, Target, Sparkles, Heart, Phone, ArrowRight, MapPin } from 'lucide-react'
import TeamImg from '@/assets/about/team.png'
import OfficeImg from '@/assets/about/office3.jpeg'
import KrishnaImg from '@/assets/about/krishna.png'
import SantoshImg from '@/assets/about/santosh.png'
import AvantiImg from '@/assets/about/avanti.png'
import Team3Img from '@/assets/about/team3.png'
import { COMPANY, OFFICES } from '@/data/siteData'

const qualityPolicies = [
  { icon: Shield, title: 'Safe Transport', desc: 'We prioritize the safety of your goods with well-maintained vehicles and trained drivers.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'Commitment to on-time delivery through efficient route planning and tracking.' },
  { icon: Users, title: 'Team Excellence', desc: 'Continuous training and development of our team for better service delivery.' },
  { icon: Target, title: 'Quality Focus', desc: 'Regular monitoring and improvement of our service quality standards.' },
  { icon: Sparkles, title: 'Prompt Response', desc: 'Quick and positive response to all customer queries and requirements.' },
  { icon: Heart, title: 'Customer First', desc: 'Customer satisfaction is at the heart of everything we do.' },
]

const values = [
  { title: 'Customer-first', desc: 'Responsive, reliable, and transparent operations.' },
  { title: 'Operational Excellence', desc: 'Standardized processes & modern tracking.' },
  { title: 'Deep Roots', desc: 'Decades of partnerships with industry leaders.' },
  { title: 'Safety & Care', desc: 'Maintained fleet and trained personnel.' },
]

const leaders = [
  { name: 'Late Mr. Krishna B. Parab', role: 'Founder', img: KrishnaImg },
  { name: 'Mr. Santosh Krishna Parab', role: 'Director', img: SantoshImg },
  { name: 'Mrs. Avanti Parab', role: 'Director', img: AvantiImg },
]

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-28 md:py-36 min-h-[520px] md:min-h-[620px] overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[position:50%_12%] bg-cover"
          style={{ backgroundImage: `url(${TeamImg})` }}
        />
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="container-xl relative text-white">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5">
              About Santosh Logistics
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Maharashtra's trusted logistics partner delivering reliability, safety, and service excellence
              across industrial hubs for over three decades.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { label: 'Years', value: '25+' },
                { label: 'Deliveries/mo', value: '1000+' },
                { label: 'Fleet Size', value: '50+' },
                { label: 'On-time', value: '99%' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white/10 backdrop-blur-sm p-4 text-center ring-1 ring-white/10">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story + Map ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Built on Trust Since 1990</h2>
              <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                Founded by Late Mr. Krishna B. Parab, Santosh Logistics has grown from a small transport
                business into one of Maharashtra's most trusted logistics partners. Today, we serve leading
                manufacturers with a modern fleet and dedicated team.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all">
                    <h3 className="font-semibold mb-1">{v.title}</h3>
                    <p className="text-sm text-foreground/60">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our Presence</span>
              <h2 className="text-3xl font-bold mb-4">Across Maharashtra</h2>
              <p className="text-foreground/60 mb-5">Explore our key locations on the interactive map.</p>
              <MapPresence />
              <div className="mt-6 space-y-3">
                {OFFICES.map((o) => (
                  <a
                    key={o.name}
                    href={o.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-accent/20 transition-all text-sm group"
                  >
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <span className="font-medium group-hover:text-primary transition-colors">{o.name}</span>
                      <span className="text-foreground/50 ml-2">{o.city}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality Policy ── */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover"
          style={{ backgroundImage: `url(${OfficeImg})` }}
        />
        <div className="absolute inset-0 -z-0 bg-black/60" />
        <div className="container-xl relative">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Quality</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Quality Policy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPolicies.map((p) => (
              <div
                key={p.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/15 mb-4">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold">Our Leadership</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative bg-gradient-to-b from-accent/30 to-transparent">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="block h-72 md:h-80 w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm text-primary font-medium">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="py-20 bg-accent/20">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">Our People</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Team</h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                A committed group of professionals powering reliable logistics operations across Maharashtra. We
                take pride in teamwork, safety, and customer-first service.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white">
              <img
                src={Team3Img}
                alt="Santosh Logistics Team"
                className="block w-full h-[320px] md:h-[460px] object-contain object-center bg-white"
                loading="lazy"
              />
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Built on Trust. Driven by Reliability.</h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Santosh Logistics for dependable, on-time deliveries across Maharashtra.
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
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function MapPresence() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    let isCancelled = false

    async function init() {
      const cssId = 'mapbox-gl-css'
      if (!document.getElementById(cssId)) {
        const link = document.createElement('link')
        link.id = cssId
        link.rel = 'stylesheet'
        link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css'
        document.head.appendChild(link)
      }

      const token = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined
      if (!token) return

      const mapboxModule = await import('mapbox-gl')
      const mapbox = mapboxModule.default
      mapbox.accessToken = token

      if (!containerRef.current || isCancelled) return

      const map = new mapbox.Map({
        container: containerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [73.5, 19.3],
        zoom: 6.2,
      })

      mapRef.current = map

      const bounds = new mapbox.LngLatBounds()

      OFFICES.forEach((o) => {
        bounds.extend([o.lng, o.lat])

        const marker = new mapbox.Marker()
          .setLngLat([o.lng, o.lat])
          .addTo(map)

        const popup = new mapbox.Popup({ offset: 12 }).setHTML(
          `<div style="font-weight:600;margin-bottom:4px;">${o.name}</div>
           <div style="font-size:12px;color:#666;margin-bottom:6px;">${o.city}</div>
           <a href="${o.mapLink}" target="_blank" style="color:var(--primary);text-decoration:underline;font-size:13px;">Open in Google Maps</a>`
        )

        marker.setPopup(popup)
      })

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, { padding: 60, duration: 800 })
      }
    }

    init()
    return () => {
      isCancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  const tokenMissing = !import.meta.env.VITE_MAPBOX_TOKEN

  return (
    <div>
      {tokenMissing && (
        <div className="mb-3 rounded-xl border border-dashed border-border p-4 text-sm text-foreground/60">
          Map is disabled — set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">VITE_MAPBOX_TOKEN</code> in your <code className="bg-muted px-1.5 py-0.5 rounded text-xs">.env</code> file.
        </div>
      )}
      <div ref={containerRef} className="h-80 w-full rounded-xl border border-border overflow-hidden shadow-sm" />
      <p className="mt-2 text-xs text-foreground/50">Click a marker to open its Google Maps location.</p>
    </div>
  )
}
