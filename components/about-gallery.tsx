import { Reveal } from "@/components/reveal"

const shots = [
  {
    q: "film+crew+setting+up+camera+rig+on+location+golden+hour",
    alt: "Crew setting up a camera rig on location",
    span: "md:col-span-2 md:row-span-2",
    ratio: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    q: "cinematographer+checking+monitor+on+set+moody+lighting",
    alt: "Cinematographer checking the monitor on set",
    span: "",
    ratio: "aspect-square",
  },
  {
    q: "drone+aerial+shoot+over+city+skyline+production",
    alt: "Aerial drone shoot over a city skyline",
    span: "",
    ratio: "aspect-square",
  },
  {
    q: "editor+color+grading+suite+studio+screens+dark+room",
    alt: "Editor in the color grading suite",
    span: "md:col-span-2",
    ratio: "aspect-[2/1]",
  },
]

/** About — Behind the scenes gallery. */
export function AboutGallery() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                On set
              </p>
              <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Behind the frame.
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              The work that makes the film look effortless.
            </p>
          </div>
        </Reveal>

        {/* ── MOBILE: horizontal swipe carousel ── */}
        <div className="mt-10 md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-[12.5vw] scrollbar-none">
          {shots.map((s, i) => (
            <Reveal key={s.q} delay={i * 0.05} className="snap-center shrink-0 w-[75vw]">
              <div className="group relative overflow-hidden border-2 border-foreground bg-card">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/placeholder.svg?height=900&width=720&query=${s.q}`}
                    alt={s.alt}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── DESKTOP: bento grid ── */}
        <div className="mt-14 hidden md:grid grid-cols-4 auto-rows-[minmax(0,1fr)] gap-4">
          {shots.map((s, i) => (
            <Reveal key={s.q} delay={i * 0.08} className={s.span}>
              <div
                className="group relative overflow-hidden border-2 border-foreground bg-card h-full"
              >
                <div className={`w-full overflow-hidden ${s.ratio}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/placeholder.svg?height=900&width=900&query=${s.q}`}
                    alt={s.alt}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
