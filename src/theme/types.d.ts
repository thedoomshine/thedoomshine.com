export type Variable = {
  [key: string]: string
}

export type ThemeKeys = 'breakpoints' | 'colors' | 'fonts'

export type ThemeModeType = 'dark' | 'light' | 'no-preference'

export type BaseThemeType = {
  [key in ThemeKeys as string]: Variable
}

export type ThemeVariablesType = {
  theme: Partial<BaseThemeType> | ((outerTheme: BaseThemeType) => BaseThemeType)
}

export type ThemeModeContextType = (
  | ThemeModeType
  | React.Dispatch<React.SetStateAction<ThemeModeType>>
)[]
