import { css } from '@emotion/react'

export const reset = css`
*,
*:after,
*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*::selection {
  background-color: rgba($accent, 0.75);
  color: $black;
}
html {
  @include fluid-type($min_width, $max_width, $min_font, $max_font);
}
body {
  font-family: $sans;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
}
.serif {
  font-family: $serif;
  font-style: italic;
}
h1, h2, h3 {
  letter-spacing: 1px;
}
ul {
  list-style: none;
}
.container {
  align-items: center;
  background-attachment: fixed;
  background-image: url('./assets/images/floral.png');
  background-size: 8rem;
  color: $white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%
}
.main {
  background: $black;
  box-shadow: 0 1rem 2rem rgba(0,0,0,0.32);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 1rem auto;
  min-height: 100%;
  min-width: 16rem;
  max-width: calc(100% - 4rem);
  position: relative;
  width: 40rem;
}
.content {
  border: solid .5rem $accent;
  margin: 1.5rem;
  padding: 1rem;
  position: relative;
}
.page-intro {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.025;
  margin: .25em 0 .5em;
  max-width: 16ch;
}
.name {
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-image: url('./assets/images/floral_color.png');
  background-position: left top;
  background-size: 8rem;
  color: $accent;
  margin: 0 -4px;
  padding: 0 4px;
  position: relative;
  * + .name {
    background-position: right bottom;
  }
  &::selection {
    background-image: url('./assets/images/floral.png');
    color: $black;
  }
}
.page-info {
  margin-top: 2rem;
}
.page-links {
  margin-top: 1rem;
}
.button {
  background-color: transparent;
  border: solid .125em $accent;
  border-radius: .25em;
  box-shadow: 0 .5em 0 $accent;
  color: $accent;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding: .5em 1em;
  position: relative;
  text-decoration: none;
  transform: translate3d(0, -.5em, 0);
  transition: transform .125s ease-out, box-shadow .125s ease-out;
  will-change: transform;
  &:focus,
  &:hover {
    box-shadow: 0 .25em 0 $accent;
    transform: translate3d(0, -.25em, 0);
  }
  &:active,
  &.clicked {
    box-shadow: 0 0 0 currentColor;
    transform: translate3d(0, 0, 0);
  }
}
@media (max-width: 768px) {
  .main {
    box-shadow: none;
    max-width: calc(100% - 2rem);
    width: 30rem;
  }
  .content {
    border: 0;
    margin: 0;
    padding: 1rem 5vw 2rem;
  }
  .page-intro {
    font-size: 2.25rem;
  }
}
`