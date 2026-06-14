import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ClientMarquee } from "@/components/client-marquee"
import { WorkShowcase } from "@/components/work-showcase"
import { StudioStatement } from "@/components/studio-statement"
import { Approach } from "@/components/approach"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ClientMarquee />
        <WorkShowcase />
        <StudioStatement />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
