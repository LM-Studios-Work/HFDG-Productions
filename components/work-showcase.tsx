"use client"

import { Play, ArrowRight } from "lucide-react"
import { FilmFrameIcon } from "@/components/hero"

/** One full-width featured film with "View Our Work" underneath — Sandwich-style. */
export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-20">
      {/* The single full-width film */}
      <div className="group relative overflow-hidden border-y-2 border-foreground">
        <div className="w-full overflow-hidden bg-card video-block-responsive">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/placeholder.svg?height=900&width=1600&query=cinematic%20real%20estate%20and%20corporate%20film%20aerial%20golden%20hour%20Africa%20Middle%20East"
            alt="Still from the HFDG Productions showreel — selected work 2025"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Blinking REC badge — top left */}
        <span className="absolute left-5 top-5 flex items-center gap-2 rounded-sm border border-foreground/30 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur md:left-8 md:top-8">
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" aria-hidden="true" />
          Rec · Showreel 2025
        </span>

        {/* Center play button */}
        <button
          type="button"
          className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 md:size-28"
          aria-label="Play HFDG showreel"
        >
          <Play className="size-7 fill-current md:size-9" />
        </button>

        {/* Bottom runtime label */}
        <span className="absolute bottom-5 right-5 rounded-sm bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur md:bottom-8 md:right-8">
          0:52
        </span>
      </div>

      {/* Underneath the film: title line + VIEW OUR WORK link — sandwich-style */}
      <div className="border-b-2 border-foreground px-5 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left: headline */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">001</span> — Selected work
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              Stories worth
              <br />
              pressing play on.
            </h2>
          </div>

          {/* Right: the CTA — film icon + VIEW OUR WORK, sandwich-style */}
          <a
            href="/work"
            className="group inline-flex items-center gap-4 self-start md:self-end"
            aria-label="View our full portfolio"
          >
            <FilmFrameIcon
              className="size-12 text-foreground transition-colors duration-200 group-hover:text-accent md:size-14"
              dotPulse
            />
            <span className="font-mono text-sm font-extrabold uppercase tracking-[0.2em] transition-colors group-hover:text-accent">
              View our work
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
