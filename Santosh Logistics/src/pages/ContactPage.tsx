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
              <div className="rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[--accent]/20 text-[--accent-foreground] px-3 py-1 text-xs font-medium ring-1 ring-[--accent]/30">Support</span>
                </div>
                <h2 className="text-2xl font-bold">Have Questions? We’re Just a Message Away!</h2>
                <p className="text-foreground/70 mt-1 mb-6">Fill out the form and our team will get back to you shortly.</p>

                <form
                  className="space-y-5"
                  action="https://formspree.io/f/mldznlpn"
                  method="POST"
                >
                  {/* Helpful hidden fields for Formspree */}
                  <input type="hidden" name="_subject" value="New message from Santosh Logistics website" />
                  {/* Honeypot field to reduce spam */}
                  <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
                      <span className="pointer-events-none absolute left-3 top-[42px] text-foreground/50">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </span>
                      <input id="firstName" name="firstName" type="text" className="w-full rounded-md border border-border pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" required />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                      <span className="pointer-events-none absolute left-3 top-[42px] text-foreground/50">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </span>
                      <input id="lastName" name="lastName" type="text" className="w-full rounded-md border border-border pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                      <span className="pointer-events-none absolute left-3 top-[42px] text-foreground/50">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4z"/><path d="m22 7-10 7L2 7"/></svg>
                      </span>
                      <input id="email" name="email" type="email" className="w-full rounded-md border border-border pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" required />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                      <span className="pointer-events-none absolute left-3 top-[42px] text-foreground/50">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.54 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.39-1.11a2 2 0 0 1 2.11-.45c.87.24 1.75.42 2.65.54A2 2 0 0 1 22 16.92z"/></svg>
                      </span>
                      <input id="phone" name="phone" type="tel" className="w-full rounded-md border border-border pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                    <span className="pointer-events-none absolute left-3 top-[42px] text-foreground/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16v4H4z"/><path d="M4 12h10"/><path d="M4 16h8"/></svg>
                    </span>
                    <select id="subject" name="subject" className="w-full rounded-md border border-border pl-10 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]">
                      <option>General Inquiry</option>
                      <option>Get a Quote</option>
                      <option>Track a Delivery</option>
                      <option>Careers</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <span className="pointer-events-none absolute left-3 top-[42px] text-foreground/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
                    </span>
                    <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-border pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]" required></textarea>
                  </div>

                  {/* <div className="flex items-start gap-2">
                    <input id="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-border text-[--primary] focus:ring-[--primary]" />
                    <label htmlFor="consent" className="text-sm text-foreground/70">I agree to the processing of my information in accordance with the privacy policy.</label>
                  </div> */}

                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 px-6 py-3 text-base md:text-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600"
                  >
                    <span>Send Message</span>
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>↗</span>
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
                    <div className="text-foreground/70 space-y-1">
                      <div>
                        <a href="tel:+919225304131" className="hover:text-[--primary]">+91 92253 04131</a>
                      </div>
                      <div>
                        <a href="tel:+919225304132" className="hover:text-[--primary]">+91 92253 04132</a>
                      </div>
                      <div>
                        <a href="tel:+919225909193" className="hover:text-[--primary]">+91 92259 09193</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border p-5 bg-white flex items-start gap-3">
                  <span className="mt-1">🕑</span>
                  <div>
                    <div className="font-semibold">Working Hours</div>
                    <p className="text-foreground/70">Mon–Sat: 7:30 AM – 7:00 PM</p>
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
            Monday - Saturday: 7:30 AM - 7:00 PM IST
          </p>
          <p className="text-foreground/70">
            Sunday: Closed
          </p>
        </div>
      </section>
    </div>
  )
}
