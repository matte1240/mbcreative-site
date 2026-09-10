import { useEffect, type RefObject } from 'react'

/** Progressive enhancement: content never depends on an animation to be visible. */
export function usePageMotion(root: RefObject<HTMLElement | null>, page: string) {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const animations = new Set<Animation>()
    let observer: IntersectionObserver | undefined
    const stop = () => {
      observer?.disconnect()
      animations.forEach(animation => animation.cancel())
      animations.clear()
    }
    const start = () => {
      stop()
      if (media.matches || !root.current || !('IntersectionObserver' in window)) return
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer?.unobserve(entry.target)
          // Large sections reveal only their heading; nested cards reveal independently.
          const target = entry.target.matches('section')
            ? entry.target.querySelector('h2') : entry.target
          if (!target || !('animate' in target)) continue
          const animation = target.animate([
            { opacity: 0.25, transform: 'perspective(1000px) translateY(28px) rotateX(4deg)' },
            { opacity: 1, transform: 'perspective(1000px) translateY(0) rotateX(0)' },
          ], { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' })
          animations.add(animation)
          animation.onfinish = () => animations.delete(animation)
        }
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' })
      root.current.querySelectorAll('[data-reveal]').forEach(el => observer?.observe(el))
    }
    start()
    media.addEventListener('change', start)
    return () => { stop(); media.removeEventListener('change', start) }
  }, [root, page])
}
