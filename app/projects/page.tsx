import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Contact } from "@/components/contact"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsCategories } from "@/components/projects-categories"
import { ProjectsCaseStudies } from "@/components/projects-case-studies"
import { FilmCorners } from "@/components/film-ui"

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      
      {/* Film Corners for the Hero */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-[60]" aria-hidden="true">
          <FilmCorners size={120} inset={16} className="hidden sm:block" />
          <FilmCorners size={70} inset={10} className="sm:hidden" />
        </div>
        <ProjectsHero />
      </div>

      <main>
        <ProjectsCategories />
        <ProjectsCaseStudies />
        <Contact />
      </main>
      
      <SiteFooter />
    </>
  )
}
