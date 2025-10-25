import { Link } from 'react-router-dom'
import bajajauto from '../assets/clients/bajajauto.png'
import maskpolymers from '../assets/clients/maskpolymers.jpeg'
import rooppolymers from '../assets/clients/rooppolymers.jpeg'
import minda from '../assets/clients/minda.png'
import kumar from '../assets/clients/kumar.jpeg'
import thackerbrothers from '../assets/clients/thackerbrothers.jpeg'
import varroc from '../assets/clients/varroc.png'
import endurance from '../assets/clients/endurance.jpeg'
import badve from '../assets/clients/bavde.jpeg'

export default function ClientsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-accent/40 py-20">
        <div className="container-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Proud logistics partner for leading manufacturers across Maharashtra.
          </p>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Bajaj Auto Ltd.', logo: bajajauto },
              { name: 'Mask Polymers Pvt. Ltd.', logo: maskpolymers },
              { name: 'Roop Polymers Ltd.', logo: rooppolymers },
              { name: 'Minda Sai Ltd.', logo: minda },
              { name: 'Kumar Elastomec Pvt. Ltd.', logo: kumar },
              { name: 'Thacker Brothers', logo: thackerbrothers },
              { name: 'Vidicast Engineering Pvt. Ltd.', logo: undefined },
              { name: 'Varroc Engineering', logo: varroc },
              { name: 'Badve Engineering', logo: badve },
              { name: 'Endurance Technologies Pvt. Ltd.', logo: endurance }
            ].map((client) => (
              <div
                key={client.name}
                className="aspect-square rounded-lg border border-border bg-white p-6 flex items-center justify-center hover:border-[--primary] transition-colors"
              >
                <div className="text-center w-full">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="mx-auto mb-4 max-h-16 md:max-h-20 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-4xl mb-4">🏢</div>
                  )}
                  <p className="font-medium text-foreground/80">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/40">
        <div className="container-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Santosh Logistics has been our trusted transport partner for years. Their reliability and professionalism are unmatched.",
                author: "Operations Manager",
                company: "Bajaj Auto Ltd."
              },
              {
                quote: "Excellent service quality and always on-time deliveries. A dependable logistics partner for our business.",
                author: "Supply Chain Head",
                company: "Varroc Engineering"
              },
              {
                quote: "Their modern tracking systems and professional team make logistics management seamless.",
                author: "Procurement Director",
                company: "Minda Sai Ltd."
              }
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">"</div>
                <p className="text-foreground/70 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Leading Brands Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Industry Experience",
                  description: "25+ years serving major manufacturers"
                },
                {
                  title: "Modern Fleet",
                  description: "GPS-enabled vehicles with real-time tracking"
                },
                {
                  title: "Strategic Network",
                  description: "Multiple warehouses across Maharashtra"
                },
                {
                  title: "Professional Team",
                  description: "Trained staff and experienced drivers"
                }
              ].map((feature) => (
                <div key={feature.title} className="p-6 rounded-lg border border-border text-left">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-[--primary]">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,var(--primary)_50%,var(--secondary)_100%)] opacity-90"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="container-xl relative text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Client List</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference of working with Maharashtra's most trusted logistics partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-[--primary] shadow-sm hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-8 py-3 text-lg font-medium text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
