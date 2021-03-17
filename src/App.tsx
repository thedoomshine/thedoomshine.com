import React, { Fragment} from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import { HomePage } from '~/views'

function App() {
  return (
    <Fragment>
      <Global styles={{}} />
      <ThemeProvider>

      </ThemeProvider>
    </Fragment>
  );
}

export default App;
