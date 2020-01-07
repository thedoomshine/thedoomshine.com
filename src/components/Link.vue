<template>
  <a :href="href" target="_blank" rel="noreferrer noopener"><slot/></a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    href: String,
  },
};
</script>

<style lang="scss">
$black: #161616;
$grey: #333A3D;
$accent: #FFE374;
$white: #F7F7F7;

a {
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
    transition: all .32s ease-out;
    width: 0;
  }

  &:hover:before {
    width: 102%;
  }
}
</style>
