import { Play } from "lucide-react"
import { RecordDot, FilmCorners } from "@/components/film-ui"

/** About — Hero. Split layout inspired by the Sandwich about page:
 *  bold headline + story intro on the left, tall film on the right. */
export function AboutHero() {
  return (
    <section className="relative scroll-mt-20 px-5 pt-28 lg:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        {/* Left — copy */}
        <div className="lg:col-span-6">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <RecordDot />
            <span>
              <span className="font-bold text-accent">001</span> — About HFDG
            </span>
          </p>

          <h1 className="mt-6 text-pretty font-heading text-[2.75rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Ten years
            <br />
            behind the{" "}
            {/* Red highlight bar echoing the Sandwich rainbow underline — but in brand red */}
            <span className="relative inline-block">
              <span className="relative z-10">lens.</span>
              <span
                className="absolute inset-x-0 bottom-1 z-0 h-4 bg-accent/90 md:bottom-2 md:h-6"
                aria-hidden="true"
              />
            </span>
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="text-pretty text-xl font-semibold leading-snug text-foreground md:text-2xl">
              HFDG Productions is a filmmaker-led studio built on a simple
              belief: every brand has a film worth making.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              What started as one director with a camera and a decade of
              obsession has grown into a tight crew working across Jeddah and
              Johannesburg — turning corporate, real estate and commercial
              stories into footage that sells, shows and stays with people.
            </p>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Experience
              </dt>
              <dd className="mt-1 font-heading text-3xl font-extrabold tracking-tight">
                10+ years
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Based in
              </dt>
              <dd className="mt-1 font-heading text-3xl font-extrabold tracking-tight">
                JED · JNB
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Affiliate
              </dt>
              <dd className="mt-1 font-heading text-3xl font-extrabold tracking-tight">
                35Film
              </dd>
            </div>
          </dl>
        </div>

        {/* Right — tall film */}
        <div className="lg:col-span-6">
          <div className="group relative">
            <FilmCorners size={40} inset={-1} className="z-20" />
            <div className="relative overflow-hidden border-2 border-foreground bg-card">
              <div className="aspect-[4/5] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/placeholder.svg?height=1000&width=800&query=cinematic%20portrait%20filmmaker%20director%20on%20set%20with%20camera%20moody%20lighting"
                  alt="HFDG Productions founder on set"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* REC badge */}
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-sm border border-foreground/30 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur md:left-6 md:top-6">
                <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" aria-hidden="true" />
                Rec · Studio reel
              </span>

              {/* Play */}
              <button
                type="button"
                className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 md:size-24"
                aria-label="Play the HFDG studio reel"
              >
                <Play className="size-7 fill-current md:size-8" />
              </button>

              {/* Runtime */}
              <span className="absolute bottom-4 right-4 rounded-sm bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur md:bottom-6 md:right-6">
                2:12
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
