import React, { cloneElement, createContext, forwardRef, useContext, useLayoutEffect, useRef, useState } from 'react'

import { ThemeProvider } from '@emotion/react'

import { getVariables } from './variables'

enum ThemeType {
  Dark = 'dark',
  Light = 'light',
}

export const withCssVariables = ({ children }) => {
  const root = useRef<HTMLElement>()
  const [theme, setTheme] = useState(ThemeType.Dark)

  const cssVariables = getVariables()

  const themes = {
    light: {
      colors: {
        primary: cssVariables,
        background: 'white',
      },
    },
    dark: {
      colors: {
        primary: 'lightpink',
        background: 'black',
      },
    },
  }

  useLayoutEffect(() => {
    const themeVars = themes[theme]
    for (const [key, value] of Object.entries(themeVars)) {
      root?.current?.style.setProperty(key, value)
    }
  }, [theme])

  const currentTheme = React.useMemo(() => [theme, setTheme], [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      {React.Children.map(children, child =>
        forwardRef((props, ref) => cloneElement(child, [ref, props]))
      )}
    </ThemeProvider>
  )
}
