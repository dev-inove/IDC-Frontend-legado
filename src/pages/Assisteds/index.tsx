import React from 'react';
import { Plus } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import ButtonPrimary from '~/components/ButtonPrimary';
import * as S from './styles';

function Assisted() {
  const navigate = useNavigate();

  function toRegister() {
    navigate('/assistedRegister');
  }

  return (
    <S.Container>
      <h1>Assisted</h1>
      <ButtonPrimary
        type='button'
        name='Cadastrar'
        iconName={Plus}
        onClick={toRegister}
      />
    </S.Container>
  );
}

export default Assisted;
