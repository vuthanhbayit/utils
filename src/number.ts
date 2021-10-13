import { isNumber } from './is'

/**
 *
 * @param value
 * @return number
 * @example
 * toNumeric('1') // return 1
 */

export const toNumber = (value: string | number) => {
  return isNumber(value) ? value : Number(value)
}
