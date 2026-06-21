"use client"

import { useEffect, useRef, useState } from "react"
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

/** Film frames that scroll in an infinite right-to-left arc — like the DGC reference. */
const heroFrames = [
  "warehouse film set silhouette walking cinematic moody",
  "film crew lighting setup behind the scenes black and white",
  "dancers performing under red stage light cinematic",
  "hand holding vintage film camera in gloves cinematic",
  "silhouette in red lit doorway cinematic film still",
  "film studio set with equipment dark cinematic",
]

/**
 * A continuously scrolling (right → left) carousel whose cards ride a concave
 * arc: the card nearest the centre is the SMALLEST and the cards gradually grow,
 * tilt, and lift as they travel toward the edges. Because each card's size
 * depends on its live horizontal position, this is driven by a requestAnimationFrame
 * loop rather than a pure CSS marquee.
 */
function CurvedCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<Array<HTMLElement | null>>([])
  // duplicate the set so the loop is seamless
  const frames = [...heroFrames, ...heroFrames]

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let offset = 0
    let last: number | null = null
    let raf = 0
    const speed = 55 // px / second, moving left

    function frame(now: number) {
      const viewport = viewportRef.current
      const track = trackRef.current
      if (!viewport || !track) {
        raf = requestAnimationFrame(frame)
        return
      }

      if (last == null) last = now
      const dt = (now - last) / 1000
      last = now

      if (!prefersReduced) {
        offset -= speed * dt
        const setWidth = track.scrollWidth / 2 // width of one (un-duplicated) set
        if (setWidth > 0 && -offset >= setWidth) offset += setWidth
        track.style.transform = `translate3d(${offset}px,0,0)`
      }

      // Shape each card based on its distance from the viewport centre.
      const vRect = viewport.getBoundingClientRect()
      const centerX = vRect.left + vRect.width / 2
      const half = vRect.width / 2
      for (const card of cardsRef.current) {
        if (!card) continue
        const r = card.getBoundingClientRect()
        const cardCenter = r.left + r.width / 2
        const d = Math.max(-1, Math.min(1, (cardCenter - centerX) / half)) // -1 (left) → 1 (right)
        const t = Math.abs(d) // 0 at centre, 1 at edge
        const scale = 0.74 + t * 0.42 // centre smallest, edges biggest
        const rotateY = d * -26 // edges angle inward (concave cylinder)
        const lift = -t * t * 46 // edges rise up to form the arc
        card.style.transform = `translateY(${lift}px) rotateY(${rotateY}deg) scale(${scale})`
        card.style.zIndex = String(Math.round((1 - t) * 100))
      }

      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={viewportRef}
      className="-mx-6 mt-10 w-screen max-w-none overflow-hidden py-10 sm:-mx-10 sm:mt-14 lg:-mx-16"
      style={{ perspective: "1700px", perspectiveOrigin: "50% 50%" }}
    >
      <div ref={trackRef} className="flex w-max items-center will-change-transform" style={{ transformStyle: "preserve-3d" }}>
        {frames.map((q, i) => (
          <div key={i} className="px-2 sm:px-2.5" style={{ transformStyle: "preserve-3d" }}>
            <figure
              ref={(el) => {
                cardsRef.current[i] = el
              }}
              className="group relative aspect-square w-[60vw] shrink-0 overflow-hidden rounded-sm bg-zinc-900 shadow-2xl shadow-black/70 ring-1 ring-white/10 will-change-transform sm:w-[34vw] md:w-[27vw] lg:w-[22vw]"
              style={{ transformOrigin: "center center" }}
            >
              <img
                src={`/placeholder.svg?height=720&width=720&query=${encodeURIComponent(q)}`}
                alt=""
                className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100"
              />
              {/* subtle inner vignette to seat frames into the dark stage */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
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

        {/* Curved, auto-scrolling film-frame carousel (right → left).
            Centre card smallest, edge cards gradually larger on a concave arc. */}
        <CurvedCarousel />

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
