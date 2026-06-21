import { locations } from "@/lib/site-data"

const locationDetails: Record<string, { desc: string; image: string }> = {
  Johannesburg: {
    desc: "Our primary hub in Southern Africa. Home to our core post-production facility and main gear room.",
    image: "/placeholder.svg?height=800&width=1200&query=johannesburg%20skyline%20cinematic%20night",
  },
  Jeddah: {
    desc: "Our Middle East base. A dedicated commercial and real estate team working across KSA.",
    image: "/placeholder.svg?height=800&width=1200&query=jeddah%20coastal%20city%20modern%20architecture%20cinematic",
  },
  Lagos: {
    desc: "The heartbeat of our West African operations. Focused on high-energy commercials and music videos.",
    image: "/placeholder.svg?height=800&width=1200&query=lagos%20cityscape%20vibrant%20street%20cinematic",
  },
  Riyadh: {
    desc: "Expanding to support our growing portfolio of corporate and commercial work in the capital.",
    image: "/placeholder.svg?height=800&width=1200&query=riyadh%20skyline%20modern%20abstract%20monochrome",
  },
  Berlin: {
    desc: "Our upcoming European foothold, bridging operations between the Middle East and the EU.",
    image: "/placeholder.svg?height=800&width=1200&query=berlin%20architecture%20abstract%20monochrome",
  },
}

export function LocationsGrid() {
  return (
    <section id="locations-grid" className="px-5 py-24 lg:px-8 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => {
            const details = locationDetails[loc.city]
            const isActive = loc.status === "active"

            return (
              <div
                key={loc.city}
                className={`group flex flex-col border-2 border-foreground bg-background ${
                  isActive ? "" : "opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-foreground bg-muted">
                  {details?.image && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={details.image}
                        alt={loc.city}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </>
                  )}
                  <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply" />
                  
                  {/* Status badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 backdrop-blur-sm">
                    {isActive ? (
                      <>
                        <span className="size-2 rounded-full bg-accent animate-blink-dot" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">Active Hub</span>
                      </>
                    ) : (
                      <>
                        <span className="size-2 rounded-full bg-muted-foreground" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Future</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="mb-8 flex items-center justify-between border-b-2 border-foreground/10 pb-6">
                    <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                      {loc.city}
                    </h2>
                    <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      {loc.country}
                    </span>
                  </div>
                  
                  <p className="flex-1 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                    {details?.desc || "Strategic location for upcoming productions."}
                  </p>

                  <div className="mt-8 pt-8 border-t-2 border-foreground/10">
                    <p className="font-mono text-xs uppercase tracking-widest text-foreground">
                      <span className="text-muted-foreground">Coordinates //</span>{" "}
                      {i === 0 && "26°12'16\"S 28°2'44\"E"}
                      {i === 1 && "21°32'36\"N 39°10'22\"E"}
                      {i === 2 && "6°27'14\"N 3°23'40\"E"}
                      {i === 3 && "24°42'42\"N 46°43'27\"E"}
                      {i === 4 && "52°31'12\"N 13°24'18\"E"}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
