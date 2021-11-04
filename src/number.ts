import { isNumber, isNumeric } from './is'

/**
 *
 * @param value
 * @return number
 * @example
 * toNumber('1') // return 1
 */
export const toNumber = (value: string | number) => {
  return isNumber(value) ? value : Number(value)
}

/**
 *
 * @param value
 * @return number
 * @example
 * toNumberic('1') // return 1
 */
export const toNumberic = (value: string | number) => {
  return isNumeric(value) ? Number(value) : value
}
