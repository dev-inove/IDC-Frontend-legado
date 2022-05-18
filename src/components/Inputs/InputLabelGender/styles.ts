import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';

export const StyledTrigger = styled(Select.SelectTrigger)`
  width: 14rem;
  background-color: var(--background);
  color: var(--textColor300);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid var(--borderInput);
  border-radius: 5px;
  transition: 0.3s;
`;

export const StyledContent = styled(Select.Content)`
  overflow: hidden;
  background-color: var(--background);
  border-radius: 6px;
  padding: 5px;
`;

export const StyledItem = styled(Select.Item)`
  all: unset;
  font-size: 14px;
  line-height: 1.5;
  color: var(--textColor500);
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 5px;
  position: relative;

  &:focus {
    background-color: var(--primaryColorHover);
    color: var(--background);
    cursor: pointer;
  }
`;

export const StyledIconCheck = styled(CheckIcon)`
  height: 20px;
  width: 20px;
  margin-top: 3px;
`;

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

