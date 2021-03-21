import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
const isStaticRender = rootElement?.hasChildNodes()

const renderStatic = () =>
  isStaticRender
    ? ReactDOM.hydrate(<App />, rootElement)
    : ReactDOM.render(<App />, rootElement)

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000)
    renderStatic()
  })
} else {
  renderStatic()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
