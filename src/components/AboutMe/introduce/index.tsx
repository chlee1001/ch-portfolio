import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { mixins } from '#styles/theme/mixins'
import {
  borderRadius,
  color,
  maxDevices,
  minDevices,
  size,
  weight,
} from '#styles/theme/variables'
import CheckMark from '#assets/static/images/check-mark.png'
import CheckLight from '#assets/static/images/check-light.png'
import mmd from '#assets/mmd'
import useLanguage from '#hooks/useLanguage'
import useAboutMySelfMD from '#hooks/useAboutMySelfMD'

const IntroduceWrapper = styled.div`
  .subtitle {
    ${mixins.subTitle};
    border-radius: 0;
    box-shadow: none;
    padding: 0.225rem 1rem;
    margin-bottom: 0.5rem;

    @media ${minDevices.mobileS} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.default};
      `}
    }
    @media ${maxDevices.mobileS} {
      ${css`
        font-size: ${size.small0};
        font: ${weight.lightBold};
      `}
    }
  }

  .about {
    h1 {
      font-size: ${size.large2};
      font-weight: ${weight.lightBold};
    }

    h2 {
      font-size: ${size.large1};
      font-weight: ${weight.lightBold};
    }

    h3 {
      font-size: ${size.large0};
      font-weight: ${weight.lightBold};
      margin-left: 1rem;
    }

    a {
      color: ${color.primary};

      &:hover {
        font-weight: ${weight.lightBold};
      }
    }

    ul {
      & > li {
        margin: 0.25rem 1.125rem;

        &::before {
          content: '';
          height: 20px;
          width: 20px;
          vertical-align: middle;
          position: relative;
          display: inline-block;
          background-image: url(${CheckMark});
          background-repeat: no-repeat;
          background-size: contain;
        }
      }

      & > customli {
        display: block;
        margin: 0.25rem 1.125rem;

        &::before {
          content: '';
          height: 20px;
          width: 20px;
          vertical-align: middle;
          position: relative;
          display: inline-block;
          background-image: url(${CheckLight});
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
    }

    ol {
      counter-reset: number-counter;

      li {
        margin: 0.25rem 0;
        counter-increment: number-counter;
        vertical-align: middle;
        line-height: 1.5;

        &::before {
          content: '0' counter(number-counter);
          position: relative;
          display: inline-block;
          text-align: center;
          font-size: ${size.small0};
          font-weight: ${weight.lightBold};
          color: ${color.primary};
          margin-right: 0.375rem;
          padding: 0 0.225rem;
          background-color: ${color.primaryOpacityHeavy};
          border-radius: ${borderRadius};
        }
      }
    }

    strong {
      background-color: ${color.primaryOpacityHeavy};
      padding: 0 0.225rem;
      color: ${color.main};
    }

    boldred {
      background-color: ${color.alertOpacity};
      padding: 0 0.225rem;
      color: ${color.main};
      font-weight: ${weight.semiBold};
    }

    boldblue {
      background-color: ${color.darkEventOpacity};
      padding: 0 0.225rem;
      color: ${color.main}
      font-weight: ${weight.semiBold};
    }

    boldgreen {
      background-color: ${color.safeOpacity};
      padding: 0 0.225rem;
      color: ${color.main};
      font-weight: ${weight.semiBold};
    }

    code {
      vertical-align: middle;
      background-color: ${color.grey0};
      border-radius: 6px;
      font-size: ${size.small0};
      font-weight: ${weight.medium};
      color: ${color.grey10};
      display: inline-block;
      padding: 0.2em 0.4em;
      margin: 0 0.225rem;
      height: fit-content;
    }

    p {
      display: flex;
      flex-flow: wrap;
      align-items: center;
    }

    blockquote {
      position: relative;
      margin: 0.825rem 0;
      color: ${color.grey9};
      padding: 0.5rem 0.25rem 0.5rem 1.5rem;
      //padding: 0.75rem 1.5rem;
      background: ${color.greyLight};

      &::before {
        content: '';
        width: 5px;
        height: 100%;
        background: #ccd5dd;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
      }
    }


    @media ${minDevices.mobileS} and ${maxDevices.mobileL} {
      ${css`
        h1 {
          font-size: ${size.large0};
        }

        h2 {
          font-size: ${size.default};
        }

        h3 {
          font-size: ${size.small0};
        }

        li,
        customli {
          font-size: ${size.small0};
        }
      `}
    }

    @media ${maxDevices.mobileS} {
      ${css`
        h1 {
          font-size: ${size.default};
        }

        h2 {
          font-size: ${size.small0};
        }

        h3 {
          font-size: ${size.small1};
        }

        li,
        customli {
          font-size: ${size.small1};
        }
      `}
    }
  }

  .about {
    padding: 0 0 0 1.5rem;
  }

  @media ${maxDevices.tablet} {
    ${css`
      .about {
        padding: 0 0 0 0.5rem;
      }
    `}
  }
`

const Introduce = () => {
  const { currentLanguage } = useLanguage()
  const [aboutMySelfText, setAboutMySelfText] = useState<string>('')
  const aboutMyselfRef = useRef<HTMLDivElement>(null)

  useAboutMySelfMD(currentLanguage, setAboutMySelfText)

  if (aboutMyselfRef.current) {
    aboutMyselfRef.current.innerHTML = mmd(aboutMySelfText)
  }

  return (
    <IntroduceWrapper className="introduce">
      <div className="subtitle">Let me Introduce myself</div>
      <div className="about" ref={aboutMyselfRef} />
    </IntroduceWrapper>
  )
}

export default Introduce
