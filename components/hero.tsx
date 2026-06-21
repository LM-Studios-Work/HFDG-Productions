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
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0c0c0c] pt-20"
    >
      {/* Left Red Glow */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#E51A1A]/70 via-[#E51A1A]/20 to-transparent blur-xl z-30 mix-blend-screen" />
      
      {/* Right Red Glow */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#E51A1A]/70 via-[#E51A1A]/20 to-transparent blur-xl z-30 mix-blend-screen" />

      {/* Hero Text Background Layer */}
      <div className="absolute inset-x-0 top-[28%] flex justify-center z-10 select-none">
        <h1 
          className="font-heading text-[11vw] font-black uppercase leading-none tracking-tight text-[#EAEAEA] drop-shadow-2xl"
          style={{ fontStretch: "expanded" }}
        >
          HFDG PRODUCTIONS
        </h1>
      </div>

      {/* 2D Image Arc Carousel */}
      <div className="relative z-20 mt-[35vh] flex justify-center items-center w-full px-4">
        <div className="flex justify-center items-center w-full gap-4 sm:gap-6 lg:gap-8">
          
          {/* Far Left Image */}
          <div className="hidden sm:block w-[14vw] aspect-[4/5] bg-zinc-900 shrink-0 overflow-hidden rounded-sm opacity-50 mix-blend-luminosity grayscale">
            <img src="/placeholder.svg" alt="" className="w-full h-full object-cover" />
          </div>
          
          {/* Mid Left Image */}
          <div className="w-[20vw] sm:w-[18vw] aspect-[4/5] bg-zinc-900 shrink-0 overflow-hidden rounded-sm opacity-80">
            <img src="/placeholder.svg" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Center Image */}
          <div className="w-[45vw] sm:w-[26vw] aspect-[4/5] bg-zinc-900 shrink-0 overflow-hidden shadow-2xl rounded-sm z-30">
            <img src="/placeholder.svg" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Mid Right Image */}
          <div className="w-[20vw] sm:w-[18vw] aspect-[4/5] bg-zinc-900 shrink-0 overflow-hidden rounded-sm opacity-80">
            <img src="/placeholder.svg" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Far Right Image */}
          <div className="hidden sm:block w-[14vw] aspect-[4/5] bg-zinc-900 shrink-0 overflow-hidden rounded-sm opacity-50 mix-blend-luminosity grayscale">
            <img src="/placeholder.svg" alt="" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-6 left-7 z-30 font-mono text-sm tracking-widest text-foreground/70 sm:text-base">
        EN UA
      </div>

      {/* Live clock — bottom-right */}
      <div
        className="pointer-events-none absolute bottom-6 right-7 z-30 font-mono text-sm tabular-nums tracking-widest text-foreground/70 sm:text-base"
        aria-label="Current time"
      >
        {clock}
      </div>
    </section>
  )
}
