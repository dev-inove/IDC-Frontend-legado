import styled from 'styled-components';
import DatePicker from 'react-datepicker';


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

export const DatePickertainer = styled(DatePicker)<Props>`
  width: ${({ isHalf }) => isHalf === 3 ? 8 : 30}rem;
  background-color: var(--background);
  color: var(--textColor300);
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid var(--borderInput);
  border-radius: 5px;
  transition: 0.3s;
`;
