import { Global, css } from '@emotion/react'
import React from 'react'

import { fluidType } from '../services'
import { CSSProps, ThemeVariable } from './types.d'
import { getCSSVariables } from './variables'

const globalStyles = (theme: ThemeVariable) => css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::selection {
    background-color: ${theme.colors.yellow.css};
    color: ${theme.colors.primary.css};
  }
  html {
    ${getCSSVariables()}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${fluidType(
      theme.breakpoints.sm.js,
      theme.breakpoints.lg.js,
      theme.fonts['min-size'].js,
      theme.fonts['max-size'].js
    )}
  }
  body {
    font-family: ${theme.fonts.mono.css};
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  h1,
  h2,
  h3 {
    letter-spacing: 1px;
  }
  ul {
    list-style: none;
  }
`

export const GlobalTheme = ({ theme }: CSSProps) => (
  <Global styles={globalStyles(theme)} />
)
