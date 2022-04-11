import { describe, expect, test } from 'vitest'
import { toCurrencySystem, toCurrencySystemVietnamese } from '../src/currency'

describe('toCurrencySystem', () => {
  test('if value is number', () => {
    expect(toCurrencySystem(0)).toBe('0')
    expect(toCurrencySystem(10)).toBe('10')
    expect(toCurrencySystem(10_000)).toBe('10 K')
    expect(toCurrencySystem(100_000_000)).toBe('100 M')
    expect(toCurrencySystem(100_000_000_000)).toBe('100 B')
  })
})

describe('toCurrencySystemVietnamese', () => {
  test('if value is number', () => {
    expect(toCurrencySystemVietnamese(0)).toBe('0')
    expect(toCurrencySystemVietnamese(10)).toBe('10')
    expect(toCurrencySystemVietnamese(10_000)).toBe('10 nghìn')
    expect(toCurrencySystemVietnamese(100_000_000)).toBe('100 triệu')
    expect(toCurrencySystemVietnamese(100_000_000_000)).toBe('100 tỷ')
  })
})
