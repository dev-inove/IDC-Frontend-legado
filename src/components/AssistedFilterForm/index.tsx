import React from 'react';
import { Plus } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import ButtonPrimary from '~/components/ButtonPrimary';
import * as S from './styles';


export default function AssistedFilterForm(filteredAssisteds:[],setFilteredAssisteds:Function) {
    

    const navigate = useNavigate();
    
    function toRegister() {
    navigate('/assistedRegister');
    }
  return (
    <S.FilterFormContainer>
      <S.AssistedInputContainer>
        <S.InputCpf
          className='form-control'
          type='text'
          placeholder='Buscar pelo cpf'
        />
        <ButtonPrimary
          type='button'
          name='Cadastrar'
          iconName={Plus}
          onClick={toRegister}
        />
      </S.AssistedInputContainer>

      <h2 style={{ alignSelf: 'baseline' }}>Filtros</h2>

      <S.AssistedFiltersContainer>
        <S.InputAge className='form-select'>
          <option>Idade</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </S.InputAge>
        <S.InputSex className='form-select'>
          <option>Sexo</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </S.InputSex>

        <S.InputVisualDeficienceDregreeLevel className='form-select'>
          <option>Grau de deficiência visual</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </S.InputVisualDeficienceDregreeLevel>
      </S.AssistedFiltersContainer>
    </S.FilterFormContainer>
  );
}

