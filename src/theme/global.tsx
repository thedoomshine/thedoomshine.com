import { Global, css } from '@emotion/react'
import React from 'react'

import { GroupType } from './types'
import { fluidType, getCSSVariables, textShadow } from './utils'

const shadow = (theme: GroupType) => css`
  color: ${theme.colors.highlight.css};
  text-shadow: ${textShadow(theme.colors.shadow.css, -0.015, 0.2)};
`

const globalStyles = (theme: GroupType) => css`
  :root {
    ${getCSSVariables()}
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition-property: color, background-color, background-image, border;
    transition-duration: 0.2s;
  }
  *::selection {
    ${shadow(theme)}
  }
  html {
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
    font-size: inherit;
    letter-spacing: 1px;
  }
  ul {
    list-style: none;
  }
`

export const GlobalTheme = ({ theme }: { theme: GroupType }) => (
  <Global styles={globalStyles(theme)} />
)
