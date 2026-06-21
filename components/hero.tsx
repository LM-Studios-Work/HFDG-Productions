"use client"

import { useEffect, useState } from "react"
import { FocusScale } from "@/components/film-ui"

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

/** Six film frames that sit in a curved 3D arc beneath the title — like the DGC reference. */
const heroFrames = [
  "warehouse film set silhouette walking cinematic moody",
  "film crew lighting setup behind the scenes black and white",
  "dancers performing under red stage light cinematic",
  "hand holding vintage film camera in gloves cinematic",
  "silhouette in red lit doorway cinematic film still",
  "film studio set with equipment dark cinematic",
]

/** Builds the per-frame 3D transform so the strip curves like the inside of a
 *  cylinder: edge frames rotate toward the centre, sit slightly higher, recede
 *  and dim — giving the professional bowed-carousel look from the reference. */
function frameTransform(index: number, total: number) {
  const center = (total - 1) / 2
  const offset = index - center // negative = left, positive = right
  const rotateY = -offset * 9 // edges angle in toward the viewer (concave)
  const translateY = Math.abs(offset) * -10 // edges lift up, centre dips down
  const translateZ = Math.abs(offset) * -36 // edges recede into depth
  const scale = 1 - Math.abs(offset) * 0.03
  const opacity = 1 - Math.abs(offset) * 0.12
  return {
    transform: `rotateY(${rotateY}deg) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
    opacity,
  }
}

export function Hero() {
  const clock = useLiveClock()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0c0c0c]"
    >
      {/* Left Red Glow */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#E51A1A]/70 via-[#E51A1A]/20 to-transparent blur-xl z-30 mix-blend-screen" />

      {/* Right Red Glow */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#E51A1A]/70 via-[#E51A1A]/20 to-transparent blur-xl z-30 mix-blend-screen" />

      {/* Centered content stack — title sits ABOVE the frame row */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-8 px-6 py-28 sm:gap-10 sm:px-10 lg:px-16">
        {/* Title */}
        <h1
          className="text-balance text-center font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#EAEAEA] drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          HFDG Productions
        </h1>

        {/* Curved 3D film-frame carousel — bowed perspective like the reference */}
        <div
          className="-mt-2 w-full sm:-mt-6"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 40%" }}
        >
          <div
            className="flex items-center justify-center gap-3 sm:gap-4"
            style={{ transformStyle: "preserve-3d", transform: "rotateX(6deg)" }}
          >
            {heroFrames.map((q, i) => {
              const { transform, opacity } = frameTransform(i, heroFrames.length)
              return (
                <figure
                  key={i}
                  style={{ transform, opacity }}
                  className="group relative aspect-[3/4] w-1/6 min-w-0 flex-1 overflow-hidden rounded-sm bg-zinc-900 shadow-2xl shadow-black/60 ring-1 ring-white/10 transition-[transform,opacity] duration-500 will-change-transform"
                >
                  <img
                    src={`/placeholder.svg?height=640&width=480&query=${encodeURIComponent(q)}`}
                    alt=""
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  {/* subtle inner vignette to seat frames into the dark stage */}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </figure>
              )
            })}
          </div>
        </div>

        {/* Studio statement */}
        <p className="max-w-md text-balance text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-foreground/70 sm:text-xs">
          We are experts in the production of films, commercials and brand stories
          that captivate audiences across Africa and the Middle East.
        </p>

        {/* Focus ruler */}
        <FocusScale />
      </div>

      {/* Bottom-left language toggle */}
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
