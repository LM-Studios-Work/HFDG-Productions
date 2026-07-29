export const dynamic = "force-dynamic"

import { getPayload } from "payload"
import configPromise from "@payload-config"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Contact } from "@/components/contact"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGallery, Project } from "@/components/projects-gallery"
import { FilmCorners } from "@/components/film-ui"

export default async function ProjectsPage() {
  // Fetch projects from Payload CMS
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: "projects",
    sort: "order", // Sort by the order field ascending
    depth: 1, // Ensure the video relations are populated with URLs
  })

  // Map to our expected frontend type
  const projects: Project[] = docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    video: doc.video,
    order: doc.order,
    credits: doc.credits,
  }))

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
        {/* Render the new highly creative cinematic portfolio stack */}
        <ProjectsGallery projects={projects} />
        
        <Contact />
      </main>
      
      <SiteFooter />
    </>
  )
}
