import React from 'react'
import { css } from '@emotion/react'

const linkStyles = css`
    color: $accent;
    cursor: pointer;
    position: relative;
    text-decoration: none;
  
    &::before {
      background-color: $accent;
      bottom: -2px;
      content: "";
      height: 1px;
      left: -1%;
      position: absolute;
      transition: all 0.32s ease-out;
      width: 0;
    }
  
    &:hover:before {
      width: 102%;
    }
`;

export const StyledLink = ({ href, children }: { href: string, children: React.ReactNode }) => (<a css={linkStyles} href={href} target="_blank" rel="noreferrer noopener">{children}</a>)
