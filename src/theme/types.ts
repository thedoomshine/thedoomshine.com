import { Dispatch, SetStateAction } from 'react'

import { baseTheme } from './variables'

type JSKeys = 'css' | 'js'
export type VariableGroupKey = keyof typeof baseTheme
export type ThemeModeType = 'dark' | 'light' | 'no-preference'

// Base Theme Object types
export type Variable = Record<string, string>
export type FlatVariable = Partial<Record<VariableGroupKey, Variable>>

// Emotion Theme Object types
export type JSVariable = Record<JSKeys, string>
export type ThemeVariable = Record<string, JSVariable>
export type GroupType = Record<VariableGroupKey, ThemeVariable>

export type ThemeModeContextType = (
  | ThemeModeType
  | Dispatch<SetStateAction<ThemeModeType>>
)[]
