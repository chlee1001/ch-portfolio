import React from 'react'
import styled, { css } from 'styled-components'
import ExperienceItem from '#components/Experience/experience-item'
import SubTitle from '#components/commons/SubTitle'
import myData from '#assets/db.json'
import { maxDevices } from '#styles/theme/variables'

const ExperienceContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 5rem;

  @media ${maxDevices.mobileL} {
    ${css`
      margin-bottom: 2rem;
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      padding: 0;
    `}
  }
`

const Experience = () => {
  const { experiences } = myData

  if (experiences.length === 0) {
    return null
  }

  return (
    <>
      <SubTitle>Experiences</SubTitle>
      <ExperienceContainer className="experience-container">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </ExperienceContainer>
    </>
  )
}

export default Experience
