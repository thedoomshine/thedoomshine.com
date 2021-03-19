import '@emotion/react'

import { ThemeType } from './src/theme/types.d'

declare module '@emotion/react' {
  export interface Theme {
    theme: ThemeType
  }
}