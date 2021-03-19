const numsArray = [...Array.from({ length: 6 }, (_, i): string => i.toString())]

const charsArray = [
  ...Array.from({ length: 6 }, (_, i): string =>
    String.fromCharCode(i + 'A'.charCodeAt(0))
  ),
]

const chars: readonly string[] = [...numsArray, ...charsArray] as const

type HexChar = typeof chars[number]
type HexCluster = `${HexChar}${HexChar}`
type HexColor = `#${HexCluster}${HexCluster}${HexCluster}`
type HexAColor = `${HexColor}${HexCluster}`

export const hexa = (hex: string, alpha: number): HexAColor => {
  const alphaValue = (alpha + 0x10000).toString(16).substr(-2).toUpperCase()
  let hexValue: string = hex.split('#')[1]

  if (hexValue.length === 3) {
    hexValue = [...[...hexValue].map(i => `${i}${i}`)].toString()
  }

  return `#${hexValue}${alphaValue}` as HexAColor
}
