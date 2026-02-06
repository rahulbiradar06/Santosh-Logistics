// ── Centralised site data ──────────────────────────────────────────────
// Update addresses, phones, and map markers here – every page pulls from this file.

export const COMPANY = {
  name: 'Santosh Logistics Pvt. Ltd.',
  shortName: 'SANTOSH LOGISTICS',
  tagline: 'Prompt Delivery of Material.',
  description:
    'Reliable transportation, warehousing, and delivery with strong regional coverage across Maharashtra.',
  email: 'santoshlog.waluj@gmail.com',
  phones: [
    { label: '+91 92253 04131', href: 'tel:+919225304131' },
    { label: '+91 92253 04132', href: 'tel:+919225304132' },
    { label: '+91 92259 09193', href: 'tel:+919225909193' },
  ],
  hours: {
    weekday: 'Mon–Sat: 7:30 AM – 7:00 PM IST',
    weekend: 'Sunday: Closed',
  },
  url: 'https://santoshlogistics.in',
} as const

export interface OfficeLocation {
  name: string
  city: string
  address: string
  phones: string
  lat: number
  lng: number
  mapLink: string
}

export const OFFICES: OfficeLocation[] = [
  {
    name: 'Head Office',
    city: 'Sanpada, Navi Mumbai',
    address:
      '304, Kaveri Co.op. Hsg. Soc. Plot 73, Sector 05, Sanpada, Navi Mumbai – 400705',
    phones: '',
    lat: 19.0618929,
    lng: 73.0147636,
    mapLink: 'https://maps.app.goo.gl/swhx2XVaZFWnbhn39?g_st=ic',
  },
  {
    name: 'Booking Office – Mumbai Godown',
    city: 'Sanpada, Navi Mumbai',
    address:
      'Shri Sadguru Apartment, Shop No. 05, Plot No. 29/30, Sector 24, Behind Gupta Weigh Bridge, Turbhe Village, Sanpada, Navi Mumbai – 400705',
    phones: '92253 04131 / 88505 87808',
    lat: 19.0686387,
    lng: 73.0097404,
    mapLink: 'https://maps.app.goo.gl/Nff66zsa2ofJPTGz9?g_st=ic',
  },
  {
    name: 'Pune Godown',
    city: 'Chakan, Pune',
    address:
      'Plot No. 425/4, Mahalunge, Telegaon-Chakan Road, Next to Bajaj Auto Ltd., Chakan, Pune – 410501',
    phones: '92253 04133 / 95187 62843',
    lat: 18.7632075,
    lng: 73.8613203,
    mapLink:
      'https://www.google.com/maps/place/Chakan,+Maharashtra+410501/@18.7618079,73.8554341,3606m',
  },
  {
    name: 'Chh. Sambhajinagar Godown',
    city: 'Chh. Sambhajinagar',
    address:
      'B-14/1, MIDC, Waluj, FDC Road, Waluj, Chh. Sambhajinagar – 431136',
    phones: '92253 04132 / 92259 09193 / 93245 44211',
    lat: 19.8328217,
    lng: 75.2352672,
    mapLink: 'https://maps.app.goo.gl/HHj6Ypx4dXAwdZ5d6?g_st=ic',
  },
]

export const SERVICES = [
  {
    title: 'Full Truckload (FTL)',
    icon: 'Truck',
    description:
      'Dedicated trucks for large shipments with direct point-to-point delivery across Maharashtra.',
    features: [
      'Dedicated vehicle allocation',
      'Direct delivery – no hub stops',
      'GPS-enabled real-time tracking',
      'Flexible scheduling',
    ],
  },
  {
    title: 'Part Truckload (PTL)',
    icon: 'PackageCheck',
    description:
      'Cost-effective shared transport for smaller consignments with reliable transit times.',
    features: [
      'Consolidated shipments',
      'Regular scheduled routes',
      'Competitive pricing',
      'Proof of delivery',
    ],
  },
  {
    title: 'Warehousing & Distribution',
    icon: 'Warehouse',
    description:
      'Secure warehousing with inventory management and distribution across key industrial hubs.',
    features: [
      'Inventory tracking',
      'Stock management',
      'Strategic locations',
      'Security monitoring',
    ],
  },
  {
    title: 'Fleet Management',
    icon: 'Settings',
    description:
      'Modern GPS-enabled fleet with regular maintenance, fitness monitoring, and trained drivers.',
    features: [
      'GPS tracking system',
      'Regular maintenance checks',
      'Fitness & permit monitoring',
      'Route optimization',
    ],
  },
  {
    title: 'Last-Mile Delivery',
    icon: 'MapPin',
    description:
      'Reliable final-leg delivery ensuring your goods reach the exact destination on time.',
    features: [
      'Real-time status updates',
      'Digital proof of delivery',
      'Delivery confirmation',
      'Flexible time windows',
    ],
  },
  {
    title: 'Consignment Booking',
    icon: 'ClipboardList',
    description:
      'Streamlined LR booking with agent-wise management, commission calculation, and flexible payment.',
    features: [
      'LR number validation',
      'Agent-wise booking',
      'Commission calculation',
      'Multiple payment options',
    ],
  },
] as const

export const CLIENTS = [
  { name: 'Bajaj Auto Ltd.', logo: 'bajajauto.png' },
  { name: 'Varroc Engineering', logo: 'varroc.png' },
  { name: 'Endurance Technologies Pvt. Ltd.', logo: 'endurance.jpeg' },
  { name: 'Minda Sai Ltd.', logo: 'minda.png' },
  { name: 'Badve Engineering', logo: 'bavde.jpeg' },
  { name: 'Mask Polymers Pvt. Ltd.', logo: 'maskpolymers.jpeg' },
  { name: 'Roop Polymers Ltd.', logo: 'rooppolymers.jpeg' },
  { name: 'Kumar Elastomec Pvt. Ltd.', logo: 'kumar.jpeg' },
  { name: 'Thacker Brothers', logo: 'thackerbrothers.jpeg' },
  { name: 'Vidicast Engineering Pvt. Ltd.', logo: undefined },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'Santosh Logistics has been our trusted transport partner for years. Their reliability and professionalism are unmatched.',
    author: 'Operations Manager',
    company: 'Bajaj Auto Ltd.',
  },
  {
    quote:
      'Excellent service quality and always on-time deliveries. A dependable logistics partner for our business.',
    author: 'Supply Chain Head',
    company: 'Varroc Engineering',
  },
  {
    quote:
      'Their modern tracking systems and professional team make logistics management seamless.',
    author: 'Procurement Director',
    company: 'Minda Sai Ltd.',
  },
] as const

export const LEADERSHIP = [
  { name: 'Late Mr. Krishna B. Parab', role: 'Founder', img: 'krishna.png' },
  { name: 'Mr. Santosh Krishna Parab', role: 'Director', img: 'santosh.png' },
  { name: 'Mrs. Avanti Parab', role: 'Director', img: 'avanti.png' },
] as const

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
] as const
