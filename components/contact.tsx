"use client"

import { useState } from "react"
import { ArrowUpRight, Check, MessageCircle } from "lucide-react"

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
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            006 — Get in touch
          </p>
          <h2 className="mt-6 text-pretty text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
            Book a
            <br />
            consultation.
          </h2>
          <p className="mt-8 max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
            Have a project in mind, or just want to talk it through? Tell us what
            you&apos;re building and we&apos;ll bring the camera.
          </p>

          <div className="mt-10 space-y-6">
            <a
              href="mailto:hello@hfdgproductions.com"
              className="group flex items-center gap-2 font-heading text-2xl font-extrabold tracking-tight md:text-3xl"
            >
              hello@hfdgproductions.com
              <ArrowUpRight className="size-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 text-sm font-extrabold uppercase tracking-tight transition-colors hover:bg-foreground hover:text-background"
            >
              <MessageCircle className="size-4" />
              Message us on WhatsApp
            </a>
            <p className="font-mono text-sm text-muted-foreground">
              Johannesburg · Jeddah · Lagos
            </p>
          </div>
        </div>

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
