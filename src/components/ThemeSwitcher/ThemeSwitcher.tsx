import styled from '@emotion/styled'
import React from 'react'

import { hexa } from '../../services'
import {
  ThemeModeToggle,
  ThemeModeType,
  themeKeys,
  useThemeMode,
} from '../../theme'

const StyledThemeSwitcher = styled.label`
  display: flex;
  cursor: pointer;
  text-indent: -9999px;
  width: 16em;
  height: 8em;
  background-color: ${({ theme }) => theme.colors.background.css};
  display: block;
  border-radius: 8em;
  position: relative;
  transition: 0.3s ease-out background-color;

  &::after {
    content: '';
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    width: calc(50% - 1em);
    height: calc(100% - 1em);
    background-color: ${({ theme }) => theme.colors.accent.css};
    border-radius: calc(100% - 1em);
    transition: 0.3s;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grey.css};
    &::after {
      background-color: ${({ theme }) => hexa(theme.colors.accent.js, 0.75)};
      width: 50%;
    }
  }
`

const StyledCheckbox = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);

  &:checked + label {
    &::after {
      left: calc(100% - 0.5em);
      transform: translateX(-100%);
    }
  }
`

export const ThemeSwitcher = () => {
  const [theme, setThemeMode] = useThemeMode()

  const toggle: ThemeModeToggle = themeKeys

  const isChecked = (toggle[1] as ThemeModeType) === theme

  const handleToggle = () => {
    const nextTheme = themeKeys.find(mode => mode !== theme) as ThemeModeType
    setThemeMode(nextTheme)
  }

  return (
    <>
      <StyledCheckbox
        type='checkbox'
        id='theme-switcher'
        checked={isChecked}
        onChange={handleToggle}
      />
      <StyledThemeSwitcher htmlFor='theme-switcher' />
    </>
  )
}
