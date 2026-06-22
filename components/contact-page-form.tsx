"use client"

import { useState } from "react"
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function ContactPageForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="relative px-5 py-24 lg:px-8 lg:py-32 bg-background border-t-2 border-foreground">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        
        {/* Left Column: Contact Details & Info */}
        <div className="flex flex-col justify-between">
          <div>
            <Reveal>
              <h2 className="text-pretty text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
                Book a
                <br />
                consultation.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
                Have a project in mind, or just want to talk it through? Tell us what
                you&apos;re building and we&apos;ll bring the camera. If you prefer not to use the form, you can reach out directly via email or WhatsApp. We are available during standard business hours.
              </p>
            </Reveal>
            
            <div className="mt-12 space-y-8">
              <Reveal delay={0.15} direction="left">
                <a
                  href="mailto:hello@hfdgproductions.com"
                  className="group flex flex-col gap-1"
                >
                  <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
                    <Mail className="size-3.5" /> Email us
                  </span>
                  <span className="font-heading text-2xl font-extrabold tracking-tight transition-colors group-hover:text-accent">
                    hello@hfdgproductions.com
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.2} direction="left">
                <a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1"
                >
                  <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
                    <MessageCircle className="size-3.5" /> WhatsApp
                  </span>
                  <span className="font-heading text-2xl font-extrabold tracking-tight transition-colors group-hover:text-accent">
                    +27 00 000 0000
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <Reveal delay={0.1}>
          <div>
            <div className="rounded-lg border-2 border-foreground bg-card p-6 md:p-8 lg:p-10">
              {sent ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-8" />
                  </span>
                  <p className="mt-8 text-3xl font-extrabold uppercase tracking-tight">
                    Inquiry Received
                  </p>
                  <p className="mt-4 max-w-sm text-muted-foreground">
                    Thank you for reaching out. A producer from our team will review your project details and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 font-mono text-xs uppercase tracking-widest text-accent hover:underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="space-y-1 mb-2">
                    <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight">Submit a Project Brief</h3>
                    <p className="text-muted-foreground text-sm">Please fill out the form below with as much detail as possible.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                        placeholder="Jane Doe"
                      />
                    </Field>
                    <Field label="Email Address" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                        placeholder="jane@company.com"
                      />
                    </Field>
                  </div>

                  <Field label="Company / Organization" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                      placeholder="Company Name"
                    />
                  </Field>

                  <Field label="Project Details" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                      placeholder="Tell us about the project goals, target audience, and ideal timeline..."
                    />
                  </Field>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-extrabold uppercase tracking-tight text-accent-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
                    >
                      Submit Inquiry
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
        
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/80">
        {label}
      </span>
      {children}
    </label>
  )
}
