import { ArrowUpRight } from "lucide-react"
import { sitePages } from "@/lib/site-data"

export function SiteIndex() {
  return (
    <section
      id="explore"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              005 — Keep looking
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
              The rest of the studio.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            Everything you want to know before you hit the button.
            Pick a thread and follow it.
          </p>
        </div>

        <ul className="mt-14 border-t-2 border-foreground">
          {sitePages.map((page) => (
            <li key={page.title}>
              <a
                href={page.href}
                className="group grid grid-cols-1 items-baseline gap-2 border-b-2 border-foreground py-6 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-6 md:px-4 md:py-8"
              >
                <span className="font-mono text-sm text-muted-foreground md:col-span-1">
                  {page.index}
                </span>
                <span className="flex items-center gap-3 font-heading text-3xl font-extrabold uppercase tracking-tight md:col-span-5 md:text-5xl">
                  <span className="transition-colors group-hover:text-accent">
                    {page.title}
                  </span>
                  <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:size-8" />
                </span>
                <span className="max-w-md leading-relaxed text-muted-foreground md:col-span-6">
                  {page.blurb}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
