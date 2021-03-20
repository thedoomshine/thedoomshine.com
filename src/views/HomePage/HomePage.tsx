import React from 'react'

import { StyledLink } from '../../components'
import { StyledContainer, StyledContent, StyledMain } from './HomePageStyles'

export const HomePage = () => {
  return (
    <StyledContainer>
      <StyledMain>
        <StyledContent>
          <h1 className='serif page-intro'>
            Hi, my name is <span className='name'>Morgan</span>&nbsp;
            <span className='name'>Ashly</span>,
            <br />
            and I am a Senior UI Engineer with a passion for accessibility,
            design, and punk.
          </h1>

          <div className='page-info'>
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
          </div>

          <div className='page-links'>
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
          </div>
        </StyledContent>
      </StyledMain>
    </StyledContainer>
  )
}
