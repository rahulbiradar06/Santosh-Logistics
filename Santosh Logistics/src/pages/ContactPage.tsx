import { Phone, Mail, Clock, Send, User, MessageSquare, FileText } from 'lucide-react'
import ContactBanner from '@/assets/contactus/banner.jpeg'
import { COMPANY } from '@/data/siteData'

export default function ContactPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-[position:50%_20%]" style={{ backgroundImage: `url(${ContactBanner})` }} />
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="container-xl relative text-white">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/90 mb-3">Contact</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">Get in Touch</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Have questions about transport, warehousing, or deliveries? We're here to help.
          </p>
        </div>
      </section>

      {/* ── Quick contact cards ── */}
      <section className="py-0 -mt-12 relative z-10">
        <div className="container-xl">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: COMPANY.phones[0].label,
                href: COMPANY.phones[0].href,
                accent: true,
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: COMPANY.email,
                href: `mailto:${COMPANY.email}`,
                accent: false,
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: COMPANY.hours.weekday,
                href: undefined,
                accent: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-6 shadow-lg ${
                  card.accent ? 'bg-primary text-white' : 'bg-white border border-border'
                }`}
              >
                <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl mb-4 ${
                  card.accent ? 'bg-white/20' : 'bg-accent/50'
                }`}>
                  <card.icon className={`h-5 w-5 ${card.accent ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className={`font-semibold mb-1 ${card.accent ? '' : 'text-foreground'}`}>{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className={`text-sm ${card.accent ? 'text-white/90 hover:text-white' : 'text-foreground/60 hover:text-primary'} transition`}>
                    {card.content}
                  </a>
                ) : (
                  <p className={`text-sm ${card.accent ? 'text-white/90' : 'text-foreground/60'}`}>{card.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + sidebar ── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border p-7 md:p-9 bg-white shadow-sm">
                <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-2">Send a Message</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">We'd Love to Hear From You</h2>
                <p className="text-foreground/60 mb-8">Fill out the form and our team will get back to you shortly.</p>

                <form className="space-y-5" action="https://formspree.io/f/mldznlpn" method="POST">
                  <input type="hidden" name="_subject" value="New message from Santosh Logistics website" />
                  <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                        <input id="firstName" name="firstName" type="text" placeholder="John" className="w-full rounded-xl border border-border bg-accent/10 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                        <input id="lastName" name="lastName" type="text" placeholder="Doe" className="w-full rounded-xl border border-border bg-accent/10 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                        <input id="email" name="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-border bg-accent/10 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                        <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full rounded-xl border border-border bg-accent/10 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                    <div className="relative">
                      <FileText className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                      <select id="subject" name="subject" className="w-full rounded-xl border border-border bg-accent/10 pl-10 pr-8 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none">
                        <option>General Inquiry</option>
                        <option>Get a Quote</option>
                        <option>Track a Delivery</option>
                        <option>Careers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-foreground/40" />
                      <textarea id="message" name="message" rows={4} placeholder="Tell us about your requirements..." className="w-full rounded-xl border border-border bg-accent/10 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none" required />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Promo */}
              <div className="rounded-2xl bg-secondary p-7 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Our experts will always help you</h3>
                <p className="text-white/70 mb-6">Dedicated support from an experienced logistics team ready to assist you.</p>
                <a
                  href={COMPANY.phones[0].href}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>

              {/* Contact details */}
              <div className="rounded-2xl border border-border p-7 bg-white space-y-5">
                <h3 className="font-semibold text-lg">Contact Details</h3>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent/50 shrink-0 mt-0.5">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-0.5">Email</div>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm text-foreground/60 hover:text-primary transition">{COMPANY.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent/50 shrink-0 mt-0.5">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Phone</div>
                    <div className="space-y-1">
                      {COMPANY.phones.map((p) => (
                        <a key={p.href} href={p.href} className="block text-sm text-foreground/60 hover:text-primary transition">{p.label}</a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent/50 shrink-0 mt-0.5">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-0.5">Working Hours</div>
                    <p className="text-sm text-foreground/60">{COMPANY.hours.weekday}</p>
                    <p className="text-sm text-foreground/60">{COMPANY.hours.weekend}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
