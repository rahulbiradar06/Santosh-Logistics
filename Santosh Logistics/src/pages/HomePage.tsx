import { Link } from 'react-router-dom'
import heroImg from '../assets/transport/5.jpg'
import iconOnTime from '@/assets/transport/5.jpg'
import iconSafe from '@/assets/about/office3.jpeg'
import iconSupport from '@/assets/clients/team2.png'
import iconExperience from '@/assets/services/office.png'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden rounded-b-[36px] md:rounded-b-[64px]">
        {/* Background overlay */}
        <div className="absolute inset-0 -z-10 bg-black/50"></div>
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img 
            src={heroImg} 
            alt="Transport fleet" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="container-xl pt-24">
          <div className="max-w-3xl">
            {/* Badge row */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[--accent]"></span>
                Since 1990
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[--secondary]"></span>
                Trusted by leading manufacturers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Speed • Secure •
              <span className="relative inline-block">
                <span className="px-2 md:px-3">Supply</span>
                <span className="pointer-events-none absolute inset-x-0 bottom-1 h-2 bg-[--accent]/60 blur-[2px]"></span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/85 max-w-2xl">
              Reliable, on-time logistics across Maharashtra with GPS-enabled fleet, modern warehousing, and responsive support.
            </p>

           

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base md:text-lg font-semibold text-[--primary] shadow-sm hover:shadow-md hover:bg-white/95 transition-all"
              >
                Contact Us
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-6 py-3 text-base md:text-lg font-semibold text-white ring-1 ring-white/25 hover:bg-white/20 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '1000+', label: 'Monthly Deliveries' },
              { number: '50+', label: 'Fleet Size' },
              { number: '99%', label: 'On-time Delivery' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[--primary] mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Why Choose Us (Redesigned) */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Radial yellow background */}
        {/* <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              'radial-gradient(500px 500px at 88% 88%, rgba(65, 211, 248, 0.28), transparent 100%),\
              //  radial-gradient(560px 560px at 88% 12%, rgba(4, 241, 249, 0.22), transparent 100%),\
               radial-gradient(500px 500px at 82% 82%, rgba(115, 232, 245, 0.18), transparent 100%)',
          }}
        /> */}
        <div
          className="pointer-events-none absolute inset-0 z-0 animate-pulse"
          style={{
            backgroundImage:
              'radial-gradient(520px 520px at 22% 78%, rgba(250,204,21,0.15), transparent 65%)',
          }}
        />
        <div className="container-xl relative z-10">
          {/* Header row with CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Us</h2>
              <p className="text-foreground/70 max-w-3xl">Your goods, delivered safely — every time.</p>
            </div>
            <Link
              to="/services"
              className="self-start inline-flex items-center gap-2 rounded-full bg-[--primary] px-5 py-2 text-white hover:opacity-90 transition"
            >
              Explore Services
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highlighted card */}
            <div className="rounded-2xl p-6 md:p-7 bg-[--primary] text-[--primary-foreground] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconOnTime} alt="On-time Delivery" className="h-8 w-8 rounded-md object-cover ring-1 ring-white/20" />
                <span className="text-sm/none bg-white/15 px-2 py-1 rounded-md">Reliability</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">On-time Delivery</h3>
              <p className="text-[--primary-foreground]/90 mb-5">Efficient route planning and proactive tracking to meet your deadlines.</p>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white/90 text-[--primary] px-4 py-2 font-medium hover:bg-white">
                Learn More
                <span aria-hidden>↗</span>
              </Link>
            </div>

            {/* Secondary cards */}
            <div className="rounded-2xl p-6 md:p-7 bg-accent/20 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconSafe} alt="Safe Transport" className="h-8 w-8 rounded-md object-cover ring-1 ring-border" />
                <span className="text-sm text-foreground/70">Safety</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Dependable Transport</h3>
              <p className="text-foreground/70 mb-5">Maintained fleet and trained drivers to safeguard your goods.</p>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-[--primary] text-white px-4 py-2 font-medium hover:opacity-90">Learn More</Link>
            </div>

            <div className="rounded-2xl p-6 md:p-7 bg-accent/20 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconSupport} alt="Prompt Response" className="h-8 w-8 rounded-md object-cover ring-1 ring-border" />
                <span className="text-sm text-foreground/70">Support</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prompt & Positive Response</h3>
              <p className="text-foreground/70 mb-5">Responsive coordination and updates throughout the delivery cycle.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[--primary] text-white px-4 py-2 font-medium hover:opacity-90">Learn More</Link>
            </div>

            <div className="rounded-2xl p-6 md:p-7 bg-accent/20 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconExperience} alt="Years Experience" className="h-8 w-8 rounded-md object-cover ring-1 ring-border" />
                <span className="text-sm text-foreground/70">Experience</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">25+ Years Experience</h3>
              <p className="text-foreground/70 mb-5">A proven track record with leading manufacturers across Maharashtra.</p>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-[--primary] text-white px-4 py-2 font-medium hover:opacity-90">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-[--primary] rounded-t-[36px] rounded-b-[36px] md:rounded-t-[64px] md:rounded-b-[64px]">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,var(--primary)_50%,var(--accent)_100%)] opacity-90 rounded-t-[36px] rounded-b-[36px] md:rounded-t-[64px] md:rounded-b-[64px]"></div>
          <div
            className="absolute inset-0 rounded-t-[36px] rounded-b-[36px] md:rounded-t-[64px] md:rounded-b-[64px]"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}
          ></div>
        </div>
        
        <div className="container-xl relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Partner with Maharashtra's Most Trusted Logistics Provider
            </h2>
            <div className="text-white/90 text-lg mb-12 space-y-4">
              <p>
                Join our network of satisfied clients including Bajaj Auto, Varroc, and other industry leaders.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                  <h3 className="font-semibold mb-2">Direct Services</h3>
                  <p className="text-sm text-white/80">Regular routes across major industrial hubs</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                  <h3 className="font-semibold mb-2">Modern Fleet</h3>
                  <p className="text-sm text-white/80">GPS-enabled vehicles with real-time tracking</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm text-white/80">Dedicated team for immediate assistance</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-8 py-3 text-lg font-medium text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
