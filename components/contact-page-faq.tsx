import { Reveal } from "@/components/reveal"
import { Plus } from "lucide-react"

const contactFaqs = [
  {
    q: "How fast do you respond to inquiries?",
    a: "Our typical response time is within 24 to 48 hours on business days. If your inquiry is urgent, we recommend reaching out directly via our WhatsApp number.",
  },
  {
    q: "Do you travel for shoots outside your base cities?",
    a: "Absolutely. While we are based in Johannesburg and Jeddah, our teams frequently travel across Africa and the Middle East for various corporate and commercial shoots. Just let us know where your project is located.",
  },
  {
    q: "What should I include in my project brief?",
    a: "The more detail, the better. Helpful information includes your project's main objective, target audience, preferred timeline, any specific deliverables needed, and a rough estimate of your budget.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Yes. While we have standard monthly content packages, a large portion of our work involves entirely custom productions. We'll tailor a quote specifically to your needs after our initial consultation.",
  },
]

export function ContactPageFaq() {
  return (
    <section className="border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — sticky label */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <h2 className="text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Before you
                <br />
                hit send.
              </h2>
              <p className="mt-6 max-w-sm text-lg text-muted-foreground leading-relaxed">
                A few things clients typically ask before reaching out to us.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-8">
          <div className="border-t-2 border-foreground">
            {contactFaqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06}>
                <details
                  className="group border-b border-border [&_svg]:open:rotate-45"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-8 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                    <span className="font-heading text-xl font-extrabold uppercase tracking-tight md:text-2xl">
                      {faq.q}
                    </span>
                    <Plus className="size-5 shrink-0 text-accent transition-transform duration-200" />
                  </summary>
                  <p className="max-w-2xl pb-8 text-lg leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
