export const isAbsoluteUrl = (url: string) => {
  return /^(?:[a-z]+:)/gmi.test(url)
}

export const isRelativeUrl = (url: string) => {
  return !isAbsoluteUrl(url)
}
