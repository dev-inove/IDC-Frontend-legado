// Import componentes
import ButtonSecondary from '~/components/ButtonSecondary';

// Import estilos e icones
import * as S from '../styles';
import ImageRelatives from '~/assets/images/relatives_image.svg';
import { Plus } from 'phosphor-react';

function Relatives() {
  // Função apenas para teste temporário, será removida e ao clicar no botão de adicionar parente, será redirecionado para a página de cadastro de parentes
  function onClick() {
    alert('Clicou');
  }

  return (
    <S.RelativesContainer>
      <img src={ImageRelatives} alt='Relatives' />
      <S.Text>
        Essa pessoa ainda não possui <br /> nenhum membro familiar cadastrado.
      </S.Text>
      <ButtonSecondary
        type='button'
        name='Cadastrar'
        iconName={Plus}
        onClick={onClick}
      />
    </S.RelativesContainer>
  );
}

export default Relatives;
