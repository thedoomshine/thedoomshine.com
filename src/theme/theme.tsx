import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'use-color-scheme'

import { ThemeModeContext } from './context'
import { GlobalTheme } from './global'
import { ThemeModeType } from './types'
import { getCSSVariables, getThemeVariables } from './utils'
import { baseTheme as theme } from './variables'

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

  const activeTheme = useMemo(
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
    const themeModeVars = getThemeMode(themeMode)
    const themeVars = getCSSVariables(themeModeVars)

    Object.entries(themeVars).map(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }, [activeTheme, themeMode])

  const value = useMemo(() => [themeMode, setThemeMode], [themeMode])

  return (
    <EmotionThemeProvider theme={getThemeVariables(activeTheme)}>
      <GlobalTheme theme={getThemeVariables(activeTheme)} />
      <ThemeModeContext.Provider value={value}>
        {children}
      </ThemeModeContext.Provider>
    </EmotionThemeProvider>
  )
}
