import { describe, expect, test } from 'vitest'
import { omit, hasOwnProperty, clearUndefined, objectPick } from '../src/object'

describe('objectPick', () => {
  test('if true', () => {
    expect(objectPick({ a: 1, b: 2, c: 3 }, ['a'])).toEqual({ a: 1 })
    expect(objectPick({ a: 1, b: 2, c: 3 }, ['a', 'b'])).toEqual({ a: 1, b: 2 })
  })
})

describe('clearUndefined', () => {
  test('if true', () => {
    expect(clearUndefined({ a: 1, b: 2, c: undefined })).toEqual({ a: 1, b: 2 })
  })
})

describe('hasOwnProperty', () => {
  test('if true', () => {
    expect(hasOwnProperty({ a: 1, b: 2, c: 3 }, 'a')).toBeTruthy()
  })

  test('if false', () => {
    expect(hasOwnProperty({ a: 1, b: 2, c: 3 }, 'd')).toBeFalsy()
  })
})

describe('hasOwnProperty', () => {
  test('if true', () => {
    expect(hasOwnProperty({ a: 1, b: 2, c: 3 }, 'a')).toBeTruthy()
  })

  test('if false', () => {
    expect(hasOwnProperty({ a: 1, b: 2, c: 3 }, 'd')).toBeFalsy()
  })
})

describe('omit', () => {
  test('if true', () => {
    expect(omit({ a: 1 }, 'a')).toEqual({})
    expect(omit({ a: 1, b: 2, c: 3 }, 'a')).toEqual({ b: 2, c: 3 })
  })
})
