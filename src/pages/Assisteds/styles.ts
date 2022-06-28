import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const Container = styled.div``;

export const AssistedsContainer = styled.div`
  background-color: var(--backgroundGrayContent);
  height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
  margin-left: 16rem;
  min-width: 582.55px;
  padding: 35px 45px;
  :hover {
    overflow-x: auto;
    overflow-y: auto;
  }
`;

export const FilterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AssistedInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const AssistedFiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //justify-content: none;
  margin-bottom: 2rem;
`;


export const InputCpf = styled.input`
  width: 30%;
  height: 2.5rem;
`;

export const InputAge = styled.select`
  width: 15%;
  height: 2.5rem;
  margin-right: 2rem;
`;
export const InputSex = styled.select`
  width: 15%;
  height: 2.5rem;
  margin-right: 2rem;
`;
export const InputVisualDeficienceDregreeLevel = styled.select`
  width: 30%;
  height: 2.5rem;
`;

// Revisar essa parte do código!!!!!!!

export const Welcome = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
  line-height: 47px;
  color: var(--textColor500);
`;

export const WelcomeParagraph = styled.p`
  margin-top: 5px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 31px;
  color: var(--textColor300);
`;

export const FormLogin = styled.div`
  width: 30rem;
`;

export const StyledTrigger = styled(Select.SelectTrigger)`
  width: 12rem;
  background-color: var(--background);
  color: var(--textColor300);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
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

export const ContentRowLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: end;
`;
