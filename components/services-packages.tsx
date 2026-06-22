import { Reveal } from "@/components/reveal"
import { Check, ArrowRight } from "lucide-react";
import { packages } from "@/lib/site-data";

/** Pricing anchors — three tiers, no exact prices. */
export function ServicesPackages() {
  return (
    <section
      id="packages"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-12 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Pick a starting
                <br />
                point.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground md:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1} className="contents">
              <div
                className={`relative flex flex-col p-8 lg:p-10 ${
                  pkg.featured
                    ? "bg-accent text-accent-foreground"
                    : "bg-background"
                }`}
              >
                {/* Most-chosen badge */}
                {pkg.featured && (
                  <span className="absolute right-6 top-8 rounded-full border border-accent-foreground/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                    Most chosen
                  </span>
                )}

                <div>
                  <h3 className="font-heading text-3xl font-extrabold uppercase tracking-tight">
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      pkg.featured
                        ? "text-accent-foreground/90"
                        : "text-foreground"
                    }`}
                  >
                    {pkg.positioning}
                  </p>

                  <p
                    className={`mt-6 font-mono text-[10px] uppercase tracking-[0.25em] ${
                      pkg.featured
                        ? "text-accent-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.anchor}
                  </p>
                  <p
                    className={`mt-3 min-h-[4.5rem] leading-relaxed ${
                      pkg.featured
                        ? "text-accent-foreground/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                <ul
                  className={`mt-8 grow space-y-3 border-t pt-8 ${
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
                  href="/contact"
                  className={`group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-6 py-4 text-sm font-extrabold uppercase tracking-widest transition-all hover:scale-[1.02] ${
                    pkg.featured
                      ? "border-accent-foreground bg-accent-foreground text-accent hover:bg-transparent hover:text-accent-foreground"
                      : "border-foreground bg-transparent text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  Start here
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Not sure which fits?{" "}
            <a
              href="/contact"
              className="text-accent underline-offset-4 hover:underline"
            >
              Tell us about the project
            </a>{" "}
            and we&apos;ll point you to the right one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
