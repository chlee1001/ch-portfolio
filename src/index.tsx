import React from 'react'
import ReactDOM from 'react-dom/client'

import '#locales/i18n'
import '#styles/global-style/fonts.module.css'
import App from './App'
import GlobalStyle from '#styles/global-style'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
)
