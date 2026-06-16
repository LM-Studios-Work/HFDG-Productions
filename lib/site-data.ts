export type Category = "Corporate" | "Real Estate" | "Commercial" | "Music Video"

export type Project = {
  id: string
  title: string
  client: string
  category: Category
  year: string
  runtime: string
  image: string
  /** Short line that lives underneath the film */
  summary: string
  /** Where the film links to — a deeper page of the site */
  href: string
  /** Label for the link underneath the film */
  linkLabel: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "skyline-towers",
    title: "Skyline Towers",
    client: "Meridian Developments",
    category: "Real Estate",
    year: "2025",
    runtime: "1:48",
    featured: true,
    summary:
      "A 40-storey launch film shot across Jeddah at golden hour — the reel the developer used to pre-sell the top six floors before breaking ground.",
    href: "/work/real-estate",
    linkLabel: "See real estate work",
    image:
      "/placeholder.svg?height=900&width=1600&query=luxury%20high-rise%20development%20aerial%20at%20dusk%20cinematic%20film%20still",
  },
  {
    id: "future-of-work",
    title: "The Future of Work",
    client: "Atlas Group",
    category: "Corporate",
    year: "2025",
    runtime: "2:30",
    featured: true,
    summary:
      "A founder-led brand film for an investor roadshow. They closed their round 30 days after the first screening.",
    href: "/work/corporate",
    linkLabel: "See corporate work",
    image:
      "/placeholder.svg?height=900&width=1600&query=modern%20corporate%20office%20team%20meeting%20cinematic%20film%20still",
  },
  {
    id: "drive-the-city",
    title: "Drive the City",
    client: "Vesper Automotive",
    category: "Commercial",
    year: "2024",
    runtime: "0:60",
    summary:
      "A 60-second broadcast spot, concept to final color in-house — built to run on TV and cut down for social in a single shoot.",
    href: "/work/commercial",
    linkLabel: "See commercial work",
    image:
      "/placeholder.svg?height=900&width=1600&query=luxury%20car%20driving%20at%20night%20city%20lights%20cinematic%20commercial",
  },
  {
    id: "midnight-run",
    title: "Midnight Run",
    client: "Kola Vibes",
    category: "Music Video",
    year: "2024",
    runtime: "3:14",
    summary:
      "A neon-soaked music video shot overnight in Lagos — three locations, one camera car, zero sleep.",
    href: "/work/music-videos",
    linkLabel: "See music videos",
    image:
      "/placeholder.svg?height=900&width=1600&query=neon%20night%20music%20video%20lagos%20street%20cinematic%20film%20still",
  },
]

export const clients = [
  "Meridian Developments",
  "Atlas Group",
  "Vesper",
  "Terra Foods",
  "Coastal Living",
  "Sahara Steel",
  "Nile Capital",
  "Oryx Hospitality",
]

export const stats = [
  { value: "10+", label: "Years behind the lens" },
  { value: "200+", label: "Films delivered" },
  { value: "3", label: "Cities, one crew" },
  { value: "35", label: "Affiliate of 35Film" },
]

export const services = [
  {
    title: "Corporate Video",
    description:
      "Brand films, founder stories and internal content that make your company look as good as it actually is.",
  },
  {
    title: "Real Estate Media",
    description:
      "Cinematic property and development films — aerials, walkthroughs and lifestyle reels that sell the space.",
  },
  {
    title: "Commercial Production",
    description:
      "Spots and campaigns built for broadcast, social and everything in between — concept to final color.",
  },
  {
    title: "Event Coverage",
    description:
      "Multi-cam coverage of launches, conferences and live moments, cut and delivered while it still matters.",
  },
  {
    title: "Music Video",
    description:
      "Artist-led visuals with a point of view — direction, shoot and edit that match the energy of the track.",
  },
  {
    title: "Social & Monthly Packages",
    description:
      "Always-on content packages that keep your channels fed with sharp, on-brand video every month.",
  },
]

/** Locations HFDG operates across (per the brief) */
export const locations = [
  { city: "Johannesburg", country: "RSA", status: "active" as const },
  { city: "Jeddah", country: "KSA", status: "active" as const },
  { city: "Lagos", country: "NG", status: "active" as const },
  { city: "Riyadh", country: "KSA", status: "soon" as const },
  { city: "Berlin", country: "DE", status: "soon" as const },
]

/** The rest of the site — linked from the home page, built later */
export const sitePages = [
  {
    index: "01",
    title: "Portfolio",
    href: "/work",
    blurb: "Corporate, real estate, commercial and music video work.",
  },
  {
    index: "02",
    title: "Services",
    href: "/services",
    blurb: "From a single hero film to monthly content packages.",
  },
  {
    index: "03",
    title: "About",
    href: "/about",
    blurb: "10+ years behind the lens. An affiliate of 35Film.",
  },
  {
    index: "04",
    title: "Locations",
    href: "/locations",
    blurb: "Johannesburg, Jeddah and Lagos — Riyadh and Berlin soon.",
  },
  {
    index: "05",
    title: "Case Studies",
    href: "/case-studies",
    blurb: "Not just the films — what they did for the client.",
  },
  {
    index: "06",
    title: "Contact",
    href: "#contact",
    blurb: "Book a consultation or send a WhatsApp.",
  },
]
