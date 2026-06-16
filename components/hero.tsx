import { Play, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative px-5 pt-28 lg:px-8 lg:pt-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Corporate Video — Real Estate — Commercial Content
          </p>
          <span className="rotate-[-3deg] rounded-md border-2 border-foreground px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
            An affiliate of 35Film
          </span>
        </div>

        <h1 className="mt-6 max-w-6xl text-pretty text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          HFDG
          <br />
          Productions
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-pretty text-xl font-semibold leading-snug md:text-2xl">
              We work with real estate developers, corporate brands and creative
              entrepreneurs across Africa and the Middle East.
            </p>
            <p className="mt-5 max-w-xl text-balance leading-relaxed text-muted-foreground">
              From a single hero film to a full content campaign, we turn your
              vision into footage that sells, shows and stays with people. You
              know your brand. We know how to put it on screen.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-extrabold uppercase tracking-tight text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowUpRight className="size-5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-7 py-4 text-base font-extrabold uppercase tracking-tight transition-colors hover:bg-foreground hover:text-background"
            >
              <Play className="size-4 fill-current" />
              See our work
            </a>
          </div>
        </div>
      </div>

      {/* Full-width hero reel */}
      <div className="mt-14 px-0">
        <div className="group relative overflow-hidden border-y-2 border-foreground">
          <div className="aspect-[21/9] w-full overflow-hidden bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/placeholder.svg?height=900&width=2100&query=cinematic%20corporate%20and%20real%20estate%20film%20still%20wide%20aerial%20city%20golden%20hour"
              alt="Still from the HFDG Productions showreel"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <span className="absolute left-4 top-4 rotate-[-4deg] rounded-md border-2 border-background bg-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-background md:left-8 md:top-8">
            Best of 2025 · 0:52
          </span>

          <button
            type="button"
            className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110 md:size-24"
            aria-label="Play showreel"
          >
            <Play className="size-7 fill-current md:size-8" />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-8">
            <div className="rounded-md bg-background/90 px-4 py-2 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Showreel
              </p>
              <p className="font-heading text-lg font-extrabold uppercase tracking-tight">
                HFDG — 2025
              </p>
            </div>
            <span className="rounded-md bg-background/90 px-3 py-2 font-mono text-sm text-foreground backdrop-blur">
              0:52
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
