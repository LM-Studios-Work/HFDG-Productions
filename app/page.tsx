import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ClientMarquee } from "@/components/client-marquee"
import { WorkShowcase } from "@/components/work-showcase"
import { StudioStatement } from "@/components/studio-statement"
import { LocationsStrip } from "@/components/locations-strip"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { FilmCorners } from "@/components/film-ui"

export default function Page() {
  return (
    <>
      <SiteHeader />
      {/* Hero frame: corner brackets frame the full hero viewport and scroll away naturally */}
      <div className="relative">
        {/* Corner brackets — absolute on this wrapper so they frame the full
            hero viewport and scroll away on scroll */}
        <div className="pointer-events-none absolute inset-0 z-[60]" aria-hidden="true">
          <FilmCorners size={120} inset={16} className="hidden sm:block" />
          <FilmCorners size={70} inset={10} className="sm:hidden" />
        </div>
        <Hero />
      </div>
      <main>
        <ClientMarquee />
        <WorkShowcase />
        <StudioStatement />
        <LocationsStrip />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
