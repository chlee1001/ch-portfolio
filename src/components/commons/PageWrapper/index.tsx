import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { commonDevices } from '#styles/theme/mixins'

interface Props {
  children: React.ReactNode
}

const Page = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 0;
  height: 100%;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  @media ${commonDevices.mobile} {
    ${css`
      padding: 0 1rem;
    `}
  }
`

const PageWrapper = ({ children }: Props, ref: React.Ref<never>) => {
  return (
    <Page ref={ref}>
      <PageContainer>{children}</PageContainer>
    </Page>
  )
}

export default forwardRef(PageWrapper)
