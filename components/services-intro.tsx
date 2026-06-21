import { ArrowDown } from "lucide-react"
import { RecordDot } from "@/components/film-ui"
import { serviceDetails } from "@/lib/site-data"

/** Services hero — text-led, no top-corner film brackets.
 *  Headline on the left, a "contents sheet" of every capability on the right
 *  that doubles as in-page jump navigation. */
export function ServicesIntro() {
  return (
    <section id="top" className="scroll-mt-20 px-5 pt-28 pb-16 lg:px-8 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — the statement */}
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <RecordDot />
              <span>
                <span className="font-bold text-accent">02</span> — Services
              </span>
            </p>
            <h1 className="mt-6 text-pretty font-heading text-[2.75rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Every kind
              <br />
              of film.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">One crew.</span>
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/90 md:bottom-2 md:h-5"
                  aria-hidden="true"
                />
              </span>
            </h1>
            <p className="mt-10 max-w-xl text-xl font-semibold leading-snug text-foreground">
              From a single hero film to a full monthly content engine — planned,
              shot and finished under one roof.
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              No agency middlemen, no committee edits. The people who shoot your
              film are the people who care about it in the edit. Here&apos;s
              everything we make.
            </p>
          </div>

          {/* Right — contents sheet / jump nav */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border-2 border-foreground">
              <p className="flex items-center justify-between border-b-2 border-foreground px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>What we offer</span>
                <span>07 capabilities</span>
              </p>
              <ul>
                {serviceDetails.map((s, i) => (
                  <li
                    key={s.slug}
                    className={i === serviceDetails.length - 1 ? "" : "border-b border-border"}
                  >
                    <a
                      href={`#${s.slug}`}
                      className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-secondary/50"
                    >
                      <span className="font-mono text-xs font-bold text-accent">{s.index}</span>
                      <span className="font-heading text-base font-extrabold uppercase tracking-tight transition-colors group-hover:text-accent">
                        {s.title}
                      </span>
                      <ArrowDown className="ml-auto size-4 text-muted-foreground transition-all group-hover:translate-y-0.5 group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
