import { CSSTransition } from 'react-transition-group'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import {
  borderRadius,
  boxShadow,
  color,
  maxDevices,
  minDevices,
  size,
  weight,
} from '#styles/theme/variables'
import { mixins } from '#styles/theme/mixins'
import myData from '#assets/db.json'

const PersonalWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;

  @media ${minDevices.mobileS} and ${maxDevices.tablet} {
    ${css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}
  }

  @media ${maxDevices.mobileS} {
    ${css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 1.5rem;
    `}
  }
`
const ProfileImageWrapper = styled.div`
  width: 17rem;
  min-width: 17rem;
  height: 17rem;
  display: flex;
  background: black;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};

  @media ${minDevices.mobileL} and ${maxDevices.tablet} {
    ${css`
      margin-bottom: 2rem;
    `}
  }

  @media ${minDevices.mobileS} and ${maxDevices.mobileL} {
    ${css`
      min-width: 14rem;
      height: 14rem;
      width: 14rem;
      margin-bottom: 1.5rem;
    `}
  }

  @media ${maxDevices.mobileS} {
    ${css`
      min-width: 12rem;
      height: 12rem;
      width: 12rem;
      margin-bottom: 1.365rem;
    `}
  }
`
const ProfileImage = styled.img`
  object-fit: contain;
  border-radius: ${borderRadius};
  width: 100%;
  height: auto;
  border: 1px solid ${color.grey0};
  box-shadow: ${boxShadow};
`
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2rem;

  @media ${maxDevices.tablet} {
    ${css`
      width: 100%;
      padding-left: 0;
    `}
  }
`

const Details = styled.div`
  display: block;

  .detail {
    width: 100%;
    display: block;
    line-height: 2;
    margin-bottom: 0.5rem;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    img {
      object-fit: contain;
      width: 1.5rem;
      height: auto;
      margin-right: 0.5rem;
    }

    .category {
      ${mixins.tagYellow}
    }

    .about {
      margin-left: 0.875rem;
    }

    &:hover {
      color: ${color.primary};
    }
  }

  .flex {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
  }

  .name {
    font-size: ${size.large4};
    font-weight: ${weight.black};
    display: inline-block;
    margin-bottom: 1.25rem;
    position: relative;

    &::after {
      ${mixins.underline}
    }

    @media ${minDevices.mobileL} and ${maxDevices.tablet} {
      ${css`
        font-size: ${size.large3};
      `}
    }
    @media ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.large2};
      `}
    }
  }

  #email {
    position: relative;
  }

  .alert {
    font-size: ${size.small3};
    font-weight: ${weight.lightBold};
    color: ${color.alert};
    border: 1px solid;
    border-radius: ${borderRadius};
    position: absolute;
    top: 7px;
    padding: 0 5px;
    margin-left: 0.5rem;
  }

  .alert-enter {
    opacity: 0;
  }

  .alert-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .alert-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }

  @media ${minDevices.mobileXS1} and ${maxDevices.mobileL} {
    ${css`
      .flex {
        display: inline-grid;

        a {
          margin: 0.225rem 0 0 1rem;
          font-size: ${size.small0};
        }
      }

      #email {
        margin: 0.225rem 0 0 1rem;
        font-size: ${size.small0};
      }
    `}
  }

  @media ${maxDevices.mobileXS} {
    ${css`
      .flex {
        display: inline-grid;

        a {
          margin: 0.5rem 0 0.5rem 1rem;
          word-break: break-all;
          line-height: 1;
          font-size: ${size.small1};
        }
      }

      #email {
        margin: 0.5rem 0 0.5rem 1rem;
        word-break: break-all;
        line-height: 1;
        font-size: ${size.small1};

        span {
          display: inline-block;
          margin: 0 0 0 0.225rem;
          width: fit-content;
          padding: 2px;
          top: 1px;
        }
      }
    `}
  }
`

const PersonalInfos = () => {
  const {
    aboutMe: { profileImg, name, email, githubUrl, blogUrl, linkedInUrl },
  } = myData

  const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false)

  const copyClipboard = () => {
    try {
      // eslint-disable-next-line no-void
      void navigator.clipboard.writeText(email)
      setIsEmailCopied(true)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Can't copy email to clipboard")
    }
  }

  const nodeRef = useRef(null)
  useEffect(() => {
    if (isEmailCopied) {
      const timer = setTimeout(() => {
        setIsEmailCopied(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
    return () => {}
  }, [isEmailCopied])

  return (
    <PersonalWrapper className="personal-infos">
      <ProfileImageWrapper className="profile-image">
        <ProfileImage src={profileImg} alt={`${name}의 사진`} />
      </ProfileImageWrapper>
      <DetailWrapper className="detail-wrapper">
        <Details className="details">
          <span className="name">{name}</span>
          <div className="detail flex">
            <span className="category">Email</span>
            <div
              id="email"
              onClick={() => {
                copyClipboard()
              }}
              aria-hidden="true"
            >
              {email}
              <CSSTransition
                nodeRef={nodeRef}
                in={isEmailCopied}
                timeout={300}
                classNames="alert"
                unmountOnExit
                appear
              >
                <span ref={nodeRef} className="alert">
                  copied!
                </span>
              </CSSTransition>
            </div>
          </div>
          <div className="detail flex">
            <span className="category">Github</span>
            <a href={githubUrl}>{githubUrl}</a>
          </div>
          {blogUrl && (
            <div className="detail flex">
              <span className="category">Blog</span>
              <a href={blogUrl}>{blogUrl}</a>
            </div>
          )}
          {linkedInUrl && (
            <div className="detail flex">
              <span className="category">LinkedIn</span>
              <a href={linkedInUrl}>{linkedInUrl}</a>
            </div>
          )}
        </Details>
      </DetailWrapper>
    </PersonalWrapper>
  )
}
export default PersonalInfos
