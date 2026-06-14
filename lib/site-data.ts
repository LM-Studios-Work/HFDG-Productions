export type Category = "Commercial" | "Film" | "Documentary" | "Music"

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
    id: "atlas-skyline",
    title: "Above the Line",
    client: "Atlas Aerospace",
    category: "Commercial",
    year: "2025",
    runtime: "1:48",
    featured: true,
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20aerial%20city%20skyline%20at%20dusk%20moody%20film%20still",
  },
  {
    id: "northern-light",
    title: "Northern Light",
    client: "Hverfa Travel",
    category: "Documentary",
    year: "2025",
    runtime: "12:30",
    featured: true,
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20arctic%20landscape%20aurora%20documentary%20film%20still%20moody",
  },
  {
    id: "midnight-run",
    title: "Midnight Run",
    client: "Vesper Automotive",
    category: "Commercial",
    year: "2024",
    runtime: "0:60",
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20luxury%20car%20driving%20at%20night%20neon%20reflections%20film%20still",
  },
  {
    id: "the-quiet-hours",
    title: "The Quiet Hours",
    client: "A24 Shorts",
    category: "Film",
    year: "2024",
    runtime: "9:12",
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20portrait%20of%20woman%20in%20warm%20window%20light%20film%20still%20moody",
  },
  {
    id: "echoes",
    title: "Echoes",
    client: "Lume Records",
    category: "Music",
    year: "2024",
    runtime: "3:54",
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20music%20video%20concert%20stage%20smoke%20dramatic%20lighting%20film%20still",
  },
  {
    id: "groundwork",
    title: "Groundwork",
    client: "Terra Foods",
    category: "Commercial",
    year: "2024",
    runtime: "1:20",
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20farm%20fields%20golden%20hour%20hands%20harvesting%20film%20still",
  },
  {
    id: "the-makers",
    title: "The Makers",
    client: "Hand & Hammer",
    category: "Documentary",
    year: "2023",
    runtime: "18:05",
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20craftsman%20workshop%20warm%20light%20documentary%20film%20still",
  },
  {
    id: "afterglow",
    title: "Afterglow",
    client: "Nocta Studios",
    category: "Music",
    year: "2023",
    runtime: "4:21",
    image:
      "/placeholder.svg?height=900&width=1600&query=cinematic%20moody%20portrait%20singer%20colored%20gel%20lighting%20film%20still",
  },
]

export const clients = [
  "Atlas Aerospace",
  "Vesper",
  "A24",
  "Terra Foods",
  "Lume Records",
  "Hverfa",
  "Nocta",
  "Hand & Hammer",
]

export const stats = [
  { value: "120+", label: "Films delivered" },
  { value: "38", label: "Countries shot in" },
  { value: "14", label: "Industry awards" },
  { value: "9", label: "Years in motion" },
]

export const services = [
  {
    title: "Commercials",
    description:
      "Brand films and spots built for broadcast, social and everything in between — concept to final color.",
  },
  {
    title: "Documentary",
    description:
      "Long-form storytelling with a journalist's eye and a cinematographer's heart, shot anywhere on earth.",
  },
  {
    title: "Branded Content",
    description:
      "Episodic series and content systems that keep audiences coming back, not just clicking once.",
  },
  {
    title: "Post & Color",
    description:
      "An in-house finishing suite for edit, sound design, color grade and delivery in any format.",
  },
]
