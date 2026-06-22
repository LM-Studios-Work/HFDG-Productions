"use client"

import { useEffect, useState } from "react"
import { FocusScale } from "@/components/film-ui"

/** The HFDG film-frame icon — a camera viewfinder bracket with a blinking red dot. */
export function FilmFrameIcon({ className = "", dotPulse = false }: { className?: string; dotPulse?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M2 12 L2 2 L12 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        <path d="M28 2 L38 2 L38 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        <path d="M2 28 L2 38 L12 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        <path d="M28 38 L38 38 L38 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
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

// 5 placeholder stills — each a different cinematic scene
const stills = [
  { q: "silhouette dancer red stage light cinematic", w: 420, h: 520 },
  { q: "film crew camera operator behind scenes", w: 420, h: 520 },
  { q: "hand holding film camera red glow cinematic", w: 420, h: 520 },
  { q: "woman walking warehouse cinematic moody", w: 420, h: 520 },
  { q: "film lighting rig studio setup dark", w: 420, h: 520 },
]

export function Hero() {
  const clock = useLiveClock()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0c0c0c]"
    >
      {/* Left red glow column */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28"
        style={{
          background:
            "linear-gradient(to right, oklch(0.42 0.22 27 / 0.85) 0%, oklch(0.42 0.22 27 / 0.28) 55%, transparent 100%)",
        }}
      />
      {/* Right red glow column */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28"
        style={{
          background:
            "linear-gradient(to left, oklch(0.42 0.22 27 / 0.85) 0%, oklch(0.42 0.22 27 / 0.28) 55%, transparent 100%)",
        }}
      />

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col">

        {/* Large cinematic title — sits above the image strip */}
        <div className="flex flex-1 items-end justify-center px-6 pb-6 pt-28 sm:pb-8 sm:pt-32">
          <h1
            className="text-center font-heading font-black uppercase text-foreground"
            style={{
              fontSize: "clamp(3.2rem, 10vw, 9rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
            }}
          >
            HFDG Productions
          </h1>
        </div>

        {/* ── Image strip ─────────────────────────────────────────
            Five near-square frames in a full-width row that bleeds
            off both edges. No carousel — clean, static, professional. */}
        <div className="-mx-1 mt-0 flex items-stretch gap-1.5 overflow-hidden sm:gap-2">
          {stills.map((s, i) => (
            <figure
              key={i}
              className="relative min-w-0 flex-1 overflow-hidden bg-zinc-900"
              style={{ aspectRatio: "420 / 520" }}
            >
              <img
                src={`/placeholder.svg?height=${s.h}&width=${s.w}&query=${encodeURIComponent(s.q)}`}
                alt=""
                className="h-full w-full object-cover opacity-90"
              />
              {/* bottom vignette so the strip seats into the dark background */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </figure>
          ))}
        </div>

        {/* ── Statement + focus ruler ──────────────────────────── */}
        <div className="flex flex-col items-center gap-6 px-6 pb-16 pt-10 sm:pb-20 sm:pt-12">
          <p className="max-w-sm text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-foreground/60 sm:text-xs">
            We are experts in the production of films, commercials and brand
            stories that captivate audiences across Africa and the Middle East.
          </p>
          <FocusScale />
        </div>
      </div>

      {/* Bottom-left language toggle */}
      <div className="absolute bottom-6 left-7 z-30 font-mono text-sm tracking-widest text-foreground/60">
        EN&nbsp;&nbsp;UA
      </div>

      {/* Live clock — bottom-right */}
      <div
        className="pointer-events-none absolute bottom-6 right-7 z-30 font-mono text-sm tabular-nums tracking-widest text-foreground/60"
        aria-label="Current time"
      >
        {clock}
      </div>
    </section>
  )
}
