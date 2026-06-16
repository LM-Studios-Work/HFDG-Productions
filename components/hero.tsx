"use client"

import { useEffect, useRef, useState } from "react"
import { FocusScale, RecordDot } from "@/components/film-ui"

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

function useLiveClock() {
  const [time, setTime] = useState("")
  useEffect(() => {
    function tick() {
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, "0")
      const mm = String(now.getMinutes()).padStart(2, "0")
      const ss = String(now.getSeconds()).padStart(2, "0")
      setTime(`${hh}:${mm}:${ss}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function Hero() {
  const scaleRef = useRef<HTMLDivElement>(null)
  const [scaleOpacity, setScaleOpacity] = useState(1)
  const clock = useLiveClock()

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY
      // Start fading at 60px scroll, fully gone by 300px
      const opacity = Math.max(0, 1 - (scrollY - 60) / 240)
      setScaleOpacity(opacity)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col px-5 pt-20 lg:px-8 lg:pt-28"
    >


      <div className="relative z-20 mx-auto w-full max-w-[1600px] flex-1 flex flex-col justify-center md:block -translate-y-[5%] md:translate-y-0">
        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {/* Blinking red dot — the "recording" indicator */}
            <RecordDot />
            Corporate Video · Real Estate · Commercial Content
          </p>
        </div>

        {/* Main headline */}
        <h1 className="mt-6 max-w-6xl text-pretty font-heading text-[2.5rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
          HFDG
          <br />
          <span className="text-foreground">Productions</span>
        </h1>

        {/* Sub copy */}
        <div className="mt-12 max-w-3xl">
          <p className="text-pretty text-xl font-semibold leading-snug text-foreground md:text-2xl">
            We work with real estate developers, corporate brands and creative
            entrepreneurs across Africa and the Middle East.
          </p>
          <p className="mt-5 max-w-xl text-balance leading-relaxed text-muted-foreground">
            From a single hero film to a full content campaign, we turn your
            vision into footage that sells, shows and stays with people.
          </p>
        </div>
      </div>

      {/* Focus-scale ruler — laptop+ only, fades out on scroll */}
      <div
        ref={scaleRef}
        className="relative z-20 hidden md:flex justify-center pb-10 pt-16 transition-opacity duration-75"
        style={{ opacity: scaleOpacity }}
      >
        <FocusScale />
      </div>

      {/* Live clock — bottom-right, shifted 3% up-left diagonally */}
      <div
        className="pointer-events-none absolute bottom-6 right-7 z-20 font-mono text-sm tabular-nums tracking-widest text-foreground/70 sm:text-base"
        aria-label="Current time"
      >
        {clock}
      </div>
    </section>
  )
}
