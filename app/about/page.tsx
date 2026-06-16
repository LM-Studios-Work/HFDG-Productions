import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import { AboutFounder } from "@/components/about-founder"
import { AboutGallery } from "@/components/about-gallery"
import { AboutExpertise } from "@/components/about-expertise"

export const metadata: Metadata = {
  title: "About HFDG Productions — 10+ Years Behind the Lens | Affiliate of 35Film",
  description:
    "HFDG Productions is a filmmaker-led video studio with 10+ years of experience, based in Jeddah and Johannesburg. An affiliate of 35Film, creating corporate, real estate and commercial films across Africa and the Middle East.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutFounder />
        <AboutGallery />
        <AboutExpertise />
      </main>
      <SiteFooter />
    </>
  )
}
