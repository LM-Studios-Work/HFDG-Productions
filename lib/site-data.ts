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
  { value: "35Film", label: "Affiliated partner" },
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

/** ── Services page content ─────────────────────────────────────────────
 *  Full, detailed breakdown of every capability — used on /services.
 *  The shorter `services` array above still feeds the home + about previews. */
export type ServiceDetail = {
  slug: string
  index: string
  title: string
  /** One-line positioning shown under the title */
  tagline: string
  /** Longer paragraph */
  description: string
  /** Concrete things the client walks away with */
  deliverables: string[]
  /** Best-for line — who this is for */
  bestFor: string
  image: string
  imageAlt: string
  runtime: string
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "corporate-video",
    index: "01",
    title: "Corporate Video",
    tagline: "Make the company look as good as it actually is.",
    description:
      "Brand films, founder stories and internal content with a point of view. We turn the way you talk about your business into something people actually want to watch — built to win investors, recruits and customers.",
    deliverables: [
      "Brand & founder films",
      "Recruitment & culture videos",
      "Investor & pitch reels",
      "Internal comms & training",
    ],
    bestFor: "Brands, startups & enterprises",
    runtime: "2:30",
    image:
      "/placeholder.svg?height=1000&width=900&query=modern%20corporate%20founder%20interview%20cinematic%20film%20still%20moody",
    imageAlt: "Corporate brand film still — founder interview on set",
  },
  {
    slug: "real-estate-media",
    index: "02",
    title: "Real Estate Media",
    tagline: "Sell the space before it's even finished.",
    description:
      "Cinematic property and development films — aerials, walkthroughs and lifestyle reels that make a building feel like a place to live. The kind of footage developers use to pre-sell floors before breaking ground.",
    deliverables: [
      "Aerial & drone cinematography",
      "Property & unit walkthroughs",
      "Lifestyle & amenity reels",
      "Development launch films",
    ],
    bestFor: "Developers & agencies",
    runtime: "1:48",
    image:
      "/placeholder.svg?height=1000&width=900&query=luxury%20real%20estate%20high%20rise%20aerial%20golden%20hour%20cinematic",
    imageAlt: "Real estate development film still — aerial at golden hour",
  },
  {
    slug: "commercial-production",
    index: "03",
    title: "Commercial Production",
    tagline: "Concept to final color, in one house.",
    description:
      "Spots and campaigns built for broadcast, social and everything between. We handle the idea, the shoot and the post — so a single production day becomes a TV spot and a stack of social cutdowns.",
    deliverables: [
      "TV & broadcast spots",
      "Social-first cutdowns",
      "Concept, script & storyboard",
      "In-house color & sound",
    ],
    bestFor: "Agencies & consumer brands",
    runtime: "0:60",
    image:
      "/placeholder.svg?height=1000&width=900&query=luxury%20car%20commercial%20night%20city%20lights%20cinematic%20film%20still",
    imageAlt: "Commercial spot still — product at night with city lights",
  },
  {
    slug: "event-coverage",
    index: "04",
    title: "Event Coverage",
    tagline: "Capture the moment while it still matters.",
    description:
      "Multi-cam coverage of launches, conferences and live moments — cut and delivered fast. From a same-day highlight to a full recap film, we keep the energy of the room on screen.",
    deliverables: [
      "Multi-camera capture",
      "Same-day highlight edits",
      "Recap & sizzle films",
      "Live streaming",
    ],
    bestFor: "Launches & conferences",
    runtime: "3:05",
    image:
      "/placeholder.svg?height=1000&width=900&query=live%20event%20conference%20stage%20lights%20crowd%20cinematic%20film%20still",
    imageAlt: "Event coverage still — stage lights and live audience",
  },
  {
    slug: "music-video",
    index: "05",
    title: "Music Video",
    tagline: "Visuals that match the energy of the track.",
    description:
      "Artist-led music videos with direction, not just coverage. Treatment, shoot and edit built around the song — performance, narrative or something in between.",
    deliverables: [
      "Treatment & creative direction",
      "Performance & narrative shoots",
      "Location & set design",
      "Edit, grade & delivery",
    ],
    bestFor: "Artists & labels",
    runtime: "3:14",
    image:
      "/placeholder.svg?height=1000&width=900&query=neon%20music%20video%20artist%20performance%20night%20cinematic%20film%20still",
    imageAlt: "Music video still — neon-lit performance at night",
  },
  {
    slug: "social-content",
    index: "06",
    title: "Social Media Content",
    tagline: "Feed-native video, shot in batches.",
    description:
      "Short-form, platform-native content produced in efficient shoot days. One session becomes weeks of verticals, cut and captioned for the way people actually watch.",
    deliverables: [
      "Short-form verticals",
      "Batch-shot content days",
      "Platform-native edits",
      "Captions & motion graphics",
    ],
    bestFor: "Brands building a presence",
    runtime: "0:15",
    image:
      "/placeholder.svg?height=1000&width=900&query=vertical%20social%20media%20content%20shoot%20creator%20studio%20cinematic",
    imageAlt: "Social content still — vertical-format studio shoot",
  },
  {
    slug: "monthly-packages",
    index: "07",
    title: "Monthly Content Packages",
    tagline: "Always-on video, fully handled.",
    description:
      "A retainer for brands that need a steady stream of video. Recurring shoot days, a content calendar and priority scheduling — your channels stay fed without you chasing a crew every month.",
    deliverables: [
      "Recurring shoot days",
      "Content calendar & planning",
      "Priority scheduling",
      "Ongoing edits & revisions",
    ],
    bestFor: "Teams that ship constantly",
    runtime: "∞",
    image:
      "/placeholder.svg?height=1000&width=900&query=content%20calendar%20planning%20film%20crew%20studio%20cinematic%20workspace",
    imageAlt: "Monthly content still — planning a recurring shoot schedule",
  },
]

/** How we work — three-step process. */
export const processSteps = [
  {
    step: "01",
    title: "Consult",
    body: "We start with a conversation — your goals, your audience, your budget. You leave knowing exactly what we'd shoot, how, and what it'll deliver. No vague quotes.",
    points: ["Discovery call", "Creative direction", "Clear scope & quote"],
  },
  {
    step: "02",
    title: "Produce",
    body: "One team across pre-production, shoot and post. We plan the shoot, run the day and keep you in the loop — nothing gets lost in a handoff between agencies.",
    points: ["Pre-production & planning", "Direction & filming", "Edit, color & sound"],
  },
  {
    step: "03",
    title: "Deliver",
    body: "You get the finished film plus every cutdown you need, in the formats you need them. Revisions are built in, and the source stays yours.",
    points: ["Final films & cutdowns", "Built-in revisions", "All formats delivered"],
  },
]

/** Pricing anchors — tiers, not exact prices. */
export type Package = {
  name: string
  positioning: string
  anchor: string
  description: string
  features: string[]
  featured?: boolean
}

export const packages: Package[] = [
  {
    name: "Starter",
    positioning: "One film, done right",
    anchor: "Single project",
    description: "A focused, one-off film for a single goal — perfect for a first project or a one-time launch.",
    features: [
      "One shoot day",
      "One finished film",
      "Social cutdown included",
      "Licensed music & sound",
      "Up to 2 rounds of revisions",
    ],
  },
  {
    name: "Standard",
    positioning: "A campaign, not a clip",
    anchor: "Multi-deliverable",
    description: "Our most-chosen tier — a proper production day turned into a hero film and a full set of cutdowns.",
    features: [
      "Multi-day shoot",
      "Up to 3 finished films",
      "Aerial & drone coverage",
      "Full social cutdown set",
      "Color grade & sound mix",
      "Up to 3 rounds of revisions",
    ],
    featured: true,
  },
  {
    name: "Premium",
    positioning: "Always-on, fully handled",
    anchor: "Monthly retainer",
    description: "An ongoing partnership with a dedicated crew, a content calendar and priority turnaround.",
    features: [
      "Recurring monthly shoot days",
      "Dedicated director & crew",
      "Content calendar & strategy",
      "Unlimited platform cutdowns",
      "Priority turnaround",
      "Quarterly strategy review",
    ],
  },
]

/** Common questions, answered up front. */
export const serviceFaqs = [
  {
    q: "How much does a video cost?",
    a: "It depends on scope — a single social cutdown and a multi-day brand campaign aren't the same project. Our tiers give you a sense of the range, and after a quick consult you'll get a clear, fixed quote before anything is booked.",
  },
  {
    q: "How long does a project take?",
    a: "Most single films run two to four weeks from consult to final delivery. Larger campaigns and monthly retainers run on a schedule we set together. Need it faster? Premium and retainer clients get priority turnaround.",
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes. We're based in Johannesburg, Jeddah and Lagos and regularly shoot across Africa and the Middle East. Travel is scoped into the quote up front so there are no surprises.",
  },
  {
    q: "Do you handle concept and scripting?",
    a: "Always. Direction is the whole point. We can take a finished brief or build the concept, script and storyboard with you from scratch — whatever the project needs.",
  },
  {
    q: "Who owns the final footage?",
    a: "You do. You receive the finished films and the rights to use them. Raw source files and project archives can be included on request.",
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
