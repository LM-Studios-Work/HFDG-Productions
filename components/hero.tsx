"use client"

import { useEffect, useState } from "react"
import { FilmCorners, FocusScale, RecordDot } from "@/components/film-ui"

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
  const clock = useLiveClock()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-background"
    >
      {/* ── Side glows — same muted crimson as the rest of the site ── */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 sm:w-36"
        style={{
          background: "linear-gradient(to right, oklch(0.42 0.22 27 / 0.7) 0%, oklch(0.42 0.22 27 / 0.18) 60%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 sm:w-36"
        style={{
          background: "linear-gradient(to left, oklch(0.42 0.22 27 / 0.7) 0%, oklch(0.42 0.22 27 / 0.18) 60%, transparent 100%)",
        }}
      />

      {/* ── Viewfinder corners on the whole section ── */}
      <FilmCorners inset={20} size={32} thickness={2} />

      {/* ── Record indicator top-left ── */}
      <div className="absolute left-7 top-24 z-30 flex items-center gap-2">
        <RecordDot />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
          REC
        </span>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN LAYOUT — three columns on desktop:
          [image left] [title + copy] [image right]
          Stacks vertically on mobile.
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-1 flex-col items-stretch justify-between gap-0 md:flex-row">

        {/* Left image — tall portrait, bleeds from top */}
        <div className="relative hidden w-[28%] shrink-0 overflow-hidden md:block">
          <img
            src="/placeholder.svg?height=900&width=560&query=silhouette+dancer+red+stage+light+cinematic+dark"
            alt=""
            className="h-full w-full object-cover opacity-75"
          />
          {/* fade into background at edges */}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent" />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
        </div>

        {/* Centre column — title + statement */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-20 pt-32 sm:gap-10 sm:pb-24 sm:pt-36">

          {/* Thin overline */}
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/60">
            Film &nbsp;&middot;&nbsp; Commercials &nbsp;&middot;&nbsp; Brand Stories
          </p>

          {/* Main title */}
          <h1
            className="text-balance text-center font-heading font-black uppercase text-foreground"
            style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
            }}
          >
            HFDG
            <br />
            <span className="text-stroke">Productions</span>
          </h1>

          {/* Divider */}
          <span className="h-px w-12 bg-accent/50" />

          {/* Statement copy */}
          <p className="max-w-xs text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-foreground/50 sm:text-xs">
            We create stories that captivate audiences across Africa and the
            Middle East.
          </p>

          {/* Focus ruler */}
          <FocusScale />
        </div>

        {/* Right image — tall portrait, bleeds from top */}
        <div className="relative hidden w-[28%] shrink-0 overflow-hidden md:block">
          <img
            src="/placeholder.svg?height=900&width=560&query=film+crew+camera+operator+dark+cinematic+red+light"
            alt=""
            className="h-full w-full object-cover opacity-75"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background/90 via-transparent to-transparent" />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
        </div>

        {/* Mobile — single image strip below the title */}
        <div className="relative h-56 w-full overflow-hidden md:hidden">
          <img
            src="/placeholder.svg?height=400&width=800&query=cinematic+film+production+dark+moody+red"
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="absolute bottom-6 left-7 z-30 font-mono text-xs tracking-widest text-foreground/40">
        EN&nbsp;&nbsp;UA
      </div>
      <div
        className="pointer-events-none absolute bottom-6 right-7 z-30 font-mono text-xs tabular-nums tracking-widest text-foreground/40"
        aria-label="Current time"
      >
        {clock}
      </div>
    </section>
  )
}
