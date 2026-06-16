import { ArrowRight } from "lucide-react"
import { services } from "@/lib/site-data"
import { FilmFrameIcon } from "@/components/hero"

/** About — Expertise grid + 35Film affiliate band + closing CTA. */
export function AboutExpertise() {
  return (
    <>
      {/* Expertise */}
      <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                What we do
              </p>
              <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Expertise, end to end.
              </h2>
            </div>
            <a
              href="/services"
              className="group inline-flex items-center gap-4 self-start md:self-end"
              aria-label="View all services"
            >
              <FilmFrameIcon
                className="size-12 text-foreground transition-colors duration-200 group-hover:text-accent md:size-14"
                dotPulse
              />
              <span className="font-mono text-sm font-extrabold uppercase tracking-[0.2em] transition-colors group-hover:text-accent">
                All services
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                  <ArrowRight className="inline size-4" />
                </span>
              </span>
            </a>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.title} className="flex flex-col bg-background p-8">
                <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 35Film affiliate band */}
      <section className="scroll-mt-20 border-t-2 border-foreground bg-card px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              In good company
            </p>
            <h2 className="mt-4 text-pretty font-heading text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              An affiliate of{" "}
              <span className="text-accent">35Film</span>.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Our partnership with 35Film extends our reach, gear and crew.
              HFDG clients get access to a deeper bench of talent and a bigger
              production backbone, without losing the boutique attention that
              defines us.
            </p>
          </div>

          <div className="shrink-0">
            <div className="flex items-center gap-4 rounded-lg border-2 border-foreground bg-background px-8 py-6">
              <span className="font-heading text-5xl font-extrabold tracking-tighter md:text-6xl">
                35<span className="text-accent">Film</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 text-center lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Let&apos;s make something
          </p>
          <h2 className="mt-6 text-balance font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Got a film worth making?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d
            shoot it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-extrabold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent-foreground" aria-hidden="true" />
              Get in touch
            </a>
            <a
              href="/#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground px-7 py-3.5 text-sm font-extrabold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              See the work
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
