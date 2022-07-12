import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import myData from '#assets/db.json'
import { ThemeChangeContextProvider } from '#context/theme-change-context'
import Home from '#pages/Home'
import { LanguageContextProvider } from '#context/language-context'

const App: FC = () => {
  const {
    meta: { title },
  } = myData

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ThemeChangeContextProvider>
        <LanguageContextProvider>
          <Home />
        </LanguageContextProvider>
      </ThemeChangeContextProvider>
    </>
  )
}

export default App
