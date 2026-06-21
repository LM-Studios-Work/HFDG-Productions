/** Custom, brand-built icon family for HFDG services.
 *
 *  These are NOT off-the-shelf icons. They're drawn from the same vocabulary
 *  as the rest of the site — frames, lenses, record dots, play triangles,
 *  broadcast arcs, waveforms — so the set reads as one cohesive system and can
 *  be reused anywhere (nav, cards, footers) by slug.
 *
 *  Every icon is a 24×24 line drawing on `currentColor`, so it inherits the
 *  accent red (or any color) from its parent via `text-*`.
 *
 *  Pass `animate` to bring the mark to life — the CSS in globals.css targets
 *  the `.svc-*` classes only when the wrapper carries `.svc-anim`.
 */

type IconProps = {
  className?: string
  size?: number
  /** When true, the mark plays its idle animation. */
  animate?: boolean
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function Frame({
  children,
  className = "",
  size = 24,
  label,
  animate = false,
}: IconProps & { children: React.ReactNode; label?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`${animate ? "svc-anim " : ""}${className}`}
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {children}
    </svg>
  )
}

/** 01 · Corporate Video — a horizontal screen telling a story (frame + play). */
export function CorporateVideoIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" {...strokeProps} />
      <path className="svc-play" d="M10 9.4l4.6 2.6-4.6 2.6z" fill="currentColor" />
    </Frame>
  )
}

/** 02 · Real Estate Media — a building, framed (roof, walls, opening). */
export function RealEstateIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path className="svc-draw" d="M3.5 11L12 4.5l8.5 6.5" {...strokeProps} />
      <path className="svc-draw" d="M6 10v9h12v-9" {...strokeProps} />
      <path d="M10.2 19v-4.2h3.6V19" {...strokeProps} />
    </Frame>
  )
}

/** 03 · Commercial Production — a clapperboard (lid + teeth + body). */
export function CommercialIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="3" y="9" width="18" height="11" rx="1.6" {...strokeProps} />
      <g className="svc-clap">
        <path d="M3.3 9l1.7-3.6L21 6.8V9" {...strokeProps} />
        <path d="M8.4 5.7L6.6 9" {...strokeProps} />
        <path d="M13.1 6.2L11.3 9" {...strokeProps} />
        <path d="M17.8 6.7L16 9" {...strokeProps} />
      </g>
    </Frame>
  )
}

/** 04 · Event Coverage — a live broadcast signal (record dot + arcs). */
export function EventIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle className="svc-pulse" cx="12" cy="12" r="2.1" fill="currentColor" />
      <path className="svc-arc" d="M8.6 8.6a4.8 4.8 0 000 6.8" {...strokeProps} />
      <path className="svc-arc" d="M15.4 8.6a4.8 4.8 0 010 6.8" {...strokeProps} />
      <path className="svc-arc svc-arc-3" d="M6 6a8.5 8.5 0 000 12" {...strokeProps} />
      <path className="svc-arc svc-arc-3" d="M18 6a8.5 8.5 0 010 12" {...strokeProps} />
    </Frame>
  )
}

/** 05 · Music Video — an audio waveform. */
export function MusicVideoIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path className="svc-bar" d="M4 10v4" {...strokeProps} />
      <path className="svc-bar" d="M8 6.5v11" {...strokeProps} />
      <path className="svc-bar" d="M12 9v6" {...strokeProps} />
      <path className="svc-bar" d="M16 4.5v15" {...strokeProps} />
      <path className="svc-bar" d="M20 8v8" {...strokeProps} />
    </Frame>
  )
}

/** 06 · Social Media Content — a vertical, feed-native reel (frame + play). */
export function SocialIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" {...strokeProps} />
      <path className="svc-play" d="M10.6 9.4l3.8 2.6-3.8 2.6z" fill="currentColor" />
    </Frame>
  )
}

/** 07 · Monthly Content Packages — a recurring cycle around a content dot. */
export function MonthlyIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <g className="svc-spin">
        <path d="M19 12a7 7 0 11-2-4.9" {...strokeProps} />
        <path d="M17 3.6V7.1H13.4" {...strokeProps} />
      </g>
      <circle className="svc-pulse" cx="12" cy="12" r="2" fill="currentColor" />
    </Frame>
  )
}

/** Lookup by service slug — use anywhere the catalog is referenced. */
export const serviceIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  "corporate-video": CorporateVideoIcon,
  "real-estate-media": RealEstateIcon,
  "commercial-production": CommercialIcon,
  "event-coverage": EventIcon,
  "music-video": MusicVideoIcon,
  "social-content": SocialIcon,
  "monthly-packages": MonthlyIcon,
}

/** Render a service icon by slug. Falls back to the corporate mark. */
export function ServiceIcon({ slug, ...props }: IconProps & { slug: string }) {
  const Icon = serviceIcons[slug] ?? CorporateVideoIcon
  return <Icon {...props} />
}
