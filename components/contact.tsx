"use client"

import { useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">004</span> — Get in touch
            </p>
            <h2 className="mt-6 text-pretty text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
              Book a
              <br />
              consultation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
              Have a project in mind, or just want to talk it through? Tell us what
              you&apos;re building and we&apos;ll bring the camera.
            </p>
          </Reveal>

          <RevealGroup stagger={0.1} className="mt-10 space-y-6">
            <RevealItem direction="left">
              <a
                href="mailto:hello@hfdgproductions.com"
                className="group flex items-center gap-2 font-heading text-2xl font-extrabold tracking-tight md:text-3xl"
              >
                hello@hfdgproductions.com
                <ArrowUpRight className="size-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </RevealItem>
            <RevealItem direction="left">
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 text-sm font-extrabold uppercase tracking-tight transition-colors hover:bg-foreground hover:text-background"
              >
                <WhatsAppIcon className="size-4" />
                Message us on WhatsApp
              </a>
            </RevealItem>
            <RevealItem direction="left">
              <p className="font-mono text-sm text-muted-foreground">
                Johannesburg · Jeddah · Lagos
              </p>
            </RevealItem>
          </RevealGroup>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-lg border-2 border-foreground bg-card p-6 md:p-8">
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-7" />
                </span>
                <p className="mt-6 text-2xl font-semibold tracking-tight">
                  Message sent
                </p>
                <p className="mt-2 max-w-xs text-muted-foreground">
                  Thanks for reaching out. We&apos;ll get back to you within two
                  business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring"
                    />
                  </Field>
                </div>
                <Field label="Company" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring"
                  />
                </Field>
                <Field label="Tell us about the project" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring"
                  />
                </Field>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Book a consultation
                  <ArrowUpRight className="size-4" />
                </button>
              </form>
            )}
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
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
