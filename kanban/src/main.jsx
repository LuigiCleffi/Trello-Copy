import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './Global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)