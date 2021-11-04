import { toCurrencySystem } from '../src/currency'

describe('toCurrencySystem', () => {
  it('if value is number', () => {
    expect(toCurrencySystem(10)).toBe('10')
    expect(toCurrencySystem(10_000)).toBe('10 K')
    expect(toCurrencySystem(100_000_000)).toBe('100 M')
    expect(toCurrencySystem(100_000_000_000)).toBe('100 B')
  })
})
