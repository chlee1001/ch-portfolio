import { Dispatch, SetStateAction, useContext } from 'react'
import { LANGUAGE } from '#constants/language'
import { LanguageContext } from '#context/language-context'
import i18n from '#locales/i18n'

interface ContextProps {
  currentLanguage: string
  setCurrentLanguage: Dispatch<SetStateAction<string>>
}

const useLanguage = () => {
  const languageContext = useContext(LanguageContext)
  const { currentLanguage, setCurrentLanguage }: ContextProps = languageContext

  const changeLanguage = () => {
    if (i18n.language === LANGUAGE.EN) {
      i18n.changeLanguage(LANGUAGE.KO).then().catch()
      setCurrentLanguage(LANGUAGE.KO)

      return
    }

    if (i18n.language === LANGUAGE.KO) {
      i18n.changeLanguage(LANGUAGE.EN).then().catch()
      setCurrentLanguage(LANGUAGE.EN)
    }
  }

  return { currentLanguage, changeLanguage }
}

export default useLanguage
