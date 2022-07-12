import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import skillsEn from './en/skills.json'
import skillsKo from './ko/skills.json'
import myData from '#assets/db.json'

const resources = {
  English: {
    skills: skillsEn,
  },
  Korean: {
    skills: skillsKo,
  },
} as const

const { defaultLanguage } = myData.meta

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: {
    English: ['English'],
    default: ['Korean'],
  },
  debug: true,
  defaultNS: 'translation',
  ns: 'translation',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
