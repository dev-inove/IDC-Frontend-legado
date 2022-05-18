import styled from 'styled-components';

interface Props {
  isHalf: number;
}

export const FormInput = styled.div`
  text-align: left;
`;

export const ContainerTextInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LabelInput = styled.label`
  display: block;
  margin-bottom: 5px;
  color: var(--textColor500);
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const LabelInputAlert = styled.label`
  display: block;
  margin-bottom: 5px;
  color: var(--primaryColor);
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
`;

export const Input = styled.input<Props>`
  width: ${({ isHalf }) => {
    if (isHalf === 2) {
      return 14;
    }
    if (isHalf === 1) {
      return 30;
    }
    return 9;
  }}rem;
  background-color: var(--background);
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid var(--borderInput);
  border-radius: 5px;
  transition: 0.3s;
  ::-webkit-input-placeholder {
    color: var(--textColor100);
  }

  @media(max-width: 500px) {
    width: 100%;
  }
`;
