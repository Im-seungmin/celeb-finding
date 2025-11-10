// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(180deg, #e8f1ff 0%, #ffffff 100%);
    font-family: 'Pretendard', sans-serif;

    overflow: hidden;
  }
`
