import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
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
`

export default GlobalStyle
