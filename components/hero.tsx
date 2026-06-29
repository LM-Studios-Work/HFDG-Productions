"use client"

import { useEffect, useRef, useState } from "react"

import { FocusScale, RecordDot, FilmCorners } from "@/components/film-ui"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const clock = useLiveClock()

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-background pt-20"
      aria-label="Home Hero"
    >


      {/* Massive Parallax Typography */}
      <div 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4 select-none"
      >
        <div
          className="flex flex-col items-center text-center animate-in fade-in zoom-in-95 slide-in-from-bottom-5 duration-1000 ease-out fill-mode-both"
        >
          <h1 className="font-heading text-[16vw] sm:text-[14vw] md:text-[12vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-foreground/[0.03] dark:text-foreground/[0.04]">
            HFDG
          </h1>
          <span className="font-heading text-[12vw] sm:text-[10vw] md:text-[8vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-foreground/[0.03] dark:text-foreground/[0.04] mt-[-2vw]">
            PRODUCTIONS
          </span>
        </div>
      </div>

      {/* Central Showreel Container */}
      <div
        className="relative z-20 w-[92vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] max-w-6xl aspect-[4/5] sm:aspect-video lg:aspect-[21/9] bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden group cursor-pointer animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200 ease-out fill-mode-both"
      >
        <img 
          src="/placeholder.svg" 
          alt="Showreel placeholder" 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" 
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-accent/50 group-hover:bg-accent/20">
            <div className="ml-2 w-0 h-0 border-y-[10px] sm:border-y-[12px] border-y-transparent border-l-[16px] sm:border-l-[20px] border-l-white transition-colors group-hover:border-l-white" />
          </div>
        </div>

        {/* Cinematic Inner Corners */}
        <FilmCorners size={32} inset={16} thickness={2} className="opacity-50 transition-opacity duration-500 group-hover:opacity-100 text-white" />

        {/* Viewfinder elements inside the reel */}
        <div className="absolute top-5 left-6 sm:top-8 sm:left-8 flex items-center gap-3 z-20">
          <RecordDot className="group-hover:animate-blink-dot" />
          <span className="font-mono text-[10px] sm:text-xs text-white/80 tracking-[0.2em] uppercase drop-shadow-md">Rec</span>
        </div>
        
        <div className="absolute bottom-5 right-6 sm:bottom-8 sm:right-8 z-20">
          <FocusScale className="scale-75 sm:scale-100 origin-bottom-right opacity-60 transition-opacity duration-500 group-hover:opacity-100 text-white drop-shadow-md" />
        </div>
      </div>

      {/* Hero Intro Text */}
      <div
        className="hidden sm:block relative z-20 mt-10 sm:mt-14 px-5 max-w-2xl text-center animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 ease-out fill-mode-both"
      >
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-4">
          Visuals that <span className="text-accent">Captivate.</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-muted-foreground text-balance mx-auto">
          We craft cinematic narratives for corporate brands, real estate developers, and creative visionaries across Africa and the Middle East.
        </p>
      </div>

      {/* Decorative Film Metadata (Bottom Info) */}
      <div className="hidden sm:flex absolute bottom-6 left-5 sm:left-8 z-30 flex-col gap-1 font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground uppercase">
        <span>ISO 800</span>
        <span>5600K</span>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 right-5 sm:right-8 z-30 flex flex-col items-end gap-1 font-mono text-[10px] sm:text-xs tabular-nums tracking-[0.2em] text-muted-foreground uppercase"
        aria-label="Current time"
      >
        <span>{clock}</span>
        <span>24 FPS</span>
      </div>
    </section>
  )
}
