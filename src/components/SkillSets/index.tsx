import React from 'react'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import SubTitle from '#components/commons/SubTitle'
import myData from '#assets/db.json'
import {
  color,
  maxDevices,
  minDevices,
  size,
  weight,
} from '#styles/theme/variables'
import { commonDevices, mixins } from '#styles/theme/mixins'

const SkillSetsContainer = styled.div`
  padding: 0 1rem;
  margin-bottom: 5rem;
  user-select: none;

  @media ${maxDevices.mobileL} {
    ${css`
      margin-bottom: 3rem;
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      padding: 0;
    `}
  }
`

const SkillSetsDescription = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding: 0.75rem 1.5rem;
  background: ${color.greyLight};

  .level {
    ${mixins.tagYellow};
    display: inline-block;
    text-align: center;
    background: ${color.primaryLight};
    color: ${color.primary};
    border: 1px solid ${color.primary};

    @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.small2};
        min-width: 3.5rem;
      `}
    }
    @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
      ${css`
        font-size: ${size.small3};
        min-width: 3rem;
      `}
    }
    @media ${maxDevices.mobileXS} {
      ${css`
        font-size: ${size.tiny0};
        min-width: 2.5rem;
      `}
    }
  }

  .expert {
    ${mixins.expert};
  }

  &:before {
    content: '';
    width: 5px;
    height: 100%;
    background: ${color.grey4};
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }

  .description-item {
    color: ${color.grey10};
    font-size: ${size.small0};
    margin-bottom: 0.125rem;

    @media ${maxDevices.mobileL} {
      ${css`
        margin-bottom: 0.175rem;
      `}
    }
    @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
      ${css`
        font-size: ${size.small1};
      `}
    }
    @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
      ${css`
        font-size: ${size.small3};
      `}
    }
    @media ${maxDevices.mobileXS} {
      ${css`
        font-size: ${size.tiny1};
      `}
    }
  }

  @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
    ${css`
      padding: 0.75rem 1.25rem;
    `}
  }
  @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
    ${css`
      padding: 0.75rem 1.25rem;
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      padding: 0.75rem 1rem;
    `}
  }
`

const SkillSet = styled.div`
  margin-bottom: 2.5rem;

  @media ${commonDevices.mobile} {
    ${css`
      margin-bottom: 1rem;
      margin-right: 0;
    `}
  }
`
const Category = styled.div`
  position: relative;
  display: inline-block;
  font-size: ${size.large2};
  font-weight: ${weight.semiBold};
  margin-bottom: 0.875rem;

  &::after {
    ${mixins.underline};
  }

  @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
    ${css`
      font-size: ${size.large1};
    `}
  }
  @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
    ${css`
      font-size: ${size.large0};
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      font-size: ${size.default};
    `}
  }
`

const SkillItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.625rem;
  padding-left: 1.5rem;
  align-items: center;
  justify-content: center;
  justify-items: center;

  .item {
    margin-right: 1rem;

    .skill {
      display: inline-block;
      margin-right: 0.25rem;
    }

    .level {
      ${mixins.tagYellow};
      border: 1px solid ${color.primary};
      display: inline;
      @media ${maxDevices.mobileL} {
        ${css`
          font-weight: 500;
        `}
      }
      @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
        ${css`
          font-size: ${size.small1};
        `}
      }
      @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
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

    .expert {
      ${mixins.expert};
    }
  }

  @media ${commonDevices.mobile} {
    ${css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `}
  }

  @media ${minDevices.mobileM} and ${maxDevices.mobileL} {
    ${css`
      font-size: ${size.small1};
    `}
  }
  @media ${minDevices.mobileS} and ${maxDevices.mobileM} {
    ${css`
      font-size: ${size.small2};
    `}
  }
  @media ${maxDevices.mobileXS} {
    ${css`
      font-size: ${size.small3};
    `}
  }
`

const SkillSets = () => {
  const { skillSets } = myData
  const { t } = useTranslation()

  if (skillSets.length === 0) {
    return null
  }

  return (
    <>
      <SubTitle>Skill Sets</SubTitle>
      <SkillSetsContainer className="skill-sets-container">
        <SkillSetsDescription className="description">
          <div className="description-item">
            <span className="level expert">4 - 5</span>:{' '}
            {t('skill-sets-professional')}
          </div>
          <div className="description-item">
            <span className="level">3</span>: {t('skill-sets-advanced')}
          </div>
          <div className="description-item">
            <span className="level">1 - 2</span>: {t('skill-sets-beginner')}
          </div>
        </SkillSetsDescription>
        {skillSets.map((set) => (
          <SkillSet className="skill-set" key={set.id}>
            <Category className="category">{set.category}</Category>
            <SkillItems className="items">
              {set.skills
                .sort((a, b) => Number(b.level) - Number(a.level))
                .map(({ id, skill, level }) => (
                  <div className="item" key={id}>
                    <span className="skill">{skill}</span>
                    {level && (
                      <span
                        className={`level ${Number(level) >= 4 && 'expert'}`}
                      >
                        {level}
                      </span>
                    )}
                  </div>
                ))}
            </SkillItems>
          </SkillSet>
        ))}
      </SkillSetsContainer>
    </>
  )
}

export default SkillSets
