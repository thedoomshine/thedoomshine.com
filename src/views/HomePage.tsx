import React from 'react'
import { StyledLink } from '../components'

export const HomePage = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="content">
          <h1 className="serif page-intro">
            Hi, my name is
            <span className="name">Morgan</span>&#32;<span className="name">Ashly</span>,
            <br />and I am a Senior UI Engineer with a passion for design, punk rock, and cats.
          </h1>

          <div className="page-info">
            <p>I work at <StyledLink href="https://voxmedia.com/">Vox</StyledLink></p>
            <p>I used to work at <StyledLink href="https://the-wing.com">The Wing</StyledLink></p>
            <p>I also worked at <StyledLink href="https://collemcvoy.com">Colle McVoy</StyledLink></p>
          </div>

          <div className="page-links">
            <p><strong>You can find me here:</strong></p>
            <ul>
              <li><StyledLink href="https://github.com/thedoomshine">Github</StyledLink></li>
              <li><StyledLink href="https://twitter.com/thedoomshine">Twitter</StyledLink></li>
              <li><StyledLink href="mailto:morganashly@pm.me">Email</StyledLink></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
