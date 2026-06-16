import { ArrowRight, Play } from "lucide-react"
import { FilmFrameIcon } from "@/components/hero"

export function StudioStatement() {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-t-2 border-foreground"
    >
      {/* Second video — full width, flush above the copy */}
      <div className="group relative overflow-hidden border-b-2 border-foreground">
        <div className="w-full overflow-hidden bg-card" style={{ aspectRatio: "16 / 6.75" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/placeholder.svg?height=675&width=1600&query=cinematic%20behind%20the%20scenes%20film%20crew%20Africa%20production"
            alt="Behind the scenes — HFDG Productions crew on set"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Center play button */}
        <button
          type="button"
          className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 md:size-28"
          aria-label="Play behind the scenes reel"
        >
          <Play className="size-7 fill-current md:size-9" />
        </button>

        {/* Top-left REC badge */}
        <span className="absolute left-5 top-5 flex items-center gap-2 rounded-sm border border-foreground/30 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur md:left-8 md:top-8">
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" aria-hidden="true" />
          Behind the scenes
        </span>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-24 lg:px-8 lg:py-32">
        {/* Section header row: label left, CTA right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="font-bold text-accent">002</span> — The studio
          </p>

          {/* See more about us — right-aligned on md+ */}
          <a
            href="/about"
            className="group inline-flex items-center gap-4 self-start"
            aria-label="Read more about HFDG Productions"
          >
            <FilmFrameIcon
              className="size-10 text-foreground transition-colors duration-200 group-hover:text-accent"
              dotPulse={false}
            />
            <span className="font-mono text-sm font-extrabold uppercase tracking-[0.2em] transition-colors group-hover:text-accent">
              See more about us
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                <ArrowRight className="inline size-4" />
              </span>
            </span>
          </a>
        </div>

        {/* Body copy */}
        <p className="mt-10 max-w-5xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.05]">
          {"We're a tight crew of directors, shooters and editors who believe craft still matters. No bloated teams, no committee edits. Just "}
          <span className="text-muted-foreground">
            people who care about every frame
          </span>
          {" and the story behind it."}
        </p>
      </div>
    </section>
  )
}
