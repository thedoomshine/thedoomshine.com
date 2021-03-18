import '@emotion/react'

import { BaseThemeType } from './types.d'

declare module '@emotion/react' {
  export interface Theme extends BaseThemeType {}
}