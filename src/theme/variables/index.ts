import { BaseVariables, ThemeVariable, Variable } from '../types.d'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { fonts } from './fonts'

export const theme: BaseVariables = { breakpoints, colors, fonts }

const getPrefix = (index: string, key: string) => `--${index}-${key}`

export const getCSSVariables = (object = theme): Variable => {
  const cssVariables: Variable = {}

  Object.entries(object).map(([index, group]) => {
    Object.entries(group).map(([key, value]) => {
      cssVariables[getPrefix(index, key)] = value
    })
  })

  return cssVariables
}

export const getThemeVariables = (object = theme) => {
  const variables: ThemeVariable = {}

  Object.entries(object).map(([index, group]) => {
    variables[index] = {}
    Object.entries(group).map(([key, value]) => {
      variables[index][key] = {
        css: `var(${getPrefix(index, key)}, ${value})`,
        js: value,
      }
    })
  })

  return variables
}
