import { FilmCorners } from "@/components/film-ui"

/** About — Founder profile. Portrait left, bio + credentials right. */
export function AboutFounder() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="group relative">
            <FilmCorners size={36} inset={-1} className="z-20" />
            <div className="relative overflow-hidden border-2 border-foreground bg-card">
              <div className="aspect-[4/5] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/placeholder.svg?height=1000&width=800&query=cinematic%20black%20and%20white%20portrait%20of%20film%20director%20founder%20studio"
                  alt="HFDG Productions founder portrait"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] grayscale"
                />
              </div>
              <span className="absolute bottom-4 left-4 rounded-sm bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                Founder · Director
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="font-bold text-accent">004</span> — The founder
          </p>
          <h2 className="mt-4 text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            One eye.
            <br />
            Ten years of it.
          </h2>

          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              HFDG is led by a director who has spent more than a decade behind
              the lens — on commercial sets, in editing suites, and on location
              across two continents. The throughline has always been the same:
              tell the truth of the thing, and make it beautiful.
            </p>
            <p>
              That hands-on background is why HFDG works the way it does. The
              founder is still on set, still in the edit, still answering the
              phone. When you hire HFDG, you&apos;re not handed off to a junior
              team — you get the person whose name is on the door.
            </p>
          </div>

          {/* Credential row */}
          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground sm:grid-cols-3">
            {[
              { k: "Director · DP", v: "On every shoot" },
              { k: "Commercials", v: "TV & broadcast" },
              { k: "Film & narrative", v: "Set experience" },
            ].map((c) => (
              <li key={c.k} className="bg-background p-6">
                <p className="font-heading text-lg font-extrabold uppercase tracking-tight">
                  {c.k}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {c.v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
