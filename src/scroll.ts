import { cancelRaf, raf } from './requestAnimationFrame'
import { isWindow } from './is'

export interface ScrollEvent extends Event {
  direction: 'down' | 'up'
  last: boolean
  y: number
  x: number
}

export const handleScrollElement = (
  callback: (event: ScrollEvent) => void,
  target?: HTMLElement,
) => {
  const _target = target || window
  let lastScrollTop = 0

  const listener = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight, scrollLeft } = isWindow(_target) ? document.documentElement : _target

    e.y = scrollTop
    e.x = scrollLeft

    if (scrollTop > lastScrollTop)
      e.direction = 'down'
    else
      e.direction = 'up'

    if (scrollTop + clientHeight === scrollHeight)
      e.last = true
    else
      e.last = false

    lastScrollTop = scrollTop

    callback(e)
  }

  _target.addEventListener('scroll', listener)

  const stop = () => _target.removeEventListener('scroll', listener)

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
