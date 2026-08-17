import { Reveal } from "@/components/reveal"

const defaultShots = [
  { imageUrl: "/placeholder.svg?height=900&width=720&query=film+crew+setting+up+camera", description: "Crew setting up a camera rig on location" },
  { imageUrl: "/placeholder.svg?height=900&width=900&query=cinematographer+checking+monitor", description: "Cinematographer checking the monitor on set" },
  { imageUrl: "/placeholder.svg?height=900&width=900&query=drone+aerial+shoot+over+city", description: "Aerial drone shoot over a city skyline" },
  { imageUrl: "/placeholder.svg?height=900&width=1800&query=editor+color+grading+suite", description: "Editor in the color grading suite" },
]

export function AboutGallery({ gallery = [] }: { gallery?: { imageUrl: string; description?: string }[] }) {
  // Merge CMS images with defaults so users can replace placeholders one by one
  const images = defaultShots.map((shot, index) => {
    return gallery[index] ? gallery[index] : shot;
  });
  if (gallery.length > defaultShots.length) {
    images.push(...gallery.slice(defaultShots.length));
  }

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

        {/* ── HORIZONTAL SCROLLING BENTO LAYOUT ── */}
        <div className="mt-14 w-full overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none flex -mx-5 px-5 lg:-mx-8 lg:px-8">
          <div className="grid grid-rows-2 grid-flow-col-dense auto-cols-[60vw] sm:auto-cols-[300px] md:auto-cols-[350px] lg:auto-cols-[400px] gap-4 h-[60vh] min-h-[400px] max-h-[800px] w-max shrink-0">
            {images.map((s, i) => {
              // Perfect tessellation pattern for 2-row horizontal grid
              const patternIndex = i % 6
              let spanClass = "row-span-1 col-span-1"

              if (patternIndex === 0) {
                spanClass = "row-span-2 col-span-2"
              } else if (patternIndex === 3) {
                spanClass = "row-span-1 col-span-2"
              }

              return (
                <Reveal key={i} delay={(i % 6) * 0.05} className={`${spanClass} snap-center`}>
                  <div className="group relative overflow-hidden border-2 border-foreground bg-card h-full w-full">
                    <div className="w-full h-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.imageUrl}
                        alt={s.description || "Behind the scenes"}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* Hover overlay for description */}
                    {s.description && (
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                        <p className="font-heading text-xl font-bold uppercase tracking-tight text-foreground">
                          {s.description}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
