import { Play } from "lucide-react"
import { RecordDot, FilmCorners } from "@/components/film-ui"

/** About hero. Mobile: media full-width at top, headline overlaps its
 *  bottom edge, body follows. Desktop: split — copy left, tall film right. */
export function AboutHero() {
  return (
    <section className="relative scroll-mt-20">

      {/* ── MOBILE layout (< lg): media → headline → body → stats ── */}
      <div className="lg:hidden">
        {/* Media — full width, no side padding */}
        <div className="group relative">
          <div className="relative overflow-hidden border-b-2 border-foreground bg-card video-block-responsive">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/placeholder.svg?height=900&width=1200&query=cinematic+filmmaker+director+on+set+moody+lighting"
              alt="HFDG Productions studio reel"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* REC badge */}
            <span className="absolute left-4 top-4 flex items-center gap-2 rounded-sm border border-foreground/30 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" aria-hidden="true" />
              Rec · Studio reel
            </span>
            {/* Play */}
            <button
              type="button"
              className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110"
              aria-label="Play the HFDG studio reel"
            >
              <Play className="size-5 fill-current" />
            </button>
            {/* Runtime */}
            <span className="absolute bottom-4 right-4 rounded-sm bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur">
              2:12
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="px-5 pb-16 pt-8">
          <h1 className="text-pretty font-heading text-[2.6rem] font-extrabold uppercase leading-[0.9] tracking-tight">
            Ten years
            <br />
            behind the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">lens.</span>
              <span
                className="absolute inset-x-0 bottom-0.5 z-0 h-3 bg-accent/90"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-6 text-lg font-semibold leading-snug text-foreground">
            HFDG Productions is a filmmaker-led studio. Every brand has a film
            worth making.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            One director, a tight crew, two cities. Jeddah and Johannesburg.
            Corporate, real estate and commercial stories turned into footage
            that sells.
          </p>
          {/* Stats row */}
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t border-foreground/20 pt-8">
            {[
              { k: "Experience", v: "10+ years" },
              { k: "Based in", v: "JED · JNB" },
              { k: "Affiliate", v: "35Film" },
            ].map((d) => (
              <div key={d.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{d.k}</dt>
                <dd className="mt-1 font-heading text-2xl font-extrabold tracking-tight">{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── DESKTOP layout (lg+): split columns ── */}
      <div className="hidden lg:block px-8 pt-36 pb-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-center gap-16">
          {/* Left — copy */}
          <div className="col-span-6">
            <h1 className="text-pretty font-heading text-7xl font-extrabold uppercase leading-[0.9] tracking-tight xl:text-8xl">
              Ten years
              <br />
              behind the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">lens.</span>
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-5 bg-accent/90 md:bottom-2 md:h-6"
                  aria-hidden="true"
                />
              </span>
            </h1>
            <p className="mt-10 max-w-xl text-xl font-semibold leading-snug text-foreground">
              HFDG Productions is a filmmaker-led studio. Every brand has a film
              worth making.
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              One director, a tight crew, two cities. Jeddah and Johannesburg.
              Corporate, real estate and commercial stories turned into footage
              that sells.
            </p>
            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {[
                { k: "Experience", v: "10+ years" },
                { k: "Based in", v: "JED · JNB" },
                { k: "Affiliate", v: "35Film" },
              ].map((d) => (
                <div key={d.k}>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.k}</dt>
                  <dd className="mt-1 font-heading text-3xl font-extrabold tracking-tight">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — tall film */}
          <div className="col-span-6">
            <div className="group relative">
              <FilmCorners size={40} inset={-1} className="z-20" />
              <div className="relative overflow-hidden border-2 border-foreground bg-card">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/placeholder.svg?height=1000&width=800&query=cinematic+portrait+filmmaker+director+on+set+camera+moody+lighting"
                    alt="HFDG Productions founder on set"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute left-6 top-6 flex items-center gap-2 rounded-sm border border-foreground/30 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" aria-hidden="true" />
                  Rec · Studio reel
                </span>
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 inline-flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110"
                  aria-label="Play the HFDG studio reel"
                >
                  <Play className="size-8 fill-current" />
                </button>
                <span className="absolute bottom-6 right-6 rounded-sm bg-background/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur">
                  2:12
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
