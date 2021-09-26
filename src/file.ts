/**
 * Convert from bytes to KB, MB, GB, TB
 * @param bytes: number
 * @param unit: 1000 || 1024
 * @return string
 *
 * @example bytesToSize(1024) // return 1 KB
 * @example bytesToSize(2 * 1024 * 1024) // return 2 MB
 */
export const bytesToSize = (bytes: number, unit = 1024) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

  if (bytes === 0) return '0 Byte'

  const i = Math.floor(Math.log(bytes) / Math.log(1024))

  return `${Math.round(bytes / Math.pow(unit, i))} ${sizes[i]}`
}

export const getDurationVideo = (file: File) => {
  return new Promise<number>((resolve) => {
    const video = document.createElement('video')

    video.preload = 'metadata'

    video.onloadedmetadata = function() {
      window.URL.revokeObjectURL(video.src)

      resolve(video.duration)
    }

    video.src = URL.createObjectURL(file)
  })
}

/**
 * @param fileName: string
 * @return string
 * getExtensionFile('1.txt') // 'txt'
 */
export const getExtensionFile = (fileName: string) => {
  return fileName.substr(fileName.lastIndexOf('.') + 1)
}

/**
 * @param fileName: string
 * @return string
 * getExtensionFile('abcdef.txt') // 'abcdef'
 */
export const getFileName = (fileName: string) => {
  return fileName.substr(0, fileName.lastIndexOf('.'))
}

/**
 * @param fileName: string
 * @param length: number
 * @return string
 * getExtensionFile('abcdefgh123456789.txt') // 'abcdef...6789.text'
 */
export const getTruncateFileName = (fileName: string, length = 10) => {
  const extension = getExtensionFile(fileName)
  const name = getFileName(fileName)

  if (name.length <= length) return fileName

  const before = name.substr(0, 6)
  const after = name.substr(-4)

  return `${before}...${after}.${extension}`
}
