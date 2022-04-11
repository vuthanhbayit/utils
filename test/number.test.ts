import { describe, expect, test } from 'vitest'
import { toNumber, toNumberic } from '../src/number'

describe('toNumber', () => {
  test('if value is number', () => {
    expect(toNumber(1)).toBe(1)
    expect(toNumber(2)).toBe(2)
    expect(toNumber(3)).toBe(3)
  })
  test('if value is numberic', () => {
    expect(toNumber('1')).toBe(1)
    expect(toNumber('2')).toBe(2)
    expect(toNumber('3')).toBe(3)
  })
  test('if value is character', () => {
    expect(toNumber('a')).toBeNaN()
    expect(toNumber('b')).toBeNaN()
    expect(toNumber('c')).toBeNaN()
  })
})

describe('toNumberic', () => {
  test('if value is number', () => {
    expect(toNumberic(1)).toBe(1)
    expect(toNumberic(2)).toBe(2)
    expect(toNumberic(3)).toBe(3)
  })
  test('if value is numberic', () => {
    expect(toNumber('1')).toBe(1)
    expect(toNumber('2')).toBe(2)
    expect(toNumber('3')).toBe(3)
  })
  test('if value is character', () => {
    expect(toNumberic('a')).toBe('a')
    expect(toNumberic('b')).toBe('b')
    expect(toNumberic('c')).toBe('c')
  })
})
