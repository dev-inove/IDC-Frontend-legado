import styled from 'styled-components';

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