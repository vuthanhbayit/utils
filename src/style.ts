import { isDefined, isNumeric } from './is'

/**
 * @param value
 * @return {string}
 * @example toCssUnit(10) => '10px'
 * @example toCssUnit('20.2') => '20.2px'
 * @example toCssUnit('5rem') => '5rem'
 */
export const toCssUnit = (value?: string | number) => {
  if (!isDefined(value)) return undefined

  return isNumeric(value) ? `${value}px` : String(value)
}

/**
 * @param r: number
 * @param g: number
 * @param b: number
 * @return {string}
 * @example rgbToHex(0, 0, 0) => '#000000'
 * @example rgbToHex(255, 255, 255) => '#ffffff'
 */
export const rgbToHex = (r: number, g: number, b: number) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`

/**
 * @return {string}
 * @example randomHex() => '#2e9ab4'
 * @example randomHex() => '#4d6e8c'
 */
export const randomHex = () => `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`
