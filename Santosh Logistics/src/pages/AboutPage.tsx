import { useEffect, useRef } from 'react'
import TeamImg from '@/assets/about/team.png'
import OfficeImg from '@/assets/about/office3.jpeg'
import KrishnaImg from '@/assets/about/krishna.png'
import SantoshImg from '@/assets/about/santosh.png'
import AvantiImg from '@/assets/about/avanti.png'
import Team3Img from '@/assets/about/team3.png'
export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 min-h-[520px] md:min-h-[620px] overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[position:50%_12%] bg-cover"
          style={{ backgroundImage: `url(${TeamImg})` }}
        />
        <div className="absolute inset-0 -z-0 bg-black/20" />
        <div className="container-xl text-white">
          <div className="max-w-4xl -translate-y-2 -translate-x-2 md:-translate-y-4 md:-translate-x-4 transition-transform">
            
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">About Santosh Logistics</h1>
            {/* <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Maharashtra’s trusted logistics partner delivering reliability, safety, and service excellence
              across industrial hubs for over three decades.
            </p> */}

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                { label: 'Years', value: '25+' },
                { label: 'Deliveries/mo', value: '1000+' },
                { label: 'Fleet Size', value: '50+' },
                { label: 'On-time', value: '99%' },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-white/10  p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-white/80 text-sm">{s.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

     

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-foreground/70">
                Founded by Late Mr. Krishna B. Parab, Santosh Logistics has grown from a small transport
                business into one of Maharashtra’s most trusted logistics partners.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Customer-first', desc: 'Responsive, reliable, and transparent operations.' },
                  { title: 'Operational Excellence', desc: 'Standardized processes & modern tracking.' },
                  { title: 'Deep Roots', desc: 'Decades of partnerships with industry leaders.' },
                  { title: 'Safety & Care', desc: 'Maintained fleet and trained personnel.' },
                ].map((i) => (
                  <div key={i.title} className="p-4 rounded-lg border border-border">
                    <h3 className="font-semibold mb-1">{i.title}</h3>
                    <p className="text-sm text-foreground/70">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Presence</h2>
              <p className="text-foreground/70 mb-4">Explore our key locations across Maharashtra on the map.</p>
              <MapPresence />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover"
          style={{ backgroundImage: `url(${OfficeImg})` }}
        />
        <div className="absolute inset-0 -z-0 bg-black/30" />
        <div className="container-xl relative">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Quality Policy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Safe Transport',
                description:
                  'We prioritize the safety of your goods with well-maintained vehicles and trained drivers.',
              },
              {
                title: 'Prompt Response',
                description: 'Quick and positive response to all customer queries and requirements.',
              },
              {
                title: 'Team Excellence',
                description: 'Continuous training and development of our team for better service delivery.',
              },
              {
                title: 'Timely Delivery',
                description: 'Commitment to on-time delivery through efficient route planning and tracking.',
              },
              {
                title: 'Quality Focus',
                description: 'Regular monitoring and improvement of our service quality standards.',
              },
              {
                title: 'Customer First',
                description: 'Customer satisfaction is at the heart of everything we do.',
              },
            ].map((policy) => (
              <div
                key={policy.title}
                className="bg-white/30 backdrop-blur-md rounded-lg p-6 border border-border hover:shadow-sm transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{policy.title}</h3>
                <p className="text-foreground/70">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      {/* <section className="py-20 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Integrity', desc: 'Honest commitments and transparent operations.' },
              { icon: '⏱️', title: 'Reliability', desc: 'On-time deliveries with consistent quality.' },
              { icon: '🛡️', title: 'Safety', desc: 'Care for cargo and people comes first.' },
              { icon: '🚀', title: 'Improvement', desc: 'Always refining processes and performance.' },
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-lg border border-border text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <div className="font-semibold mb-1">{v.title}</div>
                <div className="text-sm text-foreground/70">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Late Mr. Krishna B. Parab', role: 'Founder', img: KrishnaImg },
              { name: 'Mr. Santosh Krishna Parab', role: 'Director', img: SantoshImg },
              { name: 'Mrs. Avanti Parab', role: 'Director', img: AvantiImg },
            ].map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative bg-[#f5f5f5]">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 50% 30%, rgba(0,0,0,0.08) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.06) 1px, transparent 1px)',
                      backgroundSize: '22px 22px, 28px 28px',
                    }}
                  />
                  <img
                    src={p.img}
                    alt={p.name}
                    className="relative z-10 block h-72 md:h-80 w-full object-cover object-top rounded-t-xl"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-extrabold text-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm md:text-base text-foreground/70 italic font-serif">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* Our Team */}
       <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-foreground/70 md:text-lg">
                A committed group of professionals powering reliable logistics operations across Maharashtra. We
                take pride in teamwork, safety, and customer-first service.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border bg-white flex items-center justify-center">
              <img
                src={Team3Img}
                alt="Santosh Logistics Team"
                className="block w-full h-[320px] md:h-[460px] object-contain object-center bg-white"
              />
              {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-white/70 to-white" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[--primary]">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,var(--primary)_50%,var(--secondary)_100%)] opacity-90"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>
        <div className="container-xl relative text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Trust. Driven by Reliability.</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Santosh Logistics for dependable, on-time deliveries across Maharashtra.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-[--primary] shadow-sm hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section> */}
    </div>
  )
}

function MapPresence() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    let isCancelled = false

    async function init() {
      // Ensure Mapbox CSS is loaded (avoid direct package CSS import to prevent Vite resolution errors)
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

      const points: Array<{ name: string; lng: number; lat: number; link: string }> = [
        {
          name: 'Head Office – Sanpada, Navi Mumbai',
          lng: 73.0147636,
          lat: 19.0618929,
          link: 'https://maps.app.goo.gl/swhx2XVaZFWnbhn39?g_st=ic',
        },
        {
          name: 'Booking Office – Mumbai Godown (Sanpada)',
          lng: 73.0097404,
          lat: 19.0686387,
          link: 'https://maps.app.goo.gl/Nff66zsa2ofJPTGz9?g_st=ic',
        },
        {
          name: 'Chakan (Pune) Godown',
          lng: 73.8613203,
          lat: 18.7632075,
          link: 'https://www.google.com/maps/place/Chakan,+Maharashtra+410501/@18.7618079,73.8554341,3606m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2c9f585ac70d1:0x7269f7854109659!8m2!3d18.7632075!4d73.8613203!16s%2Fm%2F026gfww?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D',
        },
        {
          name: 'Chh. Sambhajinagar Godown',
          lng: 75.2352672,
          lat: 19.8328217,
          link: 'https://maps.app.goo.gl/HHj6Ypx4dXAwdZ5d6?g_st=ic',
        },
      ]

      const bounds = new mapbox.LngLatBounds()
      points.forEach((p) => bounds.extend([p.lng, p.lat]))

      points.forEach((p) => {
        const marker = new mapbox.Marker()
          .setLngLat([p.lng, p.lat])
          .addTo(map)

        const popup = new mapbox.Popup({ offset: 12 }).setHTML(
          `<div style="font-weight:600;margin-bottom:4px;">${p.name}</div>
           <a href="${p.link}" target="_blank" style="color:var(--primary);text-decoration:underline;">Open in Google Maps</a>`
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
        <div className="mb-3 rounded-md border border-dashed border-border p-3 text-sm text-foreground/70">
          Map is disabled: please set <code>VITE_MAPBOX_TOKEN</code> in your <code>.env</code>.
        </div>
      )}
      <div ref={containerRef} className="h-80 w-full rounded-lg border border-border overflow-hidden" />
      <p className="mt-2 text-xs text-foreground/60">Tip: Click a marker to open its Google Maps location.</p>
    </div>
  )
}
