export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-accent/40 py-20">
        <div className="container-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Comprehensive logistics solutions designed to meet your business needs with efficiency and reliability.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Consignment / LR Booking',
                icon: '📝',
                features: [
                  'LR number validation',
                  'Agent-wise booking',
                  'Commission calculation',
                  'Weight options management',
                  'Flexible payment terms'
                ]
              },
              {
                title: 'Fleet Management',
                icon: '🚛',
                features: [
                  'GPS tracking system',
                  'Regular maintenance checks',
                  'Fitness & permit monitoring',
                  'Driver management',
                  'Route optimization'
                ]
              },
              {
                title: 'Warehousing Operations',
                icon: '🏭',
                features: [
                  'Stock management',
                  'Inventory tracking',
                  'Location management',
                  'Daily stock updates',
                  'Security monitoring'
                ]
              },
              {
                title: 'Delivery Management',
                icon: '📦',
                features: [
                  'Real-time tracking',
                  'POD management',
                  'Digital receipts',
                  'Status updates',
                  'Delivery confirmation'
                ]
              },
              {
                title: 'Billing & Accounting',
                icon: '💳',
                features: [
                  'Centralized billing',
                  'Multiple payment options',
                  'Automated invoicing',
                  'Financial reporting',
                  'Tax compliance'
                ]
              },
              {
                title: 'EDI Integration',
                icon: '💻',
                features: [
                  'Branch connectivity',
                  'Data synchronization',
                  'Automated updates',
                  'System integration',
                  'Digital documentation'
                ]
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-lg border border-border p-6 hover:border-[--primary] transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground/70">
                      <svg className="w-5 h-5 text-[--primary] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-accent/40">
        <div className="container-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Coverage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'Navi Mumbai',
                address: '304/ Kaveri Co-op Hsg. Soc. P. Ltd., Plot No. 73, Sec 05, Sanpada',
                phone: '92253 04131'
              },
              {
                city: 'Chakan',
                address: '01, Gurukrupa Complex, Opp. Autocomp Co., Mahalunge Village',
                phone: '92253 04133'
              },
              {
                city: 'Aurangabad',
                address: '14/1, FDC Road, MIDC Waluj',
                phone: '92253 04132'
              }
            ].map((location) => (
              <div key={location.city} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{location.city}</h3>
                <p className="text-foreground/70 mb-4">{location.address}</p>
                <p className="text-[--primary]">📞 {location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need Logistics Support?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help streamline your logistics operations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-[--primary] px-6 py-3 text-lg font-medium text-[--primary-foreground] shadow-sm hover:opacity-90"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
