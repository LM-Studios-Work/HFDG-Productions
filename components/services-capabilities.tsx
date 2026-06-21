"use client"

import { Play, Check } from "lucide-react"
import { FilmCorners } from "@/components/film-ui"
import { serviceDetails } from "@/lib/site-data"

/** The full capability breakdown. Alternating editorial rows — copy on one
 *  side, a film still on the other — so it reads like a reel, not a card grid. */
export function ServicesCapabilities() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground">
      {/* Section header */}
      <div className="mx-auto max-w-[1600px] px-5 pt-20 lg:px-8 lg:pt-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">A</span> — Capabilities
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              What we make.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            Seven ways to work with us — each one handled end to end, from the
            first idea to the final frame.
          </p>
        </div>
      </div>

      {/* Rows */}
      <div className="mx-auto mt-16 max-w-[1600px]">
        {serviceDetails.map((s, i) => {
          const reversed = i % 2 === 1
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 border-t-2 border-foreground"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Copy */}
                <div
                  className={`flex flex-col justify-center px-5 py-12 lg:px-12 lg:py-20 ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm font-bold text-accent">{s.index}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {s.bestFor}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-pretty text-lg font-semibold leading-snug text-foreground">
                    {s.tagline}
                  </p>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span className="text-sm leading-snug text-foreground/90">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Film still */}
                <div
                  className={`group relative min-h-72 overflow-hidden border-t-2 border-foreground bg-card lg:min-h-0 lg:border-t-0 ${
                    reversed
                      ? "lg:order-1 lg:border-r-2"
                      : "lg:order-2 lg:border-l-2"
                  }`}
                >
                  <FilmCorners size={32} inset={16} className="z-20" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image || "/placeholder.svg"}
                    alt={s.imageAlt}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-5 top-5 flex items-center gap-2 rounded-sm border border-foreground/30 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                    <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" aria-hidden="true" />
                    Rec · {s.title}
                  </span>
                  <button
                    type="button"
                    className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 md:size-20"
                    aria-label={`Play ${s.title} reel`}
                  >
                    <Play className="size-5 fill-current md:size-6" />
                  </button>
                  <span className="absolute bottom-5 right-5 rounded-sm bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur">
                    {s.runtime}
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
