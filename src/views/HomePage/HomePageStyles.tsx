/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { onlyText } from 'react-children-utilities'

import floralColor from '../../assets/images/floral_color.png'
import floral from '../../assets/images/floral.png'
import { hexa } from '../../services'
import { GroupType, useThemeMode } from '../../theme'

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const [themeMode] = useThemeMode()

  const background = themeMode === 'dark' ? floral : floralColor

  return (
    <section
      css={css`
        background-image: url(${background});
      `}
      className={className}
    >
      {children}
    </section>
  )
}

export const StyledContainer = styled(Container)`
  align-items: center;
  background-attachment: fixed;
  background-size: 8rem;
  color: ${({ theme }) => theme.colors.primary.css};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
`

export const StyledMain = styled.main`
  background: ${({ theme }) => theme.colors.background.css};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 1rem auto;
  min-height: 100%;
  min-width: 16rem;
  max-width: calc(100% - 2rem);
  position: relative;
  width: 30rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md.js}) {
    box-shadow: 0 1rem 2rem ${({ theme }) => hexa(theme.colors.black.js, 0.64)};
    max-width: calc(100% - 4rem);
    width: 40rem;
  }
`
export const StyledContent = styled.section`
  border: 0;
  margin: 0;
  padding: 1rem 5vw 2rem;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md.js}) {
    border: solid 0.5rem ${({ theme }) => theme.colors.accent.css};
    margin: 1.5rem;
    padding: 1rem;
  }
`

interface ClassProps {
  className?: string
}

const TextShadow: React.FC<ClassProps> = ({ children, className }) => (
  <div className={className} role='presentation'>
    {children}
  </div>
)

const StyledTextShadow = styled(TextShadow)`
  padding-bottom: 0.33em;
  position: relative;
  z-index: 2;

  &::selection {
    color: ${({ theme }) => theme.colors.background.css};
  }
`

const StyledH1 = styled.h1`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;

  pointer-events: initial;
  color: transparent;
`

const PageIntro: React.FC<ClassProps> = ({ children, className }) => (
  <div className={className}>
    <StyledH1>{onlyText(children)}</StyledH1>
    <StyledTextShadow className='text-shadow'>{children}</StyledTextShadow>
  </div>
)

export const StyledPageIntro = styled(PageIntro)`
  font-family: ${({ theme }) => theme.fonts.serif.css};
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.025;
  margin: 0.25em 0 0.5em;
  max-width: 16ch;

  position: relative;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md.js}) {
    font-size: 3rem;
  }
`

export const Name: React.FC<ClassProps> = ({ className, children }) => {
  const [themeMode] = useThemeMode()

  const background = themeMode === 'dark' ? floralColor : floral
  return (
    <span
      css={css`
        background-image: url(${background});
      `}
      className={className}
    >
      {children}
    </span>
  )
}

export const StyledName = styled(Name)`
  background-clip: text;
  background-position: left top;
  background-size: 8rem;
  color: ${({ theme }) => theme.colors.accent.css};

  pointer-events: none;
  text-fill-color: transparent;

  * + .name {
    background-position: right bottom;
  }

  &::selection {
    background-image: url(${floral});
    color: ${({ theme }) => theme.colors.background.css};
    text-fill-color: currentColor;
  }
`

const codeSelect = ({ theme }: { theme: GroupType }) => css`
  transition: 0.02s ease-out background-color;
  *::selection {
    background-color: ${hexa(theme.colors.highlight.js, 0.75)};
    color: ${theme.colors.shadow.css};
    text-shadow: none;
  }
`

export const StyledPageInfo = styled.div`
  font-weight: bold;
  margin-top: 2rem;

  ${codeSelect}
`

export const StyledPageLinks = styled.div`
  font-weight: bold;
  margin-top: 1rem;

  ${codeSelect}
`
