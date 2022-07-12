/* eslint-disable no-console */
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LANGUAGE } from '#constants/language'

const useAboutMySelfMD = (
  target: string,
  setAboutMySelfText: Dispatch<SetStateAction<string>>,
) => {
  const [aboutMySelfLanguage, setAboutMySelfLanguage] = useState<string>(
    'aboutMySelf.korean.md',
  )

  useEffect(() => {
    if (target === LANGUAGE.KO) {
      setAboutMySelfLanguage('aboutMySelf.korean.md')
    }
    if (target === LANGUAGE.EN) {
      setAboutMySelfLanguage('aboutMySelf.english.md')
    }

    import(`../assets/static/markdown/${aboutMySelfLanguage}`)
      .then((res) =>
        fetch(res.default)
          .then((string) => string.text())
          .then((text) => setAboutMySelfText(text))
          .catch((err) => console.log('useAboutMySelfMD_fetch: ', err)),
      )
      .catch((err) => {
        console.log('useAboutMySelfMD: ', err)

        return ''
      })
  }, [target, setAboutMySelfText, aboutMySelfLanguage])
}
export default useAboutMySelfMD
