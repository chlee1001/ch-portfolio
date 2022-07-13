import React from 'react'
import styled, { css } from 'styled-components'
import { ICertificateProps } from '#types/certificate'
import {
  borderRadius,
  color,
  maxDevices,
  minDevices,
  size,
  weight,
} from '#styles/theme/variables'
import { commonDevices } from '#styles/theme/mixins'

interface ICertificateItemProps {
  certificate: ICertificateProps
}

const CertificateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  user-select: none;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: ${borderRadius};
  box-sizing: border-box;
  gap: 1rem;

  &::before {
    content: '';
    width: 5px;
    background: ${color.grey4};
  }

  @media ${commonDevices.mobile} {
    ${css`
      gap: 0.6rem;
      padding-top: 0;
    `}
  }
`

const CertificateItemDetails = styled.div`
  width: 100%;

  .term {
    font-size: ${size.small0};
    @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.small1};
      `}
    }
    @media ${minDevices.mobileXS1} and ${maxDevices.mobileM} {
      ${css`
        font-size: ${size.small2};
      `}
    }
    @media ${maxDevices.mobileXS} {
      ${css`
        font-size: ${size.small3};
      `}
    }
  }

  .title {
    font-size: ${size.large0};
    font-weight: ${weight.medium};
    margin: 0 0 0.25rem 0;
    @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.default};
      `}
    }
    @media ${minDevices.mobileXS1} and ${maxDevices.mobileM} {
      ${css`
        font-size: ${size.small0};
      `}
    }
    @media ${maxDevices.mobileXS} {
      ${css`
        font-size: ${size.small1};
      `}
    }
  }

  .description {
    color: ${color.grey8};

    @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.small1};
      `}
    }
    @media ${minDevices.mobileXS1} and ${maxDevices.mobileM} {
      ${css`
        font-size: ${size.small2};
      `}
    }
    @media ${maxDevices.mobileXS} {
      ${css`
        font-size: ${size.small3};
      `}
    }
  }
`

const CertificateItem = ({ certificate }: ICertificateItemProps) => {
  const { title, term, description } = certificate
  return (
    <CertificateWrapper>
      <CertificateItemDetails>
        <div className="term">[{term}]</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </CertificateItemDetails>
    </CertificateWrapper>
  )
}

export default CertificateItem
