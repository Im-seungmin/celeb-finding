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

  @media (max-width: 480px) {
    width: 480px;
    height: 100%;
  }
`

export const AlertBox = styled.div<{WIDTH: string, HEIGHT: string}>`
  width: ${(props) => props.WIDTH};
  min-height: ${(props) => props.HEIGHT};
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

export const AlertMessage = styled.div<{column?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
`
export const TitleMessage = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 18px;
`

export const MiniMessage = styled.div`
  font-size: 11px;
  margin-top: 25px;
  color: #555;
`