export const dynamic = "force-dynamic"

import { getPayload } from "payload"
import configPromise from "@payload-config"

import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ClientMarquee } from "@/components/client-marquee"
import { WorkShowcase } from "@/components/work-showcase"
import { StudioStatement } from "@/components/studio-statement"
import { ServicesPreview } from "@/components/services-preview"
import { LocationsStrip } from "@/components/locations-strip"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { FilmCorners } from "@/components/film-ui"

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  // Try to fetch the HomePage global from Payload CMS
  let homeData = null
  try {
    homeData = await payload.findGlobal({
      slug: "home-page",
      depth: 1,
    })
  } catch {
    // Global might not be initialized or migrated yet
  }

  // Fetch uploaded media from Payload as smart fallbacks
  const { docs: mediaDocs } = await payload.find({
    collection: "media",
    limit: 20,
  })

  const potAroundMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("potaround"))
  const fightMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("fight"))
  const carMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("car video")) || mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("car"))
  
  const defaultPotAroundUrl = potAroundMedia?.url || "/api/media/file/PotAround.mp4"
  const defaultServicesUrl = fightMedia?.url || "/api/media/file/Fight%20Sports%20Centre.mp4"
  const defaultCarUrl = carMedia?.url || "/api/media/file/car%20video.mp4"

  const heroVideoUrl =
    typeof homeData?.heroVideo === "object" && homeData?.heroVideo?.url
      ? homeData.heroVideo.url
      : defaultPotAroundUrl

  const workVideoUrl =
    typeof homeData?.featuredWorkVideo === "object" && homeData?.featuredWorkVideo?.url
      ? homeData.featuredWorkVideo.url
      : defaultServicesUrl // The boxing video

  const servicesVideoUrl =
    typeof homeData?.servicesVideo === "object" && homeData?.servicesVideo?.url
      ? homeData.servicesVideo.url
      : defaultCarUrl // The car video

  return (
    <>
      <SiteHeader />
      {/* Hero frame: corner brackets frame the full hero viewport and scroll away naturally */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-[60]" aria-hidden="true">
          <FilmCorners size={120} inset={16} className="hidden sm:block" />
          <FilmCorners size={70} inset={10} className="sm:hidden" />
        </div>
        <Hero />
      </div>
      <main>
        <ClientMarquee />
        <WorkShowcase videoUrl={workVideoUrl} />
        <StudioStatement />
        <ServicesPreview videoUrl={servicesVideoUrl} />
        <LocationsStrip />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
