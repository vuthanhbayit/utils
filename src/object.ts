export function hasOwnProperty<T>(obj: T, v: PropertyKey) {
  if (obj == null) return false
  return Object.prototype.hasOwnProperty.call(obj, v)
}

interface Omit {
  <T extends object, K extends [...(keyof T)[]]>
  (obj: T, ...keys: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2]
  }
}

export const omit: Omit = (obj, ...keys) => {
  const rest = {} as {
    // eslint-disable-next-line no-use-before-define
    [K in keyof typeof obj]: (typeof obj)[K]
  }

  let key: keyof typeof obj
  // eslint-disable-next-line no-restricted-syntax
  for (key in obj) {
    if (!(keys.includes(key))) {
      rest[key] = obj[key]
    }
  }

  return rest
}
