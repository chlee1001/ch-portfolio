import React from 'react'

import styled, { css } from 'styled-components'
import SubTitle from '#components/commons/SubTitle'
import PersonalInfos from '#components/AboutMe/personal-infos'
import Introduce from '#components/AboutMe/introduce'
import { maxDevices, minDevices } from '#styles/theme/variables'

const AboutMeContainer = styled.div`
  padding: 0 1rem;
  margin-bottom: 5rem;
  user-select: none;

  @media ${minDevices.mobileL} and ${maxDevices.tablet} {
    ${css``}
  }

  @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
    ${css``}
  }
  @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
    ${css``}
  }

  @media ${maxDevices.mobileXS} {
    ${css`
      padding: 0;
    `}
  }
`

const AboutMe = () => {
  return (
    <>
      <SubTitle>About Me</SubTitle>
      <AboutMeContainer className="about-me-container">
        <PersonalInfos />
        <Introduce />
      </AboutMeContainer>
    </>
  )
}

export default AboutMe
