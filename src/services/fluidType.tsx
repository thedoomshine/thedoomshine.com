import { css, SerializedStyles } from '@emotion/react'

export const fluidType = (minVW: string, maxVW: string, minFontSize: string, maxFontSize: string): SerializedStyles => {
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