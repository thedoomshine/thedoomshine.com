import { CSSObject } from '@emotion/react';

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { fonts } from './fonts'
import { VariableType } from '../types'

const createCSSVariable = (obj: {} | CSSObject) => {
  const variableTypes: VariableType = Object.assign({}, { breakpoints, colors, fonts })

  for (const [key, variableType] of Object.entries(variableTypes)) {
    for (const [name, value] of Object.entries(variableType)) {
      obj[`--${key}-${name}`] = value
    }
  }
} 

export const getVariables = () => {
  const variables: {[key: string]: string} = {};
  return createCSSVariable(variables)
}

export const getCSSVariables = () => {
  const cssVariables: CSSObject = {};
  return createCSSVariable(cssVariables)
}
