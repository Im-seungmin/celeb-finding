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
  }

  /* 스크롤 공통 */
  /* Webkit (Chrome, Edge, Safari) */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(108, 140, 255, 0.35);
    border-radius: 9999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(108, 140, 255, 0.6);
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(108, 140, 255, 0.6) transparent;
  }
`
