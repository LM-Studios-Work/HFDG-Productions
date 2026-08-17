import { Play } from "lucide-react"
import { RecordDot, FilmCorners } from "@/components/film-ui"

export function AboutHero({ mediaUrl, mediaType }: { mediaUrl: string; mediaType: "video" | "image" | "solid" }) {
  const MediaElement = () => {
    if (mediaType === "solid") {
      return <div className="size-full bg-[#111111] transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
    }
    if (mediaType === "video") {
      return (
        <video
          src={mediaUrl}
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      )
    }
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mediaUrl}
          alt="HFDG Productions studio reel"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </>
    )
  }

  return (
    <section className="relative scroll-mt-20">
      {/* ── MOBILE layout (< lg): media → headline → body → stats ── */}
      <div className="lg:hidden">
        {/* Media: contained square with side padding, sits below navbar */}
        <div className="group relative px-5 pt-20">
          <div className="relative overflow-hidden border-2 border-foreground bg-card aspect-square w-full">
            <MediaElement />

          </div>
        </div>

        {/* Copy */}
        <div className="px-5 pb-16 pt-8">
          <h1 className="text-pretty font-heading text-[2.6rem] font-extrabold uppercase leading-[0.9] tracking-tight">
            Ten years
            <br />
            behind the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">lens.</span>
              <span
                className="absolute inset-x-0 bottom-0.5 z-0 h-3 bg-accent/90"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-6 text-lg font-semibold leading-snug text-foreground">
            HFDG Productions is a filmmaker-led studio. Every brand has a film
            worth making.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            One director, a tight crew, two cities. Jeddah and Johannesburg.
            Corporate, real estate and commercial stories turned into footage
            that sells.
          </p>
          {/* Stats row */}
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t border-foreground/20 pt-8">
            {[
              { k: "Experience", v: "10+ years" },
              { k: "Based in", v: "JED · JNB" },
              { k: "Affiliate", v: "35Film" },
            ].map((d) => (
              <div key={d.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{d.k}</dt>
                <dd className="mt-1 font-heading text-2xl font-extrabold tracking-tight">{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── DESKTOP layout (lg+): split columns ── */}
      <div className="hidden lg:block px-8 pt-24 pb-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-center gap-16">
          {/* Left: copy */}
          <div className="col-span-6">
            <h1 className="text-pretty font-heading text-7xl font-extrabold uppercase leading-[0.9] tracking-tight xl:text-8xl">
              Ten years
              <br />
              behind the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">lens.</span>
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-5 bg-accent/90 md:bottom-2 md:h-6"
                  aria-hidden="true"
                />
              </span>
            </h1>
            <p className="mt-10 max-w-xl text-xl font-semibold leading-snug text-foreground">
              HFDG Productions is a filmmaker-led studio. Every brand has a film
              worth making.
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              One director, a tight crew, two cities. Jeddah and Johannesburg.
              Corporate, real estate and commercial stories turned into footage
              that sells.
            </p>
            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {[
                { k: "Experience", v: "10+ years" },
                { k: "Based in", v: "JED · JNB" },
                { k: "Affiliate", v: "35Film" },
              ].map((d) => (
                <div key={d.k}>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.k}</dt>
                  <dd className="mt-1 font-heading text-3xl font-extrabold tracking-tight">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: tall film */}
          <div className="col-span-6 flex items-center justify-center">
            <div className="group relative w-full flex justify-center">
              <div
                className="relative overflow-hidden border-2 border-foreground bg-card"
                style={{ height: 'min(45vw, calc(100svh - 16rem))', width: 'min(45vw, calc(100svh - 16rem))' }}
              >
                <FilmCorners size={40} inset={-1} className="z-20" />
                <div className="absolute inset-0">
                  <MediaElement />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
