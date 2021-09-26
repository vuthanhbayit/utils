export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

/**
 * @param array: T[]
 * @param transform: function
 * @return number
 * @example sum([1, 2, 3, 4, 5]) => 15
 * @example sum([{a: 1}, {a:2}, {a:3}], item => item.a) => 6
 */
export function sum<T>(
  array: T[],
  transform = (props: T): number => props as unknown as number,
) {
  return array.reduce((accumulator, item) => accumulator + transform(item), 0)
}
