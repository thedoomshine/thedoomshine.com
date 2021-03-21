import { Dispatch, SetStateAction } from 'react'

import { baseTheme } from './variables'

export const themeKeys = ['dark', 'light'] as const
const varKeys = ['css', 'js'] as const

type VariableKeys = typeof varKeys[number]
export type VariableGroupKey = keyof typeof baseTheme

export type ThemeModeToggle = typeof themeKeys
export type ThemeModeType = typeof themeKeys[number]
export type UserModeType = ThemeModeType | 'no-preference'

// Base Theme Object types
export type Variable = Record<string, string>
export type FlatVariable = Partial<Record<VariableGroupKey, Variable>>

// Emotion Theme Object types
export type JSVariable = Record<VariableKeys, string>
export type ThemeVariable = Record<string, JSVariable>
export type GroupType = Record<VariableGroupKey, ThemeVariable>

export type ThemeModeContextType = [
  ThemeModeType,
  Dispatch<SetStateAction<ThemeModeType>>
]
