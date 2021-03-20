const numsArray = [...Array.from({ length: 6 }, (_, i): string => i.toString())]

const charsArray = [
  ...Array.from({ length: 6 }, (_, i): string =>
    String.fromCharCode(i + 'A'.charCodeAt(0))
  ),
]

const chars = [...numsArray, ...charsArray] as const

type HexChar = typeof chars[number]

type HexColor = `#${HexChar}${HexChar}${HexChar}${HexChar}${HexChar}${HexChar}`
type HexAColor = `${HexColor}${HexChar}${HexChar}`

const alphaRange = [
  ...Array.from({ length: 100 }, (i: number): number => i / 100),
] as const

type Alpha = typeof alphaRange[number]

export const hexa = (hex: HexColor, alpha: Alpha): HexAColor => {
  console.log(hex)
  const alphaValue = (alpha * 100 + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase()
  let hexValue: string = hex.split('#')[1]

  if (hexValue.length === 3) {
    hexValue = [...[...hexValue].map(i => `${i}${i}`)].toString()
  }

  return `#${hexValue}${alphaValue}` as HexAColor
}
