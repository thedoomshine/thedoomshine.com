<template>
  <div class="container">
    <main class="main">
      <div class="content">
        <h1 class="serif page-intro">
          Hi, my name is
          <span class="name">Morgan</span>&#32;<span class="name">Ashly</span>,
          <br>and I am a software engineer with a passion for design, punk rock, and cats.
        </h1>

        <div class="page-info">
          <p>I&rsquo;m currently working at <styled-link href="https://www.voxmedia.com/a/vm">Vox Media</styled-link></p>
          <p>Before that I worked at <styled-link href="https://the-wing.com">The Wing</styled-link></p>
          <p>I also worked at <styled-link href="https://collemcvoy.com">Colle McVoy</styled-link>.</p>
        </div>

        <div class="page-links">
          <p><strong>You can find me here:</strong></p>
          <ul>
            <li><styled-link href="https://github.com/thedoomshine">Github</styled-link></li>
            <li><styled-link href="https://twitter.com/thedoomshine">Twitter</styled-link></li>
            <li><styled-link href="mailto:morganashly@pm.me">Email</styled-link></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Link from './components/Link.vue'

export default {
  name: 'app',
  components: {
    StyledLink: Link
  }
}
</script>

<style lang="scss">
$black: #161616;
$grey: #333A3D;
$accent: #FFE374;
$white: #F7F7F7;

$sans: 'IBM Plex Mono', sans-serif;
$serif: 'Playfair Display', serif;

$min_width: 320px;
$max_width: 1280px;
$min_font: 16px;
$max_font: 24px;

@function strip-unit($value) {
  @return $value / ($value * 0 + 1);
}

@mixin fluid-type($min-vw, $max-vw, $min-font-size, $max-font-size) {
  $u1: unit($min-vw);
  $u2: unit($max-vw);
  $u3: unit($min-font-size);
  $u4: unit($max-font-size);

  @if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {
    & {

      font-size: $min-font-size;
      @media (min-width: $min-vw) {
        font-size:
          calc(#{$min-font-size} +
          #{strip-unit($max-font-size - $min-font-size)} *
          ((100vw - #{$min-vw}) /
          #{strip-unit($max-vw - $min-vw)}));
      }

      @media (min-width: $max-vw) {
        font-size: $max-font-size;
      }
    }
  }
}

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
</style>
