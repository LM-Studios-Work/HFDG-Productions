import { Check, ArrowRight } from "lucide-react"
import { packages } from "@/lib/site-data"

/** Pricing anchors — three tiers, no exact prices. A genuine comparison, so a
 *  three-column layout earns its place here. Middle tier carries the accent. */
export function ServicesPackages() {
  return (
    <section
      id="packages"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">C</span> — Where to start
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              Pick a starting
              <br />
              point.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            Every project is quoted to scope — these tiers show roughly where
            you&apos;d land. The final number comes after a quick consult.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 lg:p-10 ${
                pkg.featured ? "bg-accent text-accent-foreground" : "bg-background"
              }`}
            >
              {pkg.featured && (
                <span className="absolute right-6 top-8 rounded-full border border-accent-foreground/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                  Most chosen
                </span>
              )}

              <h3 className="font-heading text-3xl font-extrabold uppercase tracking-tight">
                {pkg.name}
              </h3>
              <p
                className={`mt-2 text-sm font-semibold ${
                  pkg.featured ? "text-accent-foreground/90" : "text-foreground"
                }`}
              >
                {pkg.positioning}
              </p>

              <p
                className={`mt-6 font-mono text-[10px] uppercase tracking-[0.25em] ${
                  pkg.featured ? "text-accent-foreground/70" : "text-muted-foreground"
                }`}
              >
                {pkg.anchor}
              </p>
              <p
                className={`mt-3 leading-relaxed ${
                  pkg.featured ? "text-accent-foreground/90" : "text-muted-foreground"
                }`}
              >
                {pkg.description}
              </p>

              <ul
                className={`mt-8 space-y-3 border-t pt-8 ${
                  pkg.featured ? "border-accent-foreground/25" : "border-border"
                }`}
              >
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${
                        pkg.featured ? "text-accent-foreground" : "text-accent"
                      }`}
                    />
                    <span className="text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold uppercase tracking-widest transition-transform hover:scale-[1.02] ${
                  pkg.featured
                    ? "bg-accent-foreground text-accent"
                    : "border-2 border-foreground text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                Start here
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Not sure which fits? <a href="/#contact" className="text-accent underline-offset-4 hover:underline">Tell us about the project</a> and we&apos;ll point you to the right one.
        </p>
      </div>
    </section>
  )
}
