import { Play, ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/lib/site-data"

export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-20 py-24 lg:py-32">
      {/* Section intro */}
      <div className="mx-auto mb-16 max-w-[1600px] px-5 lg:mb-24 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              001 — Selected work
            </p>
            <h2 className="mt-4 max-w-3xl text-pretty text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
              Stories worth
              <br />
              pressing play on.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            Press play, then follow the thread — each film leads somewhere
            deeper into the work we&apos;ve shot across Africa and the Middle
            East.
          </p>
        </div>
      </div>

      {/* Full-width films, stacked one after another with breathing room between */}
      <div className="flex flex-col gap-24 lg:gap-36">
        {projects.map((project, i) => (
          <FilmBlock key={project.id} project={project} index={i + 1} />
        ))}
      </div>

      {/* Tail link to the full portfolio */}
      <div className="mx-auto mt-24 max-w-[1600px] px-5 lg:mt-32 lg:px-8">
        <a
          href="/work"
          className="group inline-flex items-center gap-3 border-b-2 border-foreground pb-2 font-heading text-3xl font-extrabold uppercase tracking-tight transition-colors hover:border-accent hover:text-accent md:text-5xl"
        >
          View the full portfolio
          <ArrowUpRight className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:size-10" />
        </a>
      </div>
    </section>
  )
}

function FilmBlock({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const num = String(index).padStart(2, "0")

  return (
    <article className="group">
      {/* Meta row above the film */}
      <div className="mx-auto mb-6 flex max-w-[1600px] items-end justify-between gap-4 px-5 lg:px-8">
        <div className="flex items-end gap-4">
          <span
            aria-hidden="true"
            className="text-stroke select-none font-heading text-5xl font-extrabold leading-none tracking-tighter md:text-7xl"
          >
            {num}
          </span>
          <span className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {project.category}
          </span>
        </div>
        <span className="mb-1 hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
          {project.client} — {project.year}
        </span>
      </div>

      {/* The film: full width of the screen */}
      <a href={project.href} className="block">
        <div className="relative overflow-hidden border-y-2 border-foreground">
          <div className="aspect-video w-full overflow-hidden bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} — a ${project.category.toLowerCase()} film for ${project.client}`}
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

          {/* Center play button */}
          <span className="pointer-events-none absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 md:size-28">
            <Play className="size-7 fill-current md:size-9" />
          </span>

          {/* Quirky corner labels */}
          <span className="absolute left-4 top-4 rotate-[-3deg] rounded-md border-2 border-background bg-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-background md:left-6 md:top-6">
            Now playing
          </span>
          <span className="absolute bottom-4 right-4 rounded-md bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur md:bottom-6 md:right-6">
            {project.runtime}
          </span>
        </div>
      </a>

      {/* Text + link underneath the film */}
      <div className="mx-auto mt-8 max-w-[1600px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:gap-10">
          <a href={project.href} className="group/title md:col-span-7">
            <h3 className="text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight transition-colors group-hover/title:text-accent md:text-6xl">
              {project.title}
            </h3>
          </a>
          <div className="md:col-span-5">
            <p className="max-w-xl text-balance leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <a
              href={project.href}
              className="group/link mt-5 inline-flex items-center gap-2 font-heading text-sm font-extrabold uppercase tracking-tight"
            >
              <span className="border-b-2 border-foreground pb-0.5 transition-colors group-hover/link:border-accent group-hover/link:text-accent">
                {project.linkLabel}
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
