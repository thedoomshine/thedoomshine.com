import { createContext, useContext } from 'react'

import { ThemeModeContextType } from './types.d'

export const ThemeModeContext = createContext<ThemeModeContextType>(
  {} as ThemeModeContextType
)

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
