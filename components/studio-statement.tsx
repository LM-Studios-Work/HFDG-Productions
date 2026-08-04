import { ArrowRight, Play } from "lucide-react"
import { FilmFrameIcon } from "@/components/hero"
import { Reveal } from "@/components/reveal"
import { AutoPlayVideo } from "@/components/autoplay-video"

export function StudioStatement({ videoUrl }: { videoUrl?: string }) {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-t-2 border-foreground"
    >
      {/* Second video: full width, flush above the copy */}
      <Reveal>
        <div className="group relative overflow-hidden border-b-2 border-foreground">
          <div className="w-full overflow-hidden bg-card aspect-[16/9] md:aspect-[2.65/1] max-h-[600px]">
            <AutoPlayVideo
              src={videoUrl || "/api/media/file/Fight%20Sports%20Centre.mp4"}
              title="Behind the scenes with the HFDG Productions crew on set"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1600px] px-5 py-24 lg:px-8 lg:py-32">
        {/* Section header row: label left, CTA right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">002</span>: The studio
            </p>
          </Reveal>

          {/* See more about us: right-aligned on md+ */}
          <Reveal delay={0.15} direction="right">
            <a
              href="/about"
              className="group inline-flex items-center gap-4 self-start md:self-end"
              aria-label="Read more about HFDG Productions"
            >
              <FilmFrameIcon
                className="size-12 text-foreground transition-colors duration-200 group-hover:text-accent md:size-14"
                dotPulse
              />
              <span className="font-mono text-sm font-extrabold uppercase tracking-[0.2em] transition-colors group-hover:text-accent">
                See more about us
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                  <ArrowRight className="inline size-4" />
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        {/* Body copy */}
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-5xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.05]">
            {"We're a tight crew of directors, shooters and editors who believe craft still matters. No bloated teams, no committee edits. Just "}
            <span className="text-muted-foreground">
              people who care about every frame
            </span>
            {" and the story behind it."}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
