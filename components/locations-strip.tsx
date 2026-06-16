import { ArrowUpRight } from "lucide-react"
import { locations } from "@/lib/site-data"

export function LocationsStrip() {
  return (
    <section
      id="locations"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              004 — Where we shoot
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
              Three cities, one crew.
            </h2>
          </div>
          <a
            href="/locations"
            className="group inline-flex items-center gap-2 font-heading text-sm font-extrabold uppercase tracking-tight"
          >
            <span className="border-b-2 border-foreground pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
              See all locations
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground md:grid-cols-3 lg:grid-cols-5">
          {locations.map((loc) => (
            <li key={loc.city} className="bg-background p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {loc.country}
                </span>
                {loc.status === "soon" ? (
                  <span className="rotate-[-4deg] rounded-md border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Soon
                  </span>
                ) : (
                  <span
                    className="inline-block size-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </div>
              <p
                className={`mt-6 font-heading text-2xl font-extrabold uppercase tracking-tight md:text-3xl ${
                  loc.status === "soon" ? "text-muted-foreground" : ""
                }`}
              >
                {loc.city}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
