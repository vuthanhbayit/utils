import { isDefined, isObject, isArray } from './is'

export const cloneDeep = <T extends Record<string, any> | null | undefined>(
  collection: T,
): T => {
  if (!isDefined(collection))
    return collection

  if (isArray(collection))
    return collection.map(cloneDeep) as unknown as T

  if (isObject(collection)) {
    const obj = {} as Record<string, any>

    Object.keys(collection).forEach((key) => {
      obj[key] = cloneDeep(collection[key])
    })

    return obj as T
  }

  return collection
}
