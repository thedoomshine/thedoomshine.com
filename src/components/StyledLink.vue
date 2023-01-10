<template>
  <a :href="href" target="_blank" rel="noreferrer noopener"><slot /></a>
</template>

<script>
export default {
  name: 'StyledLink',
  props: {
    href: String
  }
}
</script>

<style lang="scss">
$black: #161616;
$grey: #333a3d;
$accent: #ffe374;
$white: #f7f7f7;

a {
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
}
</style>
