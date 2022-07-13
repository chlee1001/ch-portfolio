import React from 'react'
import styled, { css } from 'styled-components'
import CertificateItem from './CertificateItem'
import SubTitle from '#components/commons/SubTitle'
import myData from '#assets/db.json'
import { maxDevices } from '#styles/theme/variables'

const CertificatesContainer = styled.div`
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

const Certificates = () => {
  const { certificates } = myData

  if (certificates.length === 0) {
    return null
  }

  return (
    <>
      <SubTitle>Certificates</SubTitle>
      <CertificatesContainer>
        {certificates.map((certificate) => (
          <CertificateItem key={certificate.id} certificate={certificate} />
        ))}
      </CertificatesContainer>
    </>
  )
}

export default Certificates
