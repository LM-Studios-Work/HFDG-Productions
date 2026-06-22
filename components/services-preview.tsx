"use client"

import { Play, ArrowRight } from "lucide-react"
import { FilmFrameIcon } from "@/components/film-ui"

/** Section 003: Services preview — Video, manifesto copy, link to services page */
export function ServicesPreview() {
  return (
    <section id="services" className="scroll-mt-20">
      {/* The featured film — full width */}
      <div className="group relative overflow-hidden border-y-2 border-foreground">
        <div className="w-full overflow-hidden bg-card video-block-responsive">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/placeholder.svg?height=900&width=1600&query=cinematic%20film%20production%20team%20creative%20studio%20Africa%20modern%20workspace"
            alt="HFDG Productions services — what we do"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Blinking REC badge — top left */}
        <span className="absolute left-5 top-5 flex items-center gap-2 rounded-sm border border-foreground/30 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur md:left-8 md:top-8">
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" aria-hidden="true" />
          Rec · What we do
        </span>

        {/* Center play button */}
        <button
          type="button"
          className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 md:size-28"
          aria-label="Play services reel"
        >
          <Play className="size-7 fill-current md:size-9" />
        </button>

        {/* Bottom runtime label */}
        <span className="absolute bottom-5 right-5 rounded-sm bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur md:bottom-8 md:right-8">
          1:35
        </span>
      </div>

      {/* Underneath the film: headline + services link — sandwich-style */}
      <div className="border-b-2 border-foreground px-5 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left: headline */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">003</span> — What we offer
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              Craft over
              <br />
              compromise.
            </h2>
          </div>

          {/* Right: the CTA — film icon + text, sandwich-style */}
          <a
            href="/services"
            className="group inline-flex items-center gap-4 self-start md:self-end"
            aria-label="View all services"
          >
            <FilmFrameIcon
              className="size-12 text-foreground transition-colors duration-200 group-hover:text-accent md:size-14"
              dotPulse
            />
            <span className="font-mono text-sm font-extrabold uppercase tracking-[0.2em] transition-colors group-hover:text-accent">
              All services
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                <ArrowRight className="inline size-4" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
