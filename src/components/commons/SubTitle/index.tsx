import React from 'react'
import styled, { css } from 'styled-components'
import { maxDevices, minDevices, size, weight } from '#styles/theme/variables'

const SubTitleWrapper = styled.div`
  user-select: none;
  display: flex;
  margin-bottom: 1.375rem;
`

const H3SubTitle = styled.h3`
  font-size: ${size.large6};
  font-weight: ${weight.bold};

  @media ${maxDevices.tablet} {
    ${css`
      padding: 0 1rem;
    `}
  }
  @media ${minDevices.mobileL} and ${maxDevices.tablet} {
    ${css`
      font-size: ${size.large3};
    `}
  }
  @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
    ${css`
      font-size: ${size.large1};
    `}
  }
  @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
    ${css`
      font-size: ${size.default};
    `}
  }
  @media ${maxDevices.mobileS} {
    ${css`
      font-size: ${size.small0};
    `}
  }
`

const SubTitle = ({ children }: { children: string }) => {
  return (
    <SubTitleWrapper>
      <H3SubTitle className="subtitle__h3">{children}</H3SubTitle>
    </SubTitleWrapper>
  )
}

export default SubTitle
