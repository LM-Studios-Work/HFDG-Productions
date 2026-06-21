import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LocationsHero } from "@/components/locations-hero"
import { LocationsGrid } from "@/components/locations-grid"

export const metadata: Metadata = {
  title: "Locations — Johannesburg, Jeddah, Lagos | HFDG Productions",
  description:
    "Based in Johannesburg, Jeddah, and Lagos, we operate across Africa and the Middle East. Wherever the project demands, our crew scales to meet it.",
}

export default function LocationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LocationsHero />
        <LocationsGrid />
      </main>
      <SiteFooter />
    </>
  )
}
