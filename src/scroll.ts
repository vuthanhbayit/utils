import { cancelRaf, raf } from './requestAnimationFrame'

interface ScrollEvent extends Event {
  direction: 'down' | 'up'
  last: boolean
  y: number
  x: number
}

export const handleScrollElement = (
  target: HTMLElement,
  callback: (event: ScrollEvent) => void,
) => {
  let lastScrollTop = 0

  const listener = (e: any) => {
    const { scrollTop, offsetHeight, scrollHeight, scrollLeft } = target

    e.y = scrollTop
    e.x = scrollLeft

    if (scrollTop > lastScrollTop)
      e.direction = 'down'
    else
      e.direction = 'up'

    if (scrollTop + offsetHeight === scrollHeight)
      e.last = true
    else
      e.last = false

    lastScrollTop = scrollTop

    callback(e)
  }

  target.addEventListener('scroll', listener)

  const stop = () => target.removeEventListener('scroll', listener)

  return stop
}

let rafId: number

export const scrollLeftTo = (
  scroller: HTMLElement,
  to: number,
  duration: number,
) => {
  cancelRaf(rafId)

  let count = 0
  const from = scroller.scrollLeft
  const frames = duration === 0 ? 1 : Math.round(duration / 16)

  const animate = () => {
    scroller.scrollLeft += (to - from) / frames

    if (++count < frames)
      rafId = raf(animate)
  }

  animate()
}
