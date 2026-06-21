export function LocationsMarquee() {
  const words = ["Johannesburg", "Jeddah", "Lagos", "Riyadh", "Berlin"]
  // Duplicate a few times to ensure smooth infinite scroll
  const row = [...words, ...words, ...words, ...words]

  return (
    <div className="flex overflow-hidden border-b-2 border-foreground bg-foreground py-6 sm:py-8">
      <div className="animate-marquee flex w-max items-center gap-12 pr-12">
        {row.map((word, i) => (
          <div key={`${word}-${i}`} className="flex items-center gap-12">
            <span className="font-heading text-4xl font-extrabold uppercase tracking-widest text-background sm:text-6xl lg:text-7xl">
              {word}
            </span>
            <span className="size-4 rounded-full bg-accent animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}
