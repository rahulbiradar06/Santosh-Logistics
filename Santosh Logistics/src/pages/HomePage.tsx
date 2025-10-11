import { Link } from 'react-router-dom'
import heroImg from '../assets/transport/5.jpg'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
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
      <section className="py-20 bg-white">
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
      </section>

      {/* Services Preview */}
      {/* <section className="py-20 bg-accent/40">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🚚',
                title: 'Fleet Management',
                description: 'Modern fleet with GPS tracking and maintenance monitoring'
              },
              {
                icon: '💻',
                title: 'EDI Integration',
                description: 'Seamless data exchange between branches and head office'
              },
              {
                icon: '🏭',
                title: 'Warehousing',
                description: 'Strategic storage locations across Maharashtra'
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <Link to="/services" className="text-[--primary] hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center rounded-md bg-[--primary] px-6 py-3 text-lg font-medium text-[--primary-foreground] shadow-sm hover:opacity-90"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section> */}

      {/* Quality Policy */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-foreground/70 mb-12">
              Your goods, delivered safely — every time.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: '✅', text: 'On-time Delivery' },
                { icon: '🛡️', text: 'Safe & Dependable Transport' },
                { icon: '📞', text: 'Prompt & Positive Response' },
                { icon: '🏆', text: '25+ Years Experience' }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 p-4 rounded-lg border border-border">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-[--primary]">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,var(--primary)_50%,var(--accent)_100%)] opacity-90"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
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
              {/* <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-[--primary] shadow-sm hover:bg-white/90 transition-colors"
              >
                Get a Quote
              </Link> */}
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
