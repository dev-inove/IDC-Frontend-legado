import styled from 'styled-components';

export const ButtonContainer = styled.button`
  min-width: 8rem;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 40px;
  border-radius: 5px;
  padding: 0 12px;
  border: 1px solid var(--borderInput);
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--background);
  transition: 0.7s;
  :hover {
    background-color: var(--backgroundGray);
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextButtonName = styled.h4`
  font-weight: 500;
  font-size: 14px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  color: var(--primaryColor);
`;
