/**
 * @param array: T[]
 * @param transform: function
 * @return number
 * @example sum([1, 2, 3, 4, 5]) => 15
 * @example sum([{a: 1}, {a:2}, {a:3}], item => item.a) => 6
 */
export const sum = <T>(array: T[], transform = (props: T): number => props as unknown as number) => array.reduce((accumulator, item) => accumulator + transform(item), 0)

/**
 * @param array: T[]
 * @param transform: function
 * @return number
 * @example average([1, 2, 3, 4, 5]) => 3
 * @example average([{a: 1}, {a:2}, {a:3}], item => item.a) => 2
 */
export const average = <T>(array: T[], transform = (props: T): number => props as unknown as number) => sum(array, transform) / array.length
