import { isBrowser } from './is'

const root = (isBrowser ? window : global) as unknown as Window

let prev = Date.now()

const rafPolyfill = (fn: FrameRequestCallback): number => {
  const curr = Date.now()
  const ms = Math.max(0, 16 - (curr - prev))
  const id = setTimeout(fn, ms)

  prev = curr + ms

  return id
}

export const raf = (fn: FrameRequestCallback): number => {
  const requestAnimationFrame = root.requestAnimationFrame || rafPolyfill

  return requestAnimationFrame.call(root, fn)
}

export const cancelRaf = (id: number) => {
  const cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout

  cancelAnimationFrame.call(root, id)
}
