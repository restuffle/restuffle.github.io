import { useEffect, useRef, useState } from 'react'

/** Adds .is-visible when the element scrolls into view. */
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/** Typewriter cycling through a list of phrases. */
export function useTypewriter(phrases, { typeMs = 55, eraseMs = 28, holdMs = 1800 } = {}) {
  const [text, setText] = useState('')
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setText(phrases[0])
      return
    }
    let i = 0
    let pos = 0
    let dir = 1 // 1 typing, -1 erasing
    let timer
    const tick = () => {
      const phrase = phrases[i]
      pos += dir
      setText(phrase.slice(0, pos))
      let delay = dir === 1 ? typeMs : eraseMs
      if (dir === 1 && pos === phrase.length) {
        dir = -1
        delay = holdMs
      } else if (dir === -1 && pos === 0) {
        dir = 1
        i = (i + 1) % phrases.length
        delay = 300
      }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [phrases, typeMs, eraseMs, holdMs])

  return { text, reduced }
}

/** Tracks which section is currently in view for nav highlighting. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

/** Scroll progress 0–1 for the top progress bar. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? window.scrollY / max : 0)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return progress
}

/** Pointer-following card glow: sets --mx/--my CSS vars on the element. */
export function useCardGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [])
  return ref
}
