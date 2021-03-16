import { css, SerializedStyles } from '@emotion/react'

export const fonts = {
  mono: `'IBM Plex Mono'`,
  serif: `'Playfair Display'`,
  [`system-mono`]: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  [`system-sans`]: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  [`system-serif`]: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
}

export function fluidType(minVW: string, maxVW: string, minFontSize: string, maxFontSize: string): SerializedStyles {
  return css`
    font-size: ${minFontSize};
    @media (minwidth: ${minVW}) {
      font-size:
        calc(${minFontSize} +
        ${parseInt(maxFontSize) - parseInt(minFontSize)} *
        ((100vw - ${minVW}) /
        ${parseInt(maxVW) - parseInt(minVW)}));
    }
    @media (min-width: ${maxVW}) {
      font-size: ${maxFontSize};
    }
  `
}