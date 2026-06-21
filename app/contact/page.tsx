import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactPageHero } from "@/components/contact-page-hero"
import { ContactPageForm } from "@/components/contact-page-form"
import { ContactPageFaq } from "@/components/contact-page-faq"

export const metadata: Metadata = {
  title: "Contact — Let's build something great | HFDG Productions",
  description:
    "Have a project in mind, or just want to talk it through? Tell us what you're building and we'll bring the camera. Contact HFDG Productions.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactPageHero />
        <ContactPageForm />
        <ContactPageFaq />
      </main>
      <SiteFooter />
    </>
  )
}
