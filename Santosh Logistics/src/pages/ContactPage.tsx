export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-accent/40 py-20">
        <div className="container-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Get in touch with our team for inquiries, quotes, or support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--primary]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[--primary] px-6 py-3 text-lg font-medium text-[--primary-foreground] shadow-sm hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              
              {/* Head Office */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Head Office</h3>
                <address className="not-italic space-y-2 text-foreground/70">
                  <p>304/ Kaveri Co-op Hsg. Soc. P. Ltd.,</p>
                  <p>Plot No. 73, Sec 05,</p>
                  <p>Sanpada, Navi Mumbai - 400705</p>
                  <p>Maharashtra, India</p>
                </address>
                <div className="mt-4 space-y-2">
                  <a href="mailto:santoshlog.waluj@gmail.com" className="block text-[--primary] hover:underline">
                    santoshlog.waluj@gmail.com
                  </a>
                  <a href="mailto:avisandy23@yahoo.co.in" className="block text-[--primary] hover:underline">
                    avisandy23@yahoo.co.in
                  </a>
                </div>
              </div>

              {/* Branch Offices */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Vashi Godown</h3>
                  <address className="not-italic space-y-2 text-foreground/70">
                    <p>Shri Sadguru Apt., Shop No. 05,</p>
                    <p>Plot No. 29/30, Sec. 24, Turbhe Village,</p>
                    <p>Sanpada, Navi Mumbai - 400705</p>
                    <div className="mt-2">
                      <a href="tel:+919225304131" className="text-[--primary] hover:underline">92253 04131</a> /
                      <a href="tel:+918850587808" className="text-[--primary] hover:underline ml-1">88505 87808</a> /
                      <a href="tel:+919930365009" className="text-[--primary] hover:underline ml-1">99303 65009</a>
                    </div>
                  </address>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Chakan Godown</h3>
                  <address className="not-italic space-y-2 text-foreground/70">
                    <p>01, Gurukrupa Complex,</p>
                    <p>Opp. Autocomp Co., Mahalunge Village,</p>
                    <p>Talegaon - Chakan Road, Pune - 410501</p>
                    <div className="mt-2">
                      <a href="tel:+919225304133" className="text-[--primary] hover:underline">92253 04133</a> /
                      <a href="tel:+919518762843" className="text-[--primary] hover:underline ml-1">95187 62843</a>
                    </div>
                  </address>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Aurangabad Godown</h3>
                  <address className="not-italic space-y-2 text-foreground/70">
                    <p>14/1, FDC Road,</p>
                    <p>MIDC Waluj, Aurangabad - 431036</p>
                    <div className="mt-2">
                      <a href="tel:+919225304132" className="text-[--primary] hover:underline">92253 04132</a> /
                      <a href="tel:+919225909193" className="text-[--primary] hover:underline ml-1">92259 09193</a>
                    </div>
                  </address>
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
