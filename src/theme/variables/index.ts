import { Variable } from '../types.d'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { fonts } from './fonts'

export const baseVariables = { breakpoints, colors, fonts }

const getPrefix = (index: string, key: string) => `--${index}-${key}`

export const getCSSVariables = (object = baseVariables) => {
  const cssVariables: Variable = {}

  Object.entries(object).map(([index, group]) => {
    Object.entries(group).map(([key, value]) => {
      cssVariables[getPrefix(index, key)] = value
    })
  })

  return cssVariables
}

export const getThemeVariables = (object = baseVariables) => {
  const variables: Variable = {}

  Object.entries(object).map(([index, group]) => {
    Object.keys(group).map(key => {
      variables[key] = `var(${getPrefix(index, key)})`
    })
  })

  return variables
}

export const theme = baseVariables
