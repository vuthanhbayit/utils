import { toNumber } from './number'

export interface FormatterOption {
  thousandsSeparator: string
  prefix: string
}

export const DEFAULT_FORMATTER_OPTION: FormatterOption = {
  thousandsSeparator: ',',
  prefix: '',
}

export const REGEX_FORMATTER = /\B(?=(\d{3})+(?!\d))/g

const mergeOptions = (options: Partial<FormatterOption>) => {
  return { ...DEFAULT_FORMATTER_OPTION, ...options }
}

export const formatter = (options: Partial<FormatterOption> = {}) => {
  const formatterOptions = mergeOptions(options)

  return (value: number | string) => {
    const _prefix = formatterOptions.prefix ? `${formatterOptions.prefix} ` : ''

    return `${_prefix}${value}`.replace(REGEX_FORMATTER, formatterOptions.thousandsSeparator)
  }
}

export const parser = (options: Partial<FormatterOption> = {}) => {
  const formatterOptions = mergeOptions(options)

  const regexParser = new RegExp(`\\${formatterOptions.prefix}\\s?|(${formatterOptions.thousandsSeparator}*)`, 'g')

  return (value: string) => value.replace(regexParser, '')
}

export const formatCurrency = (value: number | string) => {
  const val = Number.isInteger(value) ? value : Number(Number(value).toFixed(2))

  return formatter(DEFAULT_FORMATTER_OPTION)(val)
}

/**
 * @param value: string | number
 * @return string
 * @example toCurrencySystem(10_000) => 10 K
 * @example toCurrencySystem('10000000') => 10 M
 */
export const toCurrencySystem = (value: number | string, units = ['', 'K', 'M', 'B']) => {
  const number = toNumber(value)

  if (number === 0) return '0'

  const i = Math.floor(Math.log(number) / Math.log(1000))

  return [Math.round(number / Math.pow(1000, i)), units[i]].filter(Boolean).join(' ')
}

/**
 * @param value: string | number
 * @return string
 * @example toCurrencySystemVietnamese(10_000) => 10 Nghìn
 * @example toCurrencySystemVietnamese('10000000') => 10 Triệu
 */
export const toCurrencySystemVietnamese = (value: number | string) => {
  return toCurrencySystem(value, ['', 'Nghìn', 'Triệu', 'Tỷ'])
}
