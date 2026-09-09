type ImageSlotProps = {
  src: string
  alt: string
  radius?: string
}

/** Locally hosted homelab artwork, sized by the surrounding figure. */
export function ImageSlot({ src, alt, radius }: ImageSlotProps) {
  return (
    <img
      className="homelab-image"
      src={src}
      alt={alt}
      width={1672}
      height={941}
      loading="lazy"
      decoding="async"
      style={radius ? { borderRadius: radius } : undefined}
    />
  )
}
