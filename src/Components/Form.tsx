import styled from 'styled-components'

export const Form = styled.form`
  width: 300px;
  height: 300px;

  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  padding: 16px;
`

export const ItemDiv = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TextDiv = styled.div`
  width: 100%;
  height: 30px;

  font-size: 18px;

  color: #666;

  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 14px;
  transition: 0.15s ease;
  outline: none;
  &:focus {
    border-color: #6c8cff;
    box-shadow: 0 0 0 3px rgba(108, 140, 255, 0.12);
    background: #fff;
  }
  &::placeholder {
    color: rgba(148, 163, 184, 0.9);
  }
`
export const Select = styled.select`
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 14px;
  transition: 0.15s ease;
  outline: none;
  &:focus {
    border-color: #6c8cff;
    box-shadow: 0 0 0 3px rgba(108, 140, 255, 0.12);
    background: #fff;
  }
  &::placeholder {
    color: rgba(148, 163, 184, 0.9);
  }
`

export const Button = styled.button`
  width: 100%;
  height: 44px;

  background: #6c8cff;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin-top: 16px;

  &:hover {
    background: #5a73e6;
  }
`
