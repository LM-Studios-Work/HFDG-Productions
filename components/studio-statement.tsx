import { ArrowRight } from "lucide-react"
import { stats } from "@/lib/site-data"
import { FilmFrameIcon } from "@/components/hero"

export function StudioStatement() {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          002 — The studio
        </p>

        <p className="mt-8 max-w-5xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.05]">
          {"We're a tight crew of directors, shooters and editors who believe craft still matters. No bloated teams, no committee edits — just "}
          <span className="text-muted-foreground">
            people who care about every frame
          </span>
          {" and the story behind it."}
        </p>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border-2 border-foreground bg-foreground md:grid-cols-4">
          {stats.map((stat) => {
            const is35Film = stat.value === "35Film"
            const Inner = (
              <>
                <p className={`font-heading text-4xl font-extrabold tracking-tight md:text-5xl ${is35Film ? "text-accent" : ""}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </>
            )
            return is35Film ? (
              <a
                key={stat.label}
                href="/about"
                className="group bg-background p-6 transition-colors hover:bg-accent/10 md:p-8"
                title="Learn about our 35Film partnership"
              >
                {Inner}
              </a>
            ) : (
              <div key={stat.label} className="bg-background p-6 md:p-8">
                {Inner}
              </div>
            )
          })}
        </div>

        {/* See more about us — film icon + text, sandwich-style */}
        <div className="mt-14 flex items-center gap-6">
          <a
            href="/about"
            className="group inline-flex items-center gap-4"
            aria-label="Read more about HFDG Productions"
          >
            <FilmFrameIcon
              className="size-11 text-foreground transition-colors duration-200 group-hover:text-accent"
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
      </div>
    </section>
  )
}
