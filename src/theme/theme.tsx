import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'use-color-scheme'

import { ThemeModeContext } from './context'
import { GlobalTheme } from './global'
import { ThemeModeType } from './types.d'
import { getCSSVariables, getThemeVariables, theme } from './variables'

const themeModes = {
  light: {
    colors: {
      accent: theme.colors.yellow,
      primary: theme.colors.black,
      background: theme.colors.white,
    },
  },
  dark: {
    colors: {
      accent: theme.colors.yellow,
      primary: theme.colors.white,
      background: theme.colors.black,
    },
  },
}

const getThemeMode = (mode: ThemeModeType) => {
  switch (mode) {
    case 'light':
      return { ...themeModes.light }
    case 'dark':
    default:
      return { ...themeModes.dark }
  }
}

export const ThemeProvider: React.FC = ({ children }) => {
  const { scheme } = useColorScheme()
  const [themeMode, setThemeMode] = useState<ThemeModeType>(scheme)

  const themeObject = useMemo(
    () => ({
      ...theme,
      colors: {
        ...theme.colors,
        ...getThemeMode(themeMode).colors,
      },
    }),
    [themeMode]
  )

  useLayoutEffect(() => {
    const themeModeVariables = getThemeMode(themeMode)
    const themeVars = getCSSVariables(themeModeVariables)

    Object.entries(themeVars).map(
      ([
        key,
        {
          value: { css },
        },
      ]) => {
        document.documentElement.style.setProperty(key, css)
      }
    )
  }, [themeObject, themeMode])

  const activeTheme = useMemo(() => getThemeVariables(themeObject), [
    themeObject,
  ])
  const value = useMemo(() => [themeMode, setThemeMode], [themeMode])

  return (
    <EmotionThemeProvider theme={activeTheme}>
      <ThemeModeContext.Provider value={value}>
        <GlobalTheme theme={activeTheme} />
        {children}
      </ThemeModeContext.Provider>
    </EmotionThemeProvider>
  )
}
