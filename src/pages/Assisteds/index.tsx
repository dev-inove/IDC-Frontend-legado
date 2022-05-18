import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import ButtonPrimary from '~/components/ButtonPrimary';
import * as S from './styles';

function Assisted() {
  const navigate = useNavigate();

  function toRegister() {
    navigate('/assistedRegister');
  }

  return (
    <div style={{ marginLeft: '18rem' }}>
      <h1>Assisted</h1>
      <ButtonPrimary
        type='button'
        name='Cadastrar'
        iconName={FiPlus}
        onClick={toRegister}
      />
    </div>
  );
}

export default Assisted;
