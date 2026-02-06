import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Phone } from 'lucide-react'
import { COMPANY } from '@/data/siteData'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container-xl">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-8xl font-extrabold text-primary/20 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-foreground/60 text-lg mb-10">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-md hover:-translate-y-0.5 transition-all"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-base font-medium text-foreground hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Contact Us
            </Link>
            <a
              href={COMPANY.phones[0].href}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-base font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
