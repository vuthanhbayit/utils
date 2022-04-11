import { describe, expect, test } from 'vitest'
import { removeVietnameseTones, truncateText, toKebabCase } from '../src/string'

describe('removeVietnameseTones', () => {
  test('if true', () => {
    expect(removeVietnameseTones('Vũ Thanh Bảy')).toBe('Vu Thanh Bay')
    expect(removeVietnameseTones('aáàảạ')).toBe('aaaaa')
  })
})

describe('truncateText', () => {
  test('if true', () => {
    const text = 'Apple thành công khi đưa ra một hệ sinh thái riêng sử dụng nền tảng hệ điều hành do chính hãng phát triển. Các dòng laptop, PC của hãng đều có độ ổn định, hiệu năng và thời lượng pin vượt trội so với phần còn lại.'

    expect(truncateText(text, 20)).toBe('Apple thành công ...')
    expect(truncateText(text, 17)).toBe('Apple thành công ...')
  })
})

describe('toKebabCase', () => {
  test('if true', () => {
    expect(toKebabCase('Một hai ba')).toBe('mot-hai-ba')
  })
})
