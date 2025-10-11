export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-accent/40 py-20">
        <div className="container-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Since 1990, Santosh Logistics has been a trusted name in Maharashtra's transport industry, 
            delivering excellence through our commitment to safety, reliability, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose text-foreground/70">
                <p>
                  Founded by Late Mr. Krishna B. Parab, Santosh Logistics Private Limited has grown 
                  from a small transport business to one of Maharashtra's most trusted logistics partners.
                </p>
                <p>
                  Under the leadership of our Director, Mr. Santosh Krishna Parab, we continue to expand 
                  our services while maintaining the highest standards of service quality and reliability.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Presence</h2>
              <div className="prose text-foreground/70">
                <p>
                  We operate across major industrial hubs in Maharashtra with strategic locations in:
                </p>
                <ul>
                  <li>Head Office - Navi Mumbai</li>
                  <li>Vashi Godown</li>
                  <li>Chakan Godown</li>
                  <li>Aurangabad Godown</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-accent/40">
        <div className="container-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Quality Policy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safe Transport',
                description: 'We prioritize the safety of your goods with well-maintained vehicles and trained drivers.'
              },
              {
                title: 'Prompt Response',
                description: 'Quick and positive response to all customer queries and requirements.'
              },
              {
                title: 'Team Excellence',
                description: 'Continuous training and development of our team for better service delivery.'
              },
              {
                title: 'Timely Delivery',
                description: 'Commitment to on-time delivery through efficient route planning and tracking.'
              },
              {
                title: 'Quality Focus',
                description: 'Regular monitoring and improvement of our service quality standards.'
              },
              {
                title: 'Customer First',
                description: 'Customer satisfaction is at the heart of everything we do.'
              }
            ].map((policy) => (
              <div key={policy.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{policy.title}</h3>
                <p className="text-foreground/70">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/40 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Late Mr. Krishna B. Parab</h3>
              <p className="text-foreground/70">Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/40 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mr. Santosh Krishna Parab</h3>
              <p className="text-foreground/70">Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
