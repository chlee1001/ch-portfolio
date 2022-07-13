import React, { SyntheticEvent } from 'react'
import styled, { css } from 'styled-components'
import noImage from '#assets/static/images/no-image.png'
import GithubLight from '#assets/static/images/github-light.png'
import GithubDark from '#assets/static/images/github-dark.png'
import { IProjectsProps } from '#types/projects'
import {
  borderRadius,
  boxShadow,
  color,
  maxDevices,
  minDevices,
  size,
  weight,
} from '#styles/theme/variables'
import { commonDevices, mixins } from '#styles/theme/mixins'

interface IProjectItemProps {
  project: IProjectsProps
}

const ProjectItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 1rem;

  @media ${commonDevices.mobile} {
    ${css`
      flex-direction: column;
    `}
  }
`
const ProjectDetails = styled.a`
  width: 100%;
  display: flex;
  flex: 1 1 90%;

  &:hover {
    opacity: 0.6;
  }

  @media ${commonDevices.mobile} {
    ${css`
      flex-direction: column;
    `}
  }
`

const ProjectItemImage = styled.div`
  min-width: 4rem;
  max-width: 6rem;
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

  @media ${commonDevices.mobile} {
    ${css`
      border: 0;
      display: block;
    `}
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

const ProjectItemTags = styled.div`
  display: flex;

  .tag {
    ${mixins.techTags};
    @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.small2};
      `}
    }
    @media ${minDevices.mobileXS1} and ${maxDevices.mobileM} {
      ${css`
        font-size: ${size.small3};
      `}
    }
    @media ${maxDevices.mobileXS} {
      ${css`
        font-size: ${size.tiny0};
      `}
    }
  }

  @media ${commonDevices.mobile} {
    ${css`
      display: flex;
      flex-wrap: wrap;
    `}
  }
`

const ProjectItemDetails = styled.div`
  margin-left: 1rem;
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

  .description {
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

  .attribution {
    font-size: ${size.small0};
    color: ${color.grey9};
    margin-top: 0.35rem;

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

  @media ${commonDevices.mobile} {
    ${css`
      margin-top: 0.825rem;
      margin-left: 0.5rem;
    `}
  }
`

const ProjectLinks = styled.div`
  width: 100%;
  flex-basis: 5%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;

  .github-logo {
    display: block;
    background-image: url(${GithubLight});
    background-repeat: no-repeat;
    background-size: contain;
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    opacity: 0.6;
  }

  @media ${commonDevices.mobile} {
    ${css`
      background: #242a2e;
      border-radius: 5px;
      margin-left: 0.5rem;
      cursor: pointer;

      a {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0.5rem;

        .github-logo {
          background-image: url(${GithubDark});
        }
      }
    `}
  }
`

const ProjectItem = ({ project }: IProjectItemProps) => {
  const {
    title,
    term,
    imgUrl,
    tags,
    description,
    attribution,
    projectUrl,
    githubUrl,
  } = project

  const addDefaultSrc = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = noImage
  }
  return (
    <ProjectItemWrapper className="project">
      <ProjectDetails
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectItemImage>
          <img
            src={imgUrl}
            alt={`${title} logo 이미지`}
            onError={addDefaultSrc}
          />
        </ProjectItemImage>
        <ProjectItemDetails>
          <div className="title">
            {title} <span className="term">({term})</span>
          </div>
          <div className="description">{description}</div>
          <div className="attribution">{attribution}</div>
          <ProjectItemTags>
            {tags.map((tag) => (
              <div key={tag} className="tag">
                {tag}
              </div>
            ))}
          </ProjectItemTags>
        </ProjectItemDetails>
      </ProjectDetails>
      {githubUrl && (
        <ProjectLinks className="project__links">
          <a href={githubUrl}>
            <div className="github-logo" />
          </a>
        </ProjectLinks>
      )}
    </ProjectItemWrapper>
  )
}

export default ProjectItem
