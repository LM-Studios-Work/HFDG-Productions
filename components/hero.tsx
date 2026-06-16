"use client"

import { ArrowRight } from "lucide-react"

/** The HFDG film-frame icon — a camera viewfinder bracket with a blinking red dot.
 *  Inspired by the DGC bracketed logo style. Used as the studio's signature mark. */
export function FilmFrameIcon({ className = "", dotPulse = false }: { className?: string; dotPulse?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Top-left bracket */}
        <path d="M2 12 L2 2 L12 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        {/* Top-right bracket */}
        <path d="M28 2 L38 2 L38 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        {/* Bottom-left bracket */}
        <path d="M2 28 L2 38 L12 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        {/* Bottom-right bracket */}
        <path d="M28 38 L38 38 L38 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        {/* Red recording dot — fill via Tailwind so CSS var resolves */}
        <circle
          cx="20"
          cy="20"
          r="5"
          className={`fill-accent ${dotPulse ? "animate-blink-dot" : ""}`}
        />
      </svg>
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col px-5 pt-28 lg:px-8 lg:pt-36"
    >
      <div className="mx-auto w-full max-w-[1600px] flex-1">
        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {/* Blinking red dot — the "recording" indicator */}
            <span
              className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot"
              aria-hidden="true"
            />
            Corporate Video — Real Estate — Commercial Content
          </p>
          <span className="rotate-[-3deg] rounded-sm border border-foreground/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            An affiliate of 35Film
          </span>
        </div>

        {/* Main headline */}
        <h1 className="mt-6 max-w-6xl text-pretty font-heading text-6xl font-extrabold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
          HFDG
          <br />
          <span className="text-stroke">Productions</span>
        </h1>

        {/* Sub copy + CTA row */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-pretty text-xl font-semibold leading-snug text-foreground md:text-2xl">
              We work with real estate developers, corporate brands and creative
              entrepreneurs across Africa and the Middle East.
            </p>
            <p className="mt-5 max-w-xl text-balance leading-relaxed text-muted-foreground">
              From a single hero film to a full content campaign, we turn your
              vision into footage that sells, shows and stays with people.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            {/* "Get in touch" — blinking dot inspired by the reference */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-foreground bg-foreground px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot group-hover:bg-accent-foreground" aria-hidden="true" />
              Get in touch
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/40 px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight transition-colors hover:border-foreground"
            >
              See our work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Sandwich-style scroll indicator — dotted line + animated arrow */}
      <div className="flex flex-col items-center gap-3 pb-10 pt-16" aria-hidden="true">
        {/* Dotted vertical line */}
        <div className="flex flex-col items-center gap-[5px]">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="inline-block h-[3px] w-[3px] rounded-full bg-muted-foreground/50"
            />
          ))}
        </div>
        {/* Bouncing arrow */}
        <span className="animate-scroll-bounce text-muted-foreground">
          <svg viewBox="0 0 16 16" fill="none" className="size-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2 L8 13 M3 8 L8 13 L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
          Scroll
        </p>
      </div>
    </section>
  )
}
