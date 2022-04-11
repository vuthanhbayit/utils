import { describe, expect, test } from 'vitest'
import { randomHex, rgbToHex, toCssUnit } from '../src/style'
import { range } from '../src/array'

describe('toCssUnit', () => {
  test('if true', () => {
    expect(toCssUnit('10')).toBe('10px')
    expect(toCssUnit(10)).toBe('10px')
    expect(toCssUnit('10%')).toBe('10%')
    expect(toCssUnit('10em')).toBe('10em')
  })
})

describe('rgbToHex', () => {
  test('if true', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000')
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff')
    expect(rgbToHex(10, 20, 30)).toBe('#0a141e')
  })
})

describe('randomHex', () => {
  test.each(range(1, 100))('index %i', () => {
    expect(randomHex()).toMatch(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
  })
})
