"use client"

import { Reveal } from "@/components/reveal"
import { Play } from "lucide-react"

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
                    
                    {/* Play Action (Visual Only) */}
                    <button className="mt-8 group/btn inline-flex items-center gap-4 text-left">
                      <span className="flex size-12 items-center justify-center rounded-full border-2 border-foreground transition-colors group-hover/btn:bg-foreground group-hover/btn:text-background">
                        <Play className="size-4 fill-current ml-1" />
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                        View Details
                      </span>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Cinematic Video Ribbon (Bottom) */}
            <Reveal>
              <div className="group relative w-full border-t-2 border-foreground aspect-[16/9] md:aspect-[2.65/1] overflow-hidden bg-card max-h-[600px]">
                {videoUrl ? (
                  <video
                    src={videoUrl}
                    title={project.title}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
