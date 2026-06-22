import { Reveal } from "@/components/reveal"
import { Check } from "lucide-react";
import { processSteps } from "@/lib/site-data";

/** How We Work — three connected steps (Consult / Produce / Deliver).
 *  A ruled "timeline" with tick marks on desktop, a vertical spine on mobile. */
export function ServicesProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-t-2 border-foreground bg-card px-5 py-12 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Three steps.
                <br />
                No surprises.
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Timeline */}
        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground md:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="contents">
              <li
                className="relative flex flex-col bg-card p-8 lg:p-10"
              >
                {/* Step marker row — ruler ticks between steps (last step: no ruler) */}
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-foreground font-heading text-lg font-extrabold">
                    {step.step}
                  </span>
                  <span
                    className="hidden flex-1 items-center gap-1.5 md:flex"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 9 }).map((_, t) => (
                      <span
                        key={t}
                        className={`w-px ${
                          t === 4 ? "h-3.5 bg-accent" : "h-2 bg-foreground/30"
                        }`}
                      />
                    ))}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 grow leading-relaxed text-muted-foreground">
                  {step.body}
                </p>

                {/* Checklist */}
                <ul className="mt-8 space-y-2.5 border-t border-border pt-6">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <Check className="size-4 shrink-0 text-accent" />
                      <span className="font-mono text-xs uppercase tracking-[0.12em] text-foreground/90">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
