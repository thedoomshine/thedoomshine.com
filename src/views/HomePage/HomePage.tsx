import React from 'react'

import { StyledLink, ThemeSwitcher } from '../../components'
import {
  StyledContainer,
  StyledContent,
  StyledMain,
  StyledName,
  StyledPageInfo,
  StyledPageIntro,
  StyledPageLinks,
} from './HomePageStyles'

export const HomePage = () => {
  return (
    <StyledContainer>
      <ThemeSwitcher />
      <StyledMain>
        <StyledContent>
          <StyledPageIntro>
            Hi, my name is <StyledName className='name'>Morgan</StyledName>{' '}
            <StyledName className='name'>Ashly</StyledName>,
            and&#160;I&#160;am&#160;a&#160;Senior UI Engineer with a passion for
            accessibility, design, and punk.
          </StyledPageIntro>

          <StyledPageInfo>
            <p>
              I work at{' '}
              <StyledLink href='https://www.codecademy.com/learn'>
                Codecademy
              </StyledLink>
            </p>
            <p>
              I used to work at{' '}
              <StyledLink href='https://corp.voxmedia.com/'>Vox</StyledLink>
            </p>
            <p>
              Before that I was at{' '}
              <StyledLink href='https://www.the-wing.com/'>The Wing</StyledLink>
            </p>
            <p>
              And at{' '}
              <StyledLink href='https://www.collemcvoy.com/'>
                Colle McVoy
              </StyledLink>
              , too
            </p>
          </StyledPageInfo>

          <StyledPageLinks>
            <p>
              <strong>You can find me here:</strong>
            </p>
            <ul>
              <li>
                <StyledLink href='https://github.com/thedoomshine'>
                  Github
                </StyledLink>
              </li>
              <li>
                <StyledLink href='mailto:morganashly@pm.me'>Email</StyledLink>
              </li>
            </ul>
          </StyledPageLinks>
        </StyledContent>
      </StyledMain>
    </StyledContainer>
  )
}
