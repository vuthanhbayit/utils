import { describe, expect, test } from 'vitest'
import { isVnMobilePhone, isEmail } from '../src/validate'

describe('isVnMobilePhone', () => {
  test('if true', () => {
    expect(isVnMobilePhone('0912345678')).toBeTruthy()
    expect(isVnMobilePhone('0322345678')).toBeTruthy()
  })
  test('if false', () => {
    expect(isVnMobilePhone('0123456789')).toBeFalsy()
    expect(isVnMobilePhone('0312345678')).toBeFalsy()
  })
})

describe('isEmail', () => {
  test('if true', () => {
    expect(isEmail('abc@xyz.com')).toBeTruthy()
    expect(isEmail('ab.c@xyz.com.vn')).toBeTruthy()
  })

  test('if false', () => {
    expect(isEmail('abc@')).toBeFalsy()
    expect(isEmail('abc@sx@')).toBeFalsy()
  })
})
