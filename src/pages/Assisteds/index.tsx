import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button/index";
import * as styles from './styles';
import { Plus } from 'phosphor-react';

function Assisted() {
  const navigate = useNavigate();

  return (
    <styles.Container>
      <h1>Assistidos</h1>
      <Button
      property='primary'
      name='Cadastrar'
      type='button'
      onClick={
        () => navigate('/assistedRegister')
      }>
        <Plus size={14} weight="bold" />
        Cadastrar
      </Button>
    </styles.Container>
  );
}

export default Assisted;
