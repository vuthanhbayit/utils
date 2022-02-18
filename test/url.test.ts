import { isAbsoluteUrl, isRelativeUrl } from '../src/url'

describe('isAbsoluteUrl', () => {
  it('if url is absolute', () => {
    expect(isAbsoluteUrl('https://example.com')).toBe(true)
    expect(isAbsoluteUrl('tel:1234567890')).toBe(true)
    expect(isAbsoluteUrl('http://localhost:3000')).toBe(true)
  })
  it('if url is relative', () => {
    expect(isAbsoluteUrl('/example')).toBe(false)
    expect(isAbsoluteUrl('example')).toBe(false)
    expect(isAbsoluteUrl('./example')).toBe(false)
  })
})

describe('isRelativeUrl', () => {
  it('if url is absolute', () => {
    expect(isRelativeUrl('https://example.com')).toBe(false)
    expect(isRelativeUrl('tel:1234567890')).toBe(false)
    expect(isRelativeUrl('http://localhost:3000')).toBe(false)
  })
  it('if url is relative', () => {
    expect(isRelativeUrl('/example')).toBe(true)
    expect(isRelativeUrl('example')).toBe(true)
    expect(isRelativeUrl('./example')).toBe(true)
  })
})
