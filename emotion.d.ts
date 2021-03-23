import '@emotion/react'

import { GroupType } from './src/theme/types'

declare module '@emotion/react' {
  export interface Theme extends GroupType {}
}