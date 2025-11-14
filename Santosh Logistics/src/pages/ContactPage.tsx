import ContactBanner from '@/assets/contactus/banner.jpeg'
export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 min-h-[520px] md:min-h-[620px]">
        <div className="absolute inset-0 bg-[--primary]">
          <div
            className="absolute inset-0 bg-cover bg-[position:50%_20%]"
            style={{ backgroundImage: `url(${ContactBanner})` }}
          />
          {/* <div className="absolute inset-0 bg-[linear-gradient(30deg,var(--primary)_50%,var(--secondary)_100%)] opacity-90" /> */}
          <div className="absolute inset-0 -z-0 bg-black/30" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '28px 28px' }}
          />
        </div>
        <div className="container-xl relative text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Get in Touch with Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Have questions about transport, warehousing, or deliveries? We’re here to help. Reach out for quotes,
            support, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left: Form card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border shadow-sm p-6 md:p-8 bg-white">
                <h2 className="text-2xl font-bold mb-6">Have Questions? We’re Just a Message Away!</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
                      <input id="firstName" name="firstName" type="text" className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                      <input id="lastName" name="lastName" type="text" className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]">
                      <option>General Inquiry</option>
                      <option>Get a Quote</option>
                      <option>Track a Delivery</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" required></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[--primary] px-6 py-3 text-lg font-medium text-[--primary-foreground] shadow-sm hover:opacity-90">
                    Send Message
                    <span aria-hidden>↗</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Promo + contact cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Promo card */}
              <div className="rounded-2xl border border-border overflow-hidden bg-[--accent]/20">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our experts will always help you</h3>
                  <p className="text-foreground/70">Dedicated support from an experienced logistics team.</p>
                </div>
              </div>

              {/* Contact info stacked cards */}
              <div className="space-y-4">
                <div className="rounded-xl border border-border p-5 bg-white flex items-start gap-3">
                  <span className="mt-1">✉️</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:santoshlog.waluj@gmail.com" className="text-foreground/70 hover:text-[--primary]">santoshlog.waluj@gmail.com</a>
                  </div>
                </div>
                <div className="rounded-xl border border-border p-5 bg-white flex items-start gap-3">
                  <span className="mt-1">📞</span>
                  <div>
                    <div className="font-semibold">Call</div>
                    <a href="tel:+919225304131" className="text-foreground/70 hover:text-[--primary]">+91 92253 04131</a>
                  </div>
                </div>
                <div className="rounded-xl border border-border p-5 bg-white flex items-start gap-3">
                  <span className="mt-1">📍</span>
                  <div>
                    <div className="font-semibold">Address</div>
                    <p className="text-foreground/70">304/ Kaveri Co-op Hsg. Soc. P. Ltd., Sanpada, Navi Mumbai - 400705</p>
                  </div>
                </div>
                <div className="rounded-xl border border-border p-5 bg-white flex items-start gap-3">
                  <span className="mt-1">🕑</span>
                  <div>
                    <div className="font-semibold">Working Hours</div>
                    <p className="text-foreground/70">Mon–Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-accent/40">
        <div className="container-xl text-center">
          <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
          <p className="text-foreground/70">
            Monday - Saturday: 9:00 AM - 7:00 PM IST
          </p>
          <p className="text-foreground/70">
            Sunday: Closed
          </p>
        </div>
      </section>
    </div>
  )
}
