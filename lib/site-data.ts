export type Category = "Corporate" | "Real Estate" | "Commercial" | "Brand"

export type Project = {
  id: string
  title: string
  client: string
  category: Category
  year: string
  runtime: string
  image: string
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
    image:
      "/placeholder.svg?height=900&width=1600&query=luxury%20car%20driving%20at%20night%20city%20lights%20cinematic%20commercial",
  },
  {
    id: "the-residences",
    title: "The Residences",
    client: "Coastal Living",
    category: "Real Estate",
    year: "2024",
    runtime: "1:20",
    image:
      "/luxury-waterfront-villa-interior-golden-hour-cinem.jpg",
  },
  {
    id: "built-different",
    title: "Built Different",
    client: "Sahara Steel",
    category: "Corporate",
    year: "2024",
    runtime: "1:54",
    image:
      "/industrial-construction-site-workers-cinematic-fil.jpg",
  },
  {
    id: "taste-of-home",
    title: "Taste of Home",
    client: "Terra Foods",
    category: "Commercial",
    year: "2024",
    runtime: "1:10",
    image:
      "/food-brand-commercial-warm-kitchen-cinematic-film-.jpg",
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
  { value: "200+", label: "Films delivered" },
  { value: "14", label: "Countries shot in" },
  { value: "11", label: "Industry awards" },
  { value: "8", label: "Years in motion" },
]

export const services = [
  {
    title: "Corporate Video",
    description:
      "Brand films, founder stories and internal content that make your company look as good as it actually is.",
  },
  {
    title: "Real Estate",
    description:
      "Cinematic property and development films — aerials, walkthroughs and lifestyle reels that sell the space.",
  },
  {
    title: "Commercial Content",
    description:
      "Spots and campaigns built for broadcast, social and everything in between — concept to final color.",
  },
  {
    title: "Post & Color",
    description:
      "An in-house finishing suite for edit, sound design, color grade and delivery in any format.",
  },
]
