import React, { useContext, useRef } from 'react'

import { CSSTransition } from 'react-transition-group'
import { ThemeChangeContext } from '#context/theme-change-context'
import PageWrapper from '#components/commons/PageWrapper'
import ThemeMode from '#components/ThemeMode'
import Title from '#components/Title'
import AboutMe from '#components/AboutMe'
import SkillSets from '#components/SkillSets'
import Footer from '#components/Footer'
import Education from '#components/Education'
import Certificates from '#components/Certificates'
import Experience from '#components/Experience'
import Projects from '#components/projects'

const Home = () => {
  const { darkTheme } = useContext(ThemeChangeContext)
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      classNames="fade"
      in={!darkTheme}
      timeout={300}
      nodeRef={nodeRef}
    >
      <PageWrapper ref={nodeRef}>
        <ThemeMode />
        <Title />
        <AboutMe />
        <SkillSets />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Footer />
      </PageWrapper>
    </CSSTransition>
  )
}

export default Home
