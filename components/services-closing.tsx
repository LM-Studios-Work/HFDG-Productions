import { ArrowRight } from "lucide-react"

/** Closing CTA — mirrors the About page's sign-off, tuned for services. */
export function ServicesClosing() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 text-center lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          One conversation away
        </p>
        <h2 className="mt-6 text-balance font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
          Know what you need? Or need help figuring it out?
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Tell us what you&apos;re building. We&apos;ll tell you exactly how
          we&apos;d shoot it — and which package fits.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-extrabold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent-foreground" aria-hidden="true" />
            Book a consultation
          </a>
          <a
            href="/work"
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground px-7 py-3.5 text-sm font-extrabold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            See the work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
