import { Play, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative px-6 pt-32 lg:px-10 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
          Independent film &amp; production studio — Worldwide
        </p>

        <h1 className="mt-8 max-w-5xl text-pretty text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          We make films
          <br />
          that move
          <span className="text-muted-foreground"> the world.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
            Meridian is a collective of directors, cinematographers and editors
            crafting cinematic stories for the world&apos;s most ambitious
            brands.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Play className="size-4 fill-current" />
              Watch the reel
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View work
            </a>
          </div>
        </div>

        {/* Featured reel */}
        <div className="group relative mt-14 overflow-hidden rounded-lg border border-border">
          <div className="aspect-[16/9] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/placeholder.svg?height=1080&width=1920&query=cinematic%20film%20still%20wide%20shot%20golden%20hour%20silhouette%20moody%20atmospheric"
              alt="Still from Meridian's 2025 showreel"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />

          <button
            type="button"
            className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 backdrop-blur transition-transform duration-300 group-hover:scale-110 md:size-20"
            aria-label="Play showreel"
          >
            <Play className="size-6 fill-foreground text-foreground md:size-7" />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Showreel
              </p>
              <p className="mt-1 text-xl font-semibold md:text-2xl">
                Meridian — 2025
              </p>
            </div>
            <span className="font-mono text-sm text-muted-foreground">2:14</span>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 pb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <ArrowDown className="size-4" />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
