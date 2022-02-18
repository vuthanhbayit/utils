export const isAbsoluteUrl = (url: string) => {
  return /^(?:[a-z]+:)/gmi.test(url)
}
