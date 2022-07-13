import React from 'react'
import styled from 'styled-components'
import { color, size } from '#styles/theme/variables'

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`

const FooterContents = styled.p`
  font-size: ${size.small1};
  color: ${color.main};
  transition: all 200ms ease-in-out;

  .icon {
    color: ${color.grey4};
    text-align: center;

    img {
      width: 100%;
    }
  }

  &:hover {
    color: ${color.primary};
  }
`

const Footer = () => {
  return (
    <FooterContainer className="footer-container">
      <FooterContents className="footer-contents">
        <span className="icon">&copy; 2021ㅤ</span>
      </FooterContents>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/chlee1001"
      >
        <FooterContents className="footer-contents">
          Chaehyeon Lee
        </FooterContents>
      </a>
    </FooterContainer>
  )
}

export default Footer
