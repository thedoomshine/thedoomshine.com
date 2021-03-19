import React from 'react'

import { ThemeProvider } from './theme'
import { HomePage } from './views'

export const App = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}
