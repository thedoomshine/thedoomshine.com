const fallbacks = {
  [`system-mono`]: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  [`system-sans`]: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  [`system-serif`]: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
}

export const fonts = {
  mono: `'IBM Plex Mono', ${fallbacks['system-mono']}`,
  sans: `${fallbacks['system-sans']}`,
  serif: `'Playfair Display', ${fallbacks['system-serif']}`,
  [`min-size`]: `16px`,
  [`max-size`]: `24px`,
}
