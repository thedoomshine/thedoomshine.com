import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'use-color-scheme'

import { ThemeModeContext } from './context'
import { GlobalTheme } from './global'
import { ThemeModeType } from './types.d'
import {
  baseVariables,
  getCSSVariables,
  getThemeVariables,
  theme,
} from './variables'

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
      return { ...theme, ...themeModes.light }
    case 'dark':
    default:
      return { ...theme, ...themeModes.dark }
  }
}

export const ThemeProvider: React.FC = ({ children }) => {
  const { scheme } = useColorScheme()
  const [themeMode, setThemeMode] = useState<ThemeModeType>(scheme)

  const themeObject = useMemo(
    () => ({
      ...baseVariables,
      colors: {
        ...baseVariables.colors,
        ...getThemeMode(themeMode).colors,
      },
    }),
    [themeMode]
  )

  useLayoutEffect(() => {
    const themeVars = getCSSVariables(themeObject)
    Object.entries(themeVars).map(([key, value]) => {
      document.documentElement.style.setProperty(key, value as string)
    })
  }, [themeObject, themeMode])

  const activeTheme = useMemo(() => getThemeVariables(themeObject), [
    themeObject,
  ])
  const value = useMemo(() => [themeMode, setThemeMode], [themeMode])

  return (
    <EmotionThemeProvider theme={activeTheme}>
      <ThemeModeContext.Provider value={value}>
        <GlobalTheme />
        {children}
      </ThemeModeContext.Provider>
    </EmotionThemeProvider>
  )
}
