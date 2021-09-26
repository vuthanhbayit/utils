export const isBrowser = typeof window !== 'undefined'
export const isDefined = <T>(val: T): val is NonNullable<T> => val !== undefined && val !== null
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isNumeric = (val: string | number): val is number => isNumber(val) || /^\d+(\.\d+)?$/.test(val)
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'
export const isArray = (val: unknown): val is any[] => Array.isArray(val)
export const isCrawler = (userAgent: string) => /bot|crawler|spider|crawling/i.test(userAgent)
export const isWindow = (val: any): val is Window => typeof window !== 'undefined' && toString.call(val) === '[object Window]'
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'

export const isImage = (filename: string) => {
  const regexImage = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i

  return regexImage.test(filename)
}

export const isVideo = (filename: string) => {
  const regexImage = /\.(m4v|avi|mpg|mp4|webm)$/i

  return regexImage.test(filename)
}

/**
 * @param value
 * @return {boolean}
 * @example isEmpty(null) => true
 * @example isEmpty(undefined) => true
 * @example isEmpty(1) => false
 * @example isEmpty(0) => true
 * @example isEmpty(NaN) => true
 * @example isEmpty('') => true
 * @example isEmpty(' ') => true
 * @example isEmpty({}) => true
 * @example isEmpty([]) => true
 * @example isEmpty(false) => true
 * @example isEmpty(true) => false
 * @example isEmpty({ value: 1 }) => false
 * @example isEmpty({ value: null }) => true
 * @example isEmpty({ value: { value1: {} } }) => true
 */
export const isEmpty = <T>(val: T) => {
  if (!isDefined(val)) return true

  if (typeof val === 'string' && val.trim() === '') return true

  if (typeof val === 'number' && (val === 0 || Number.isNaN(val))) return true

  if (typeof val === 'boolean' && val === false) return true

  if (isArray(val) && val.length === 0) return true

  if (isObject(val)) {
    const values = Object.values(val)

    if (values.length === 0 || values.every(isEmpty))
      return true
  }

  return false
}

/**
 * @param value
 * @return {boolean}
 * @example isExist(null) => false
 * @example isExist(undefined) => false
 * @example isExist(1) => true
 * @example isExist('') => false
 * @example isExist(' ') => false
 * @example isExist({}) => false
 * @example isExist([]) => false
 * @example isExist(false) => false
 * @example isExist(true) => true
 * @example isExist({ value: 1 }) => true
 * @example isExist({ value: null }) => false
 * @example isExist({ value: { value1: {} } }) => false
 */
export const isExist = <T>(val: T) => {
  return !isEmpty(val)
}

/**
 * @param (value, other)
 * @return {boolean}
 * @example isEqual([], {}) => false
 * @example isEqual([], []) => true
 * @example isEqual([1, 2], [1, 2]) => true
 * @example isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }) => true
 * @example isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }) => false
 */
export const isEqual = <T>(value: T, other: T) => {
  if (typeof value !== typeof other) return false

  if (isArray(value) && isArray(other))
    return value.sort().toString() === other.sort().toString()

  if (isObject(value) && isObject(other)) {
    return (
      JSON.stringify(Object.entries(value).sort())
            === JSON.stringify(Object.entries(other).sort())
    )
  }

  return value === other
}
