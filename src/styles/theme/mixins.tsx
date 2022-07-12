import { keyframes } from 'styled-components'
import * as styleVariable from './variables'
import { maxDevices, minDevices } from './variables'

export const mixins = {
  tagYellow: () => `
    display: flex;
    width: fit-content;
    background: ${styleVariable.color.primaryOpacity};
    color: ${styleVariable.color.primary};
    border-radius: ${styleVariable.borderRadius};
    font-size: ${styleVariable.size.small1};
    font-weight: ${styleVariable.weight.semiBold};
    padding: 0 5px;
    margin-right: 0.5rem;
    min-width: 4rem;
    justify-content: center;
  `,

  subTitle: () => `
    border-radius: 0.25rem;
    color: #ffaf19;
    width: fit-content;
    padding: 0 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.775rem;
    border: 1px solid #ffaf19;
    box-shadow: 1px 1px 1px;
  `,

  underline: () => `
    content: '';
    width: 100%;
    height: 6px;
    background: ${styleVariable.color.primary};
    position: absolute;
    bottom: 3px;
    left: 0;
    opacity: 0.5;
    z-index: -1;
  `,

  expert: () => `
    border: 1px solid ${styleVariable.color.primaryEmphasis};
    color: ${styleVariable.color.primaryEmphasis};
    background: ${styleVariable.color.primaryEmphasisOpacity};
  `,

  techTags: () => `
    width: fit-content;
    padding: 0.1rem 0.25rem;
    border-radius: ${styleVariable.borderRadius};
    border: 1px solid ${styleVariable.color.grey8};
    color: ${styleVariable.color.grey8};
    font-size: ${styleVariable.size.small1};
    line-height: 1;
    height: fit-content;
    margin: 0.225rem 0.225rem 0 0;
  `,
}

export const commonKeyframes = {
  blink: keyframes`
    50% {
      border-color: ${styleVariable.color.primary};
    }
  `,

  shine: keyframes`
    0% {
      background-position: 0;
    }
    60% {
      background-position: 200px;
    }
    100% {
      background-position: 400px;
    }
  `,
}

export const commonDevices = {
  mobile: `${minDevices.mobileXS} and ${maxDevices.tablet}`,
  tablet: `${minDevices.tablet} and ${maxDevices.laptop}`,
  laptop: `(${minDevices.laptop}) and (${maxDevices.desktop})`,
  desktop: `${minDevices.desktop}`,
}
