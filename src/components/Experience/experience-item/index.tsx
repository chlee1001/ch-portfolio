import React, { SyntheticEvent } from 'react'
import styled, { css } from 'styled-components'
import noImage from '#assets/static/images/no-image.png'
import { IExperienceProps } from '#types/experience'
import {
  borderRadius,
  boxShadow,
  color,
  maxDevices,
  minDevices,
  size,
  weight,
} from '#styles/theme/variables'
import { commonDevices } from '#styles/theme/mixins'

interface IExperienceItemProps {
  experience: IExperienceProps
}

const ExperienceItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  user-select: none;
  margin-bottom: 1.375rem;

  padding: 1rem;
  border-radius: ${borderRadius};
  border: 1px solid ${color.grey2};
  box-sizing: border-box;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    border-color: ${color.grey6};
  }

  @media ${commonDevices.mobile} {
    ${css`
      flex-direction: column;
      padding: 0;
      border: 0;

      .item__details {
        padding-top: 0.5rem;
        padding-left: 0.625rem;

        .title {
          border-bottom: 1px solid ${color.grey2};
          padding-bottom: 0.225rem;

          span {
            display: block;
          }
        }
      }
    `}
  }
`
const ExperienceItemImage = styled.div`
  min-width: 4rem;
  max-width: 6rem;
  border: 1px solid ${color.grey0};
  border-radius: ${borderRadius};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  img {
    object-fit: contain;
    box-shadow: ${boxShadow};
    width: 100%;
    height: auto;
    border-radius: ${borderRadius};
    background: ${color.white};
  }

  @media ${minDevices.mobileXS1} and ${maxDevices.mobileL} {
    ${css`
      min-width: 3rem;
      max-width: 5rem;
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      min-width: 2rem;
      max-width: 4rem;
    `}
  }
`

const ExperienceItemDetails = styled.div`
  width: 100%;

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

  .term {
    font-size: ${size.small0};
    color: ${color.grey8};
    margin-left: 2px;

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

  .descriptions {
    font-size: ${size.default};
    color: ${color.grey8};
    margin-left: 2px;
  }
  .description,
  .descriptions {
    @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.small0};
      `}
    }
    @media ${minDevices.mobileXS1} and ${maxDevices.mobileM} {
      ${css`
        font-size: ${size.small1};
      `}
    }
    @media ${maxDevices.mobileXS} {
      ${css`
        font-size: ${size.small2};
      `}
    }
  }

  @media ${commonDevices.mobile} {
    ${css`
      padding-top: 0.5rem;
      padding-left: 0.625rem;

      .title {
        border-bottom: 1px solid ${color.grey4};
        padding-bottom: 0.225rem;

        span {
          display: block;
        }
      }
    `}
  }
`

const ExperienceItem = ({ experience }: IExperienceItemProps) => {
  const { imgUrl, experienceUrl, title, term, description, descriptions } =
    experience

  const addDefaultSrc = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = noImage
  }

  return (
    <a href={experienceUrl} target="_blank" rel="noopener noreferrer">
      <ExperienceItemWrapper className="experience">
        <ExperienceItemImage>
          <img
            src={imgUrl}
            alt={`${title} logo 이미지`}
            onError={addDefaultSrc}
          />
        </ExperienceItemImage>
        <ExperienceItemDetails>
          <div className="title">
            {title} <span className="term">({term})</span>
          </div>

          <div className="description">{description}</div>
          {descriptions && (
            <div className="descriptions">
              {descriptions.map((item) => (
                <div key={item} className="descriptions">
                  {item}
                </div>
              ))}
            </div>
          )}
        </ExperienceItemDetails>
      </ExperienceItemWrapper>
    </a>
  )
}

export default ExperienceItem
