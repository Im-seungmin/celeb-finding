import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const popIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const Alert = styled.div<{ display: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.display ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.15s ease-out;

  font-size: 18px;
`

export const AlertBox = styled.div`
  width: 300px;
  min-height: 200px;
  background-color: white;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 80%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${popIn} 0.18s ease-out;
`

export const AlertMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`
