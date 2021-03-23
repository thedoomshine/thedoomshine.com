import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { useColorScheme } from 'use-color-scheme'

import { GlobalTheme } from './global'
import { ThemeModeContextType, ThemeModeType, UserModeType } from './types'
import { getCSSVariables, getThemeVariables } from './utils'
import { baseTheme as theme } from './variables'

export const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
)

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const themeModes = {
  light: {
    colors: {
      accent: theme.colors.black,
      highlight: theme.colors.grey,
      primary: theme.colors.black,
      background: theme.colors.white,
      shadow: theme.colors.black,
    },
  },
  dark: {
    colors: {
      accent: theme.colors.yellow,
      highlight: theme.colors.yellow,
      primary: theme.colors.white,
      background: theme.colors.black,
      shadow: theme.colors.yellow,
    },
  },
}

const getThemeMode = (mode: UserModeType) => {
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

  const style: ThemeModeType = (Object.prototype.hasOwnProperty.call(
    themeModes,
    scheme
  )
    ? scheme
    : 'dark') as ThemeModeType

  const [themeMode, setThemeMode] = useState<ThemeModeType>(style)

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

  const value = useMemo(
    () => [themeMode, setThemeMode] as ThemeModeContextType,
    [themeMode]
  )

  return (
    <EmotionThemeProvider theme={getThemeVariables(activeTheme)}>
      <GlobalTheme theme={getThemeVariables(activeTheme)} />
      {value && (
        <ThemeModeContext.Provider value={value}>
          {children}
        </ThemeModeContext.Provider>
      )}
    </EmotionThemeProvider>
  )
}
