export function hasOwnProperty<T>(obj: T, v: PropertyKey) {
  if (obj == null) return false
  return Object.prototype.hasOwnProperty.call(obj, v)
}

export function omit<T, K extends Extract<keyof T, string>>(obj: T, ...keys: K[]): Omit<T, K> {
  const _obj = { ...obj }
  keys.forEach(key => delete _obj[key])
  return _obj
}
