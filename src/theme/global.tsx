import { Global, css, useTheme } from '@emotion/react'
import { rgba } from 'emotion-rgba'
import React from 'react'

import { fluidType } from '../services'
import { BaseThemeType } from './types.d'
import { getCSSVariables } from './variables'

export const globalCSS = (theme: BaseThemeType) => css`
  :root {
    ${getCSSVariables()}
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::selection {
    background-color: ${rgba(theme.colors.yellow, 0.75)};
    color: ${theme.colors.background};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${fluidType(
      theme.breakpoints.sm,
      theme.breakpoints.lg,
      theme.fonts['min-size'],
      theme.fonts['max-size']
    )}
  }
  body {
    font-family: var(--font-mono);
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

export const GlobalTheme = () => {
  const theme = useTheme()
  console.log(theme)
  const themedGlobalCSS = globalCSS(theme)
  return <Global styles={themedGlobalCSS} />
}
