export const dynamic = "force-dynamic"

import type { Metadata } from "next"
import { getPayload } from "payload"
import configPromise from "@payload-config"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import { AboutFounder } from "@/components/about-founder"
import { AboutGallery } from "@/components/about-gallery"
import { AboutExpertise } from "@/components/about-expertise"

export const metadata: Metadata = {
  title: "About HFDG Productions: 10+ Years Behind the Lens | Affiliate of 35Film",
  description:
    "HFDG Productions is a filmmaker-led video studio with 10+ years of experience, based in Jeddah and Johannesburg. An affiliate of 35Film, creating corporate, real estate and commercial films across Africa and the Middle East.",
}

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise })

  let aboutData = null
  try {
    aboutData = await payload.findGlobal({
      slug: "about-page",
      depth: 1,
    })
  } catch {
    // Global might not be initialized
  }

  const { docs: mediaDocs } = await payload.find({
    collection: "media",
    limit: 20,
  })

  const potAroundMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("potaround"))
  const defaultPotAroundUrl = potAroundMedia?.url || "/api/media/file/PotAround.mp4"

  let heroMediaUrl = defaultPotAroundUrl
  let heroMediaType: "video" | "image" | "solid" = "video"

  if (typeof aboutData?.heroMedia === "object" && aboutData.heroMedia?.url) {
    heroMediaUrl = aboutData.heroMedia.url
    if (aboutData.heroMedia.mimeType?.startsWith("image/")) {
      heroMediaType = "image"
    } else {
      heroMediaType = "video"
    }
  }

  // Parse team members
  const teamMembers = aboutData?.teamMembers?.map((member: any) => ({
    name: member.name,
    role: member.role,
    photoUrl: typeof member.photo === "object" && member.photo?.url ? member.photo.url : undefined,
  }))

  // Parse gallery
  const gallery = aboutData?.gallery?.map((item: any) => ({
    imageUrl: typeof item.image === "object" && item.image?.url ? item.image.url : undefined,
    description: item.description,
  }))?.filter((item: any) => item.imageUrl)

  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero mediaUrl={heroMediaUrl} mediaType={heroMediaType} />
        <AboutStory />
        <AboutValues />
        <AboutFounder teamMembers={teamMembers || []} />
        <AboutGallery gallery={gallery || []} />
        <AboutExpertise />
      </main>
      <SiteFooter />
    </>
  )
}
