import React from 'react'
import styled, { css } from 'styled-components'
import myData from '#assets/db.json'
import { maxDevices, minDevices, size, weight } from '#styles/theme/variables'
import { commonDevices } from '#styles/theme/mixins'

const TitleWrapper = styled.div`
  user-select: none;
  margin: 3.5rem 0 4.5rem 0;

  @media ${commonDevices.mobile} {
    ${css`
      margin: 1.5rem 0;
    `}
  }
`

const H1Title = styled.h1`
  font-size: ${size.large15};
  font-weight: ${weight.bold};
  text-align: center;

  @media ${minDevices.mobileL} and ${maxDevices.tablet} {
    ${css`
      font-size: ${size.large8};
      margin-bottom: 1rem;
    `}
  }

  @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
    ${css`
      font-size: ${size.large3};
      margin-bottom: 1rem;
    `}
  }
  @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
    ${css`
      font-size: ${size.large2};
      margin-bottom: 1rem;
    `}
  }
  @media ${minDevices.mobileXS} and ${maxDevices.mobileS} {
    ${css`
      font-size: ${size.large0};
      margin-bottom: 1rem;
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      font-size: ${size.fold};
    `}
  }
`

const Title = () => {
  const {
    aboutMe: { nickName },
  } = myData

  return (
    <TitleWrapper>
      <H1Title>&#123; {nickName} &#125; </H1Title>
    </TitleWrapper>
  )
}

export default Title
