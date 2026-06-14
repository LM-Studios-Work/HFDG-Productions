import { Play } from "lucide-react"
import { projects } from "@/lib/site-data"

export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto mb-12 max-w-[1600px] px-5 lg:mb-16 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              001 — Selected work
            </p>
            <h2 className="mt-4 max-w-3xl text-pretty text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
              Stories worth pressing play on.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            A look at recent corporate, real estate and commercial work shot
            across Africa and the Middle East.
          </p>
        </div>
      </div>

      {/* Full-width, two videos side by side, no inner padding between them */}
      <div className="grid grid-cols-1 gap-0 border-y-2 border-foreground md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className={`group border-foreground ${
              i % 2 === 0 ? "md:border-r-2" : ""
            } ${i >= 2 ? "border-t-2" : ""} ${i === 1 ? "border-t-2 md:border-t-0" : ""}`}
          >
            <a href="#contact" className="block">
              <div className="relative overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} for ${project.client}`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <span className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 md:size-20">
                  <Play className="size-6 fill-current" />
                </span>

                <span className="absolute bottom-4 left-4 rounded-md bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur">
                  {project.runtime}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 px-5 py-6 lg:px-8">
                <div>
                  <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.client}
                  </p>
                </div>
                <div className="text-right font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  <p>{project.category}</p>
                  <p className="mt-1">{project.year}</p>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
