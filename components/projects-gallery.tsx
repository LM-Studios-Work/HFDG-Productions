"use client"

import { Reveal } from "@/components/reveal"
import { InteractiveVideoStrip } from "@/components/interactive-video-strip"

// Types matching the Payload schema
export interface ProjectMedia {
  id: string
  url: string
  alt?: string
}

export interface Project {
  id: string
  title: string
  description: string
  video: ProjectMedia | string
  order: number
  credits?: {
    id?: string
    role: string
    names: { id?: string; name: string }[]
  }[]
}

interface ProjectsGalleryProps {
  projects: Project[]
}

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  if (!projects || projects.length === 0) {
    return (
      <section className="flex min-h-[50vh] flex-col items-center justify-center border-y-2 border-foreground px-5 py-24 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Portfolio Loading...
          </h2>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Please add projects in Payload CMS.
          </p>
        </Reveal>
      </section>
    )
  }

  return (
    <section className="flex flex-col border-t-2 border-foreground">
      {projects.map((project, index) => {
        // Extract the URL safely since Payload might return just the ID if depth is 0
        const videoUrl = typeof project.video === "object" && project.video?.url ? project.video.url : null

        return (
          <div
            key={project.id}
            className="flex flex-col border-b-2 border-foreground"
          >
            {/* Typography & Details (Top) */}
            <div className="flex w-full flex-col px-5 py-10 md:px-8 md:py-16 lg:px-12 bg-background">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-accent">
                    {String(index + 1).padStart(3, "0")}
                  </span>
                  <div className="h-[2px] w-12 bg-foreground/20" />
                </div>
                
                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <h2 className="max-w-3xl font-heading text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl text-pretty">
                    {project.title}
                  </h2>
                  <div className="max-w-xl">
                    <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Credits / Credentials */}
                {(() => {
                  const displayCredits = project.credits && project.credits.length > 0 
                    ? project.credits 
                    : [
                        { id: 'p1', role: 'VFX', names: [{ id: 'n1', name: 'Matt Wauhkonen' }, { id: 'n2', name: 'Wade Ivy' }] },
                        { id: 'p2', role: 'Graphic Designer', names: [{ id: 'n3', name: 'Darby Faccinto' }] },
                        { id: 'p3', role: 'Director', names: [{ id: 'n4', name: 'Seth Worley' }] },
                        { id: 'p4', role: 'Producer', names: [{ id: 'n5', name: 'Chris Lee' }] },
                      ]

                  return (
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-6">
                      {displayCredits.map((credit, i) => (
                        <div key={credit.id || i} className="flex flex-col gap-1.5">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            {credit.role}
                          </span>
                          <div className="flex flex-col gap-1">
                            {credit.names?.map((nameItem, j) => (
                              <span key={nameItem.id || j} className="text-sm font-medium text-white/90">
                                {nameItem.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })()}
              </Reveal>
            </div>

            {/* Cinematic Video Ribbon (Bottom) */}
            <Reveal>
              <div className="group relative w-full border-t-2 border-foreground aspect-[16/9] md:aspect-[2.65/1] overflow-hidden bg-card max-h-[600px]">
                {videoUrl ? (
                  <InteractiveVideoStrip
                    videoUrl={videoUrl}
                    title={project.title}
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-zinc-900">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Video Missing</span>
                  </div>
                )}


              </div>
            </Reveal>
          </div>
        )
      })}
    </section>
  )
}
