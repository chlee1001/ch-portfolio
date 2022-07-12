import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react'

import myData from '#assets/db.json'

interface Props {
  children: React.ReactNode
}

interface ContextProps {
  currentLanguage: string
  setCurrentLanguage: Dispatch<SetStateAction<string>>
}

export const LanguageContext = createContext<ContextProps>({
  currentLanguage: 'Korean',
  setCurrentLanguage: () => {},
})

export const LanguageContextProvider = ({ children }: Props) => {
  const {
    meta: { defaultLanguage },
  } = myData
  const [currentLanguage, setCurrentLanguage] =
    useState<string>(defaultLanguage)

  const LanguageChangeContextValue = useMemo(
    () => ({
      currentLanguage,
      setCurrentLanguage,
    }),
    [currentLanguage, setCurrentLanguage],
  )

  return (
    <LanguageContext.Provider value={LanguageChangeContextValue}>
      {children}
    </LanguageContext.Provider>
  )
}
