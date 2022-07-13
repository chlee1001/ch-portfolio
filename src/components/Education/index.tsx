import React from 'react'
import styled, { css } from 'styled-components'
import EducationItem from './EducationItem'

import SubTitle from '#components/commons/SubTitle'
import myData from '#assets/db.json'
import { maxDevices } from '#styles/theme/variables'

const EducationContainer = styled.div`
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

const Education = () => {
  const { educations } = myData

  if (educations.length === 0) {
    return null
  }

  return (
    <>
      <SubTitle>Education</SubTitle>
      <EducationContainer className="education-container">
        {educations.map((education) => (
          <EducationItem key={education.id} education={education} />
        ))}
      </EducationContainer>
    </>
  )
}

export default Education
