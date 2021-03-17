import { css } from '@emotion/react'
import { rgba } from 'emotion-rgba'

import { getCSSVariables } from './variables'

import { fluidType } from '~/services'

const MIN_WIDTH = `320px`
const MAX_WIDTH = `1280px`
const MIN_FONT_SIZE = `16px`
const MAX_FONT_SIZE = `24px`

export const variables = css`
  :root {
    ${getCSSVariables()}
  }
`
export const reset = css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::selection {
    background-color: ${rgba(``, 0.75)};
    color: $black;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${fluidType(MIN_WIDTH, MAX_WIDTH, MIN_FONT_SIZE, MAX_FONT_SIZE)}
  }
  body {
    font-family: var(--font-mono);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  h1, h2, h3 {
    letter-spacing: 1px;
  }
  ul {
    list-style: none;
  }
`
