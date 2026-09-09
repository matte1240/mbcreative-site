type ImageSlotProps = {
  placeholder: string
  radius?: string
}

/**
 * Static stand-in for the design tool's <image-slot> — same empty-state
 * chrome (dashed ring, icon, caption), no upload/drag behavior since this
 * site has no photos wired in yet.
 */
export function ImageSlot({ placeholder, radius }: ImageSlotProps) {
  return (
    <div className="img-slot" style={radius ? { borderRadius: radius } : undefined}>
      <div className="img-slot-inner">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="img-slot-cap">{placeholder}</span>
      </div>
    </div>
  )
}
