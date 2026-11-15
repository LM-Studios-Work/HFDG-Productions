export const dynamic = "force-dynamic"

import type { Metadata } from "next"
import { getPayload } from "payload"
import configPromise from "@payload-config"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesIntro } from "@/components/services-intro"
import { ServicesCapabilities } from "@/components/services-capabilities"
import { ServicesProcess } from "@/components/services-process"
import { ServicesPackages } from "@/components/services-packages"
import { ServicesFaq } from "@/components/services-faq"
import { ServicesClosing } from "@/components/services-closing"

export const metadata: Metadata = {
  title: "Services: Corporate, Real Estate & Commercial Video | HFDG Productions",
  description:
    "From a single hero film to monthly content packages: corporate video, real estate media, commercial production, event coverage, music videos and social content. See how we work and where to start.",
}

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise })

  let servicesData: any = null
  try {
    servicesData = await payload.findGlobal({
      slug: "services-page",
      depth: 1,
    })
  } catch {
    // Global might not be initialized yet
  }

  // Fetch uploaded media from Payload as smart fallbacks
  let mediaDocs: any[] = []
  try {
    const mediaRes = await payload.find({
      collection: "media",
      limit: 20,
    })
    mediaDocs = mediaRes.docs || []
  } catch {
    // Fallback if media collection query fails
  }

  const potAroundMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("potaround"))
  const fightMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("fight"))
  const agentsMedia = mediaDocs.find((m: any) => m.filename?.toLowerCase().includes("agents"))

  const defaultPotAroundUrl = potAroundMedia?.url || "/api/media/file/PotAround.mp4"
  const defaultServicesUrl = fightMedia?.url || "/api/media/file/Fight%20Sports%20Centre.mp4"
  const defaultAgentsUrl = agentsMedia?.url || "/api/media/file/The%20Agents%20Full%20Hd.mp4"

  const resolveUrl = (field: any): string | null => {
    if (!field) return null
    if (typeof field === "object" && field.url) return field.url
    if (typeof field === "string") return field
    return null
  }

  const serviceVideos: Record<string, string> = {}

  // Music video (SVC 05) - if set in CMS, use it; otherwise use smart fallback so it always works immediately!
  const cmsMusicVideoUrl = resolveUrl(servicesData?.musicVideo)
  serviceVideos["music-video"] = cmsMusicVideoUrl || defaultAgentsUrl || defaultPotAroundUrl

  // Other optional service videos from direct CMS fields
  if (resolveUrl(servicesData?.corporateVideo)) {
    serviceVideos["corporate-video"] = resolveUrl(servicesData.corporateVideo)!
  }
  if (resolveUrl(servicesData?.realEstateVideo)) {
    serviceVideos["real-estate-media"] = resolveUrl(servicesData.realEstateVideo)!
  }
  if (resolveUrl(servicesData?.commercialVideo)) {
    serviceVideos["commercial-production"] = resolveUrl(servicesData.commercialVideo)!
  }
  if (resolveUrl(servicesData?.eventCoverageVideo)) {
    serviceVideos["event-coverage"] = resolveUrl(servicesData.eventCoverageVideo)!
  }
  if (resolveUrl(servicesData?.socialContentVideo)) {
    serviceVideos["social-content"] = resolveUrl(servicesData.socialContentVideo)!
  }
  if (resolveUrl(servicesData?.retainedVideo)) {
    serviceVideos["full-service-retained"] = resolveUrl(servicesData.retainedVideo)!
  }

  // Also support custom serviceVideos list from CMS
  if (Array.isArray(servicesData?.serviceVideos)) {
    for (const item of servicesData.serviceVideos) {
      const url = resolveUrl(item.video)
      if (item.serviceSlug && url) {
        serviceVideos[item.serviceSlug] = url
      }
    }
  }

  return (
    <>
      <SiteHeader />
      <main>
        <ServicesIntro />
        <ServicesCapabilities serviceVideos={serviceVideos} />
        <ServicesProcess />
        <ServicesPackages />
        <ServicesFaq />
        <ServicesClosing />
      </main>
      <SiteFooter />
    </>
  )
}
