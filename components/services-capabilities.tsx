import { FilmCorners, RecordDot } from "@/components/film-ui"
import { ServiceIcon } from "@/components/service-icons"
import { serviceDetails } from "@/lib/site-data"

/** The full capability breakdown — no video blocks. Each service is an
 *  editorial band anchored by its own brand-built icon in a framed tile.
 *  The tile alternates sides row to row so the page reads like a reel of
 *  index cards rather than a repeating grid. */
export function ServicesCapabilities() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground">
      {/* Section header */}
      <div className="mx-auto max-w-[1600px] px-5 pt-20 lg:px-8 lg:pt-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">A</span> — Capabilities
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              What we make.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            Seven ways to work with us — each one handled end to end, from the
            first idea to the final frame.
          </p>
        </div>
      </div>

      {/* Rows */}
      <div className="mx-auto mt-16 max-w-[1600px]">
        {serviceDetails.map((s, i) => {
          const reversed = i % 2 === 1
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 border-t-2 border-foreground"
            >
              <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                {/* Icon panel */}
                <div
                  className={`relative flex flex-col justify-between gap-10 bg-card px-6 py-10 lg:col-span-4 lg:px-10 lg:py-14 border-foreground ${
                    reversed ? "lg:order-2 lg:border-l-2" : "lg:order-1 lg:border-r-2"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-accent">{s.index}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {s.bestFor}
                    </span>
                  </div>

                  {/* The framed icon tile — same viewfinder language as the hero */}
                  <div className="relative mx-auto flex aspect-square w-full max-w-[200px] items-center justify-center border-2 border-foreground/15 bg-background">
                    <FilmCorners size={18} inset={10} thickness={2} />
                    <ServiceIcon
                      slug={s.slug}
                      size={84}
                      className="text-accent"
                    />
                  </div>

                  <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    <RecordDot />
                    <span>
                      Svc <span className="text-foreground">{s.index}</span> / 07
                    </span>
                  </div>
                </div>

                {/* Copy */}
                <div
                  className={`flex flex-col justify-center px-6 py-10 lg:col-span-8 lg:px-12 lg:py-14 ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="font-heading text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-pretty text-lg font-semibold leading-snug text-foreground">
                    {s.tagline}
                  </p>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-x-2.5 gap-y-2.5">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 border border-foreground/15 bg-card px-3 py-1.5"
                      >
                        <span
                          className="size-1.5 shrink-0 bg-accent"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-none text-foreground/90">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
