"use client"

import { ArrowRight } from "lucide-react"
import { FilmCorners, FocusScale, RecordDot } from "@/components/film-ui"

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
      {/* Viewfinder corner brackets — fixed to the screen edges so all four corners
          sit at the actual viewport corners, top-left through bottom-right */}
      <div className="pointer-events-none fixed inset-0 z-40" aria-hidden="true">
        <FilmCorners size={36} inset={16} className="hidden sm:block" />
        <FilmCorners size={22} inset={10} className="sm:hidden" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1600px] flex-1">
        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {/* Blinking red dot — the "recording" indicator */}
            <RecordDot />
            Corporate Video · Real Estate · Commercial Content
          </p>
          <span className="rotate-[-3deg] rounded-sm border border-accent/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent/90">
            An affiliate of 35Film
          </span>
        </div>

        {/* Main headline */}
        <h1 className="mt-6 max-w-6xl text-pretty font-heading text-[2.5rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
          HFDG
          <br />
          <span className="text-foreground">Productions</span>
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
              className="group inline-flex items-center gap-3 rounded-full border-2 border-accent bg-accent px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight text-accent-foreground transition-colors hover:bg-transparent hover:text-accent"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent-foreground animate-blink-dot group-hover:bg-accent" aria-hidden="true" />
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

      {/* Focus-scale ruler — camera focus pull motif from the reference */}
      <div className="relative z-20 flex justify-center pb-10 pt-16">
        <FocusScale />
      </div>
    </section>
  )
}
