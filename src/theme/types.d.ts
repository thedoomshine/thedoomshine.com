import { theme } from './variables'

const ThemeGroups = {...Object.keys(theme)}

export type ThemeModeType = 'dark' | 'light' | 'no-preference'

type ValueOf<T> = T[keyof T];

export type Variable = {
  [key: string]: Variable | string
}

export type BaseVariables = {
  breakpoints: Variable,
  colors: Variable,
  fonts: Variable,
}

export type JSVariable = {
  css: string,
  js: string
}

export type ThemeVariable = {
  [key: string]: {
    [key: string]: string | JSVariable
  }
}

export type ThemeType = {
  breakpoints: ThemeVariable,
  colors: ThemeVariable,
  fonts: ThemeVariable,
}

export type CSSProps = {
  theme: ThemeType
}

export type ThemeModeContextType = (
  | ThemeModeType
  | React.Dispatch<React.SetStateAction<ThemeModeType>>
)[]
