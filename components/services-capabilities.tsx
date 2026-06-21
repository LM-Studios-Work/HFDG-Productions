"use client"

import { useState } from "react"
import { FilmCorners, RecordDot } from "@/components/film-ui"
import { ServiceIcon } from "@/components/service-icons"
import { serviceDetails, type ServiceDetail } from "@/lib/site-data"

/** The full capability breakdown — no video blocks, no zig-zag grid.
 *  It reads like a director's index: a numbered list of services on the
 *  left that drives a single detail panel on the right. On mobile the
 *  detail expands inline under the selected row. Icons animate when their
 *  service is active. */
export function ServicesCapabilities() {
  const [active, setActive] = useState(0)
  const current = serviceDetails[active]

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
            first idea to the final frame. Pick one to see what&apos;s inside.
          </p>
        </div>
      </div>

      {/* Browser */}
      <div className="mx-auto mt-14 max-w-[1600px] border-t-2 border-foreground lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Index list */}
          <ul className="lg:col-span-5 lg:border-r-2 lg:border-foreground">
            {serviceDetails.map((s, i) => {
              const isActive = i === active
              return (
                <li
                  key={s.slug}
                  id={s.slug}
                  className="scroll-mt-24 border-b-2 border-foreground last:border-b-0 lg:last:border-b-2"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    aria-expanded={isActive}
                    className={`group flex w-full items-center gap-4 px-5 py-5 text-left transition-colors lg:px-8 lg:py-6 ${
                      isActive ? "bg-card" : "hover:bg-card/60"
                    }`}
                  >
                    {/* Active accent rail */}
                    <span
                      aria-hidden="true"
                      className={`h-9 w-0.5 shrink-0 transition-colors ${
                        isActive ? "bg-accent" : "bg-transparent"
                      }`}
                    />
                    <span
                      className={`font-mono text-sm font-bold tabular-nums transition-colors ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {s.index}
                    </span>

                    {/* Small mark — animates while its service is active */}
                    <span
                      className={`shrink-0 transition-colors ${
                        isActive ? "text-accent" : "text-foreground/70 group-hover:text-foreground"
                      }`}
                    >
                      <ServiceIcon slug={s.slug} size={26} animate={isActive} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate font-heading text-xl font-extrabold uppercase leading-none tracking-tight transition-colors md:text-2xl ${
                          isActive ? "text-foreground" : "text-foreground/85 group-hover:text-foreground"
                        }`}
                      >
                        {s.title}
                      </span>
                    </span>

                    {/* State marker */}
                    <span className="shrink-0">
                      {isActive ? (
                        <RecordDot />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="block size-1.5 rounded-full bg-foreground/25 transition-colors group-hover:bg-foreground/50"
                        />
                      )}
                    </span>
                  </button>

                  {/* Inline detail for mobile only */}
                  <div className={`${isActive ? "block" : "hidden"} border-t-2 border-foreground lg:hidden`}>
                    <ServiceDetailPanel s={s} />
                  </div>
                </li>
              )
            })}
          </ul>

          {/* Detail panel — desktop, sticky alongside the list */}
          <div className="hidden lg:col-span-7 lg:block">
            <div className="lg:sticky lg:top-20">
              <ServiceDetailPanel key={current.slug} s={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** The right-hand (or inline) detail view for a single service. */
function ServiceDetailPanel({ s }: { s: ServiceDetail }) {
  return (
    <div className="svc-panel-in flex flex-col gap-8 px-5 py-10 lg:px-12 lg:py-14">
      {/* Ledger header */}
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="flex items-center gap-2.5">
          <RecordDot />
          <span>
            Svc <span className="text-foreground">{s.index}</span> / 07
          </span>
        </span>
        <span>{s.bestFor}</span>
      </div>

      {/* Big animated mark in a viewfinder tile */}
      <div className="relative flex aspect-[16/9] w-full items-center justify-center border-2 border-foreground/15 bg-background">
        <FilmCorners size={20} inset={12} thickness={2} />
        <ServiceIcon slug={s.slug} size={132} className="text-accent" animate />
      </div>

      <div>
        <h3 className="font-heading text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-4xl">
          {s.title}
        </h3>
        <p className="mt-3 max-w-xl text-pretty text-lg font-semibold leading-snug text-foreground">
          {s.tagline}
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{s.description}</p>
      </div>

      {/* Deliverables */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          What you get
        </p>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {s.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-center gap-2 border border-foreground/15 bg-card px-3 py-1.5"
            >
              <span className="size-1.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-sm leading-none text-foreground/90">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
