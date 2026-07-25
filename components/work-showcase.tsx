"use client"

import { Play, ArrowRight } from "lucide-react"
import { FilmFrameIcon } from "@/components/hero"
import { Reveal } from "@/components/reveal"

/** One full-width featured film with "View Our Work" underneath — Sandwich-style. */
export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-20">
      {/* The single full-width film */}
      <Reveal>
        <div className="group relative overflow-hidden border-y-2 border-foreground">
          <div className="w-full overflow-hidden bg-card aspect-[16/9] md:aspect-[2.65/1] max-h-[600px]">
            <video
              src="/api/media/file/PotAround.mp4"
              title="Pot Around Video"
              autoPlay
              muted
              loop
              playsInline
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>






        </div>
      </Reveal>

      {/* Underneath the film: title line + VIEW OUR WORK link — sandwich-style */}
      <div className="border-b-2 border-foreground px-5 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left: headline */}
          <Reveal delay={0.1}>
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
          </Reveal>

          {/* Right: the CTA — film icon + VIEW OUR WORK, sandwich-style */}
          <Reveal delay={0.2} direction="right">
            <a
              href="/projects"
              className="group inline-flex items-center gap-4 self-start md:self-end"
              aria-label="View our full portfolio"
            >
              <FilmFrameIcon
                className="size-12 text-foreground transition-colors duration-200 group-hover:text-accent md:size-14"
                dotPulse
              />
              <span className="font-mono text-sm font-extrabold uppercase tracking-[0.2em] transition-colors group-hover:text-accent">
                View our portfolio
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                  <ArrowRight className="inline size-4" />
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
