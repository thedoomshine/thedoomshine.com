/**
 * @throws Will throw an error if alpha is not a decimal between 1 and 0 (e.g. 0.16)
 * @param {string} alpha a decimal between 1 and 0 (e.g. 0.16)
 * @returns {string} a 2 character hex code denoting an alpha value
 */
function getAlphaCode(alpha: number): string {
  if (alpha <= 1 && alpha >= 0) {
    const alphaValue = Math.round(alpha * 100) / 100
    return (Math.round(alphaValue * 255) + 0x10000)
      .toString(16)
      .substr(-2)
      .toUpperCase()
  }

  throw new Error(`${alpha} is not a valid alpha code`)
}

/**
 * @throws Will throw an error if color is not a valid 3 or 6 digit hex color code (e.g. #ffffff or #fff)
 * @param {string} color a valid 3 or 6 digit hex color code (e.g. #ffffff or #fff)
 * @returns {string} a 6 digit hex color code (e.g. #ffffff)
 */
function getHexCode(color: string): string {
  const colorRegex = /^#(?:[0-9a-f]{3}){1,2}$/i

  if (colorRegex.test(color)) {
    let hexChars = color.split('#')[1]
    const hexDigits = color

    if (hexDigits.length === 3) {
      hexChars = [...hexChars].map(i => `${i}${i}`).join()
    }

    return `#${hexChars}`
  }

  throw new Error(`${color} is not a valid hex color`)
}

/**
 * @param {string} color - A valid hex color (e.g. #ffffff or #fff)
 * @param {number} alpha - A decimal between 1 and 0 (e.g. 0.16)
 * @returns {string} An 8 digit hex color (e.g. #ffffff16)
 */
export const hexa = (color: string, alpha: number): string => {
  const alphaCode: string = getAlphaCode(alpha)
  const colorCode: string = getHexCode(color)

  return `${colorCode}${alphaCode}`
}
