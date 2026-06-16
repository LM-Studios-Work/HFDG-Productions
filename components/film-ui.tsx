/** Shared cinematic UI motifs inspired by the reference:
 *  - FilmCorners: L-shaped viewfinder brackets pinned to a relative parent's corners
 *  - FocusScale: a camera focus ruler (3..2..1..0..1..2..3) with a center tick
 *  - RecordDot: the blinking red "recording" indicator with a soft halo
 */

/** Blinking red record dot with a soft red halo. */
export function RecordDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2 w-2 shrink-0 rounded-full bg-accent dot-glow animate-blink-dot ${className}`}
      aria-hidden="true"
    />
  )
}

/** Four L-shaped corner brackets that frame the nearest `relative` parent.
 *  Render inside a `relative` container. Decorative only. */
export function FilmCorners({
  className = "",
  size = 28,
  inset = 16,
  thickness = 2,
}: {
  className?: string
  size?: number
  inset?: number
  thickness?: number
}) {
  const common = "absolute border-foreground/70"
  const len = `${size}px`
  const off = `${inset}px`
  const t = `${thickness}px`
  return (
    <div className={`pointer-events-none absolute inset-0 z-10 ${className}`} aria-hidden="true">
      {/* top-left */}
      <span className={`${common} border-l border-t`} style={{ top: off, left: off, width: len, height: len, borderLeftWidth: t, borderTopWidth: t }} />
      {/* top-right */}
      <span className={`${common} border-r border-t`} style={{ top: off, right: off, width: len, height: len, borderRightWidth: t, borderTopWidth: t }} />
      {/* bottom-left */}
      <span className={`${common} border-b border-l`} style={{ bottom: off, left: off, width: len, height: len, borderLeftWidth: t, borderBottomWidth: t }} />
      {/* bottom-right */}
      <span className={`${common} border-b border-r`} style={{ bottom: off, right: off, width: len, height: len, borderRightWidth: t, borderBottomWidth: t }} />
    </div>
  )
}

/** Camera focus ruler: 3..2..1..0..1..2..3 with an accented center & tick. */
export function FocusScale({ className = "" }: { className?: string }) {
  const marks = ["3", "2", "1", "0", "1", "2", "3"]
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`} aria-hidden="true">
      <div className="flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-muted-foreground sm:text-sm">
        {marks.map((m, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className={i === 3 ? "text-accent" : ""}>{m}</span>
            {i < marks.length - 1 && (
              <span className="text-muted-foreground/40">{".."}</span>
            )}
          </span>
        ))}
      </div>
      {/* center tick */}
      <span className="h-3 w-px bg-accent" />
    </div>
  )
}
