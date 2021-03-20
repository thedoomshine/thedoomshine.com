import { SerializedStyles, css } from '@emotion/react'

import {
  FlatVariable,
  GroupType,
  JSVariable,
  Variable,
  VariableGroupKey,
} from './types'
import { baseTheme } from './variables'

const getPrefix = (index: string, key: string) => `--${index}-${key}`

export const getCSSVariables = (theme: FlatVariable = baseTheme) =>
  Object.fromEntries(
    Object.entries(theme).flatMap(([groupKey, group = {}]) =>
      Object.entries(group).map(([key, value]) => [
        getPrefix(groupKey, key),
        value,
      ])
    )
  )

const getJSVariable = (
  groupKey: VariableGroupKey,
  key: string,
  value: string
): JSVariable => ({
  css: `var(${getPrefix(groupKey, key)}, ${value})`,
  js: value as string,
})

export const getThemeVariables = (
  object: Record<VariableGroupKey, Variable> = baseTheme
): GroupType =>
  Object.fromEntries(
    Object.entries(object).map(([groupKey, group]) => {
      const CustomTheme = [
        groupKey as VariableGroupKey,
        Object.fromEntries(
          Object.entries(group).map(([key, value]) => [
            key,
            getJSVariable(groupKey as VariableGroupKey, key, value),
          ])
        ),
      ]

      return CustomTheme
    })
  )

export const fluidType = (
  minVW: string,
  maxVW: string,
  minFontSize: string,
  maxFontSize: string
): SerializedStyles => {
  return css`
    font-size: clamp(
      ${minFontSize},
      calc(
        ${minFontSize} + ${parseFloat(maxFontSize) - parseFloat(minFontSize)} *
          ((100vw - ${minVW}) / ${parseFloat(maxVW) - parseFloat(minVW)})
      ),
      ${maxFontSize}
    );
  `
}
