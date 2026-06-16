const shots = [
  {
    q: "film%20crew%20setting%20up%20camera%20rig%20on%20location%20golden%20hour%20behind%20the%20scenes",
    alt: "Crew setting up a camera rig on location",
    span: "md:col-span-2 md:row-span-2",
    ratio: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    q: "cinematographer%20checking%20monitor%20on%20set%20moody%20lighting",
    alt: "Cinematographer checking the monitor on set",
    span: "",
    ratio: "aspect-square",
  },
  {
    q: "drone%20aerial%20shoot%20over%20city%20skyline%20production",
    alt: "Aerial drone shoot over a city skyline",
    span: "",
    ratio: "aspect-square",
  },
  {
    q: "editor%20color%20grading%20suite%20studio%20screens%20dark%20room",
    alt: "Editor in the color grading suite",
    span: "md:col-span-2",
    ratio: "aspect-[2/1]",
  },
]

/** About — Behind the scenes gallery. Asymmetric bordered grid. */
export function AboutGallery() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">005</span> — On set
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              Behind the frame.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            The unglamorous part nobody posts — the work that makes the film
            look effortless.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(0,1fr)]">
          {shots.map((s) => (
            <div
              key={s.q}
              className={`group relative overflow-hidden border-2 border-foreground bg-card ${s.span}`}
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
          ))}
        </div>
      </div>
    </section>
  )
}
