import { createGlobalStyle } from 'styled-components'
import { color, weight } from '#styles/theme/variables'
import Sun from '#assets/static/images/sun.png'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Montserrat, 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-width: 280px;
    height: 100%;
    min-height: 100%;
    cursor: default;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      width: 0;
    }
  }

  [data-theme='dark-mode'] {
    font-weight: ${weight.light};

    background-color: ${color.main};
    color: ${color.greyLight};

    .subtitle__h3 {
      text-shadow: -0px 0 10px ${color.darkEvent}, 2px 2px ${color.primaryEmphasis};
    }

    .project .project__links .github-logo {
      background-image: url('#assets/static/images/github-dark.png');
    }

    .timestamp .timestamp__main .when {
      color: ${color.grey1};
    }

    .experience {
      border-color: ${color.grey10};

      &:hover {
        border-color: ${color.grey11};
      }
    }

    .footer-container .footer-contents {
      color: ${color.white};

      &:hover {
        color: ${color.primary};
      }
    }

    .skill-sets-container .description {
      background: ${color.grey11};

      .description-item {
        color: ${color.white};
      }

      .expert {
        background-color: ${color.primaryEmphasisLight};
      }

      &::before {
        background: ${color.grey8};
      }
    }

    .container {
      .language {
        select {
          background: transparent;
          color: ${color.white};
        }
      }

      .theme-container {
        button {
          background-image: url(${Sun});
        }
      }
    }

    .about-me-container .introduce .about {
      strong {
        background-color: ${color.primaryOpacityHeavyLight};
      }

      p {
        gap: 0.1rem;
      }

      boldred {
        background-color: ${color.alertOpacityLight};
      }

      boldblue {
        background-color: ${color.darkEventOpacityLight};
      }

      boldgreen {
        background-color: ${color.safeOpacityLight};
      }

      ul > customli {
        &::before {
          background-image: url('#assets/static/images/check-dark.png');
        }
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;

    &:visited {
      color: inherit;
    }
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: middle;
  }

`

export default GlobalStyle
