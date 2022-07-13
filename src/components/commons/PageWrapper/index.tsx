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

  &.fade-enter {
    opacity: 0;
    animation: slideIn 0.6s;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  &.fade-exit {
    opacity: 0;
    animation: slideOut 0.6s;
  }
  &.fade-exit-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
    }

    100% {
      filter: blur(10px);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 0;
      filter: blur(0px);
    }

    100% {
      filter: blur(10px);
      opacity: 1;
    }
  }
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
