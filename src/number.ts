import { isNumeric } from './is'

/**
 *
 * @param value
 * @return number
 * @example
 * toNumeric('1') // return 1
 */

export const toNumeric = (value: string | number) => {
  return isNumeric(value) ? Number(value) : value
}
