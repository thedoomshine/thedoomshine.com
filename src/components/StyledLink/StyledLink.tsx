import { css } from '@emotion/react'
import React from 'react'

const linkStyles = css`
  color: $accent;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::before {
    background-color: $accent;
    bottom: -2px;
    content: '';
    height: 1px;
    left: -1%;
    position: absolute;
    transition: all 0.32s ease-out;
    width: 0;
  }

  &:hover:before {
    width: 102%;
  }
`

type StyledLinkType = {
  href: string
  children: React.ReactNode
}

export const StyledLink = ({ href, children }: StyledLinkType) => (
  <a css={linkStyles} href={href} target='_blank' rel='noreferrer noopener'>
    {children}
  </a>
)
