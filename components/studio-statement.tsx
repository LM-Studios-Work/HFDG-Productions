import { ArrowRight } from "lucide-react"
import { FilmFrameIcon } from "@/components/hero"

export function StudioStatement() {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
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
