import { Reveal } from "@/components/reveal"
import { Plus } from "lucide-react";
import { serviceFaqs } from "@/lib/site-data";

/** Frequently asked — sticky label left, accordion right. */
export function ServicesFaq() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-12 lg:px-8 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — sticky label */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className="text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                The questions
                <br />
                we always get.
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-8">
          <div className="border-t-2 border-foreground">
            {serviceFaqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06}>
                <details
                  className="group border-b border-border [&_svg]:open:rotate-45"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                    <span className="font-heading text-xl font-extrabold uppercase tracking-tight md:text-2xl">
                      {faq.q}
                    </span>
                    <Plus className="size-5 shrink-0 text-accent transition-transform duration-200" />
                  </summary>
                  <p className="max-w-2xl pb-7 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
