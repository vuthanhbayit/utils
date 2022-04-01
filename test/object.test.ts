import { omit } from '../src/object'

describe('omit', () => {
  it('if true', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, 'a')).toEqual({ b: 2, c: 3 })
  })
})
