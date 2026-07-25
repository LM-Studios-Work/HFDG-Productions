import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesIntro } from "@/components/services-intro"
import { ServicesCapabilities } from "@/components/services-capabilities"
import { ServicesProcess } from "@/components/services-process"
import { ServicesPackages } from "@/components/services-packages"
import { ServicesFaq } from "@/components/services-faq"
import { ServicesClosing } from "@/components/services-closing"

export const metadata: Metadata = {
  title: "Services — Corporate, Real Estate & Commercial Video | HFDG Productions",
  description:
    "From a single hero film to monthly content packages: corporate video, real estate media, commercial production, event coverage, music videos and social content. See how we work and where to start.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServicesIntro />
        <ServicesCapabilities />
        <ServicesProcess />
        <ServicesPackages />
        <ServicesFaq />
        <ServicesClosing />
      </main>
      <SiteFooter />
    </>
  )
}
