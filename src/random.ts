export const getRandomInt = (min = 1, max = 10000) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomString = (length = 5) => {
  let result = ''
  const characters
    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))

  return result
}
