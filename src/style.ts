import { isDefined, isNumeric } from './is'

/**
 * @param value
 * @return {string}
 * @example formatCssUnit(10) => '10px'
 * @example formatCssUnit('20.2') => '20.2px'
 * @example formatCssUnit('5rem') => '5rem'
 */

export const formatCssUnit = (value?: string | number) => {
  if (!isDefined(value)) return undefined

  return isNumeric(value) ? `${value}px` : String(value)
}
