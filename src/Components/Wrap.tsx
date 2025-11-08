import styled, { keyframes } from 'styled-components'

export const Wrap = styled.div`
  width: 800px;
  height: 100vh;

  display: flex;

  margin: 0 auto;
  margin-top: 80px;
`

export const TopArea = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: space-between;
`

const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #222;
  animation: ${slideFromLeft} 0.6s ease-out forwards;
`

export const Content = styled.div`
  font-size: 18px;
  color: #555;
  animation: ${slideFromRight} 0.6s ease-out 0.6s forwards; /* 0.6s 딜레이 */
  opacity: 0; /* 애니메이션 전에 안 보이게 */
`
