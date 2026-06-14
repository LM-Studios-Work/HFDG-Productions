"use client"

import { useMemo, useState } from "react"
import { Play } from "lucide-react"
import { projects, type Category } from "@/lib/site-data"

const filters: Array<Category | "All"> = [
  "All",
  "Commercial",
  "Film",
  "Documentary",
  "Music",
]

export function WorkShowcase() {
  const [active, setActive] = useState<Category | "All">("All")

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="work" className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              001 — Selected work
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty text-4xl font-semibold tracking-tight md:text-5xl">
              Stories worth pressing play on.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
          {visible.map((project) => (
            <article key={project.id} className="group">
              <a href="#contact" className="block">
                <div className="relative overflow-hidden rounded-lg border border-border">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} for ${project.client}`}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-background/70 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-2">
                    <Play className="size-5 fill-foreground text-foreground" />
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-background/70 px-3 py-1 font-mono text-xs text-foreground backdrop-blur">
                    {project.runtime}
                  </span>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
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
      </div>
    </section>
  )
}
