import React from 'react'
import styled from 'styled-components'
import useTheme from '#hooks/useTheme'
import HalfMoon from '#assets/static/images/half-moon.png'
import useLanguage from '#hooks/useLanguage'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const LanguageSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
`

const ThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ThemeButton = styled.button`
  width: 1.625rem;
  height: 1.625rem;

  background-image: url(${HalfMoon});
  background-repeat: no-repeat;
  background-size: 100%;
`

const ThemeMode = () => {
  const { toggleDarkTheme } = useTheme()
  const { currentLanguage, changeLanguage } = useLanguage()

  return (
    <Container className="container">
      <div className="language">
        <LanguageSelect
          defaultValue={currentLanguage}
          onChange={changeLanguage}
        >
          <option value="Korean">Korean 🇰🇷</option>
          <option value="English">English 🇺🇸</option>
        </LanguageSelect>
      </div>
      <ThemeContainer className="theme-container">
        <ThemeButton type="button" onClick={toggleDarkTheme} />
      </ThemeContainer>
    </Container>
  )
}

export default ThemeMode
