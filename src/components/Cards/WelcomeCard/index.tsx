import welcomeLogo from '~/assets/images/welcome_logo.svg';

import * as styles from './styles';

function WelcomeCard() {
  return (
    <styles.ContainerCardWelcome>
      <styles.ContainerCardWelcomeText>
        <styles.CardWelcomeHeaderText>Bem-vindo</styles.CardWelcomeHeaderText>
        <styles.CardWelcomeText>
          Aqui você pode gerenciar cada assistido e cada evento feito pela Casa
          de Saberes Cego Aderaldo
        </styles.CardWelcomeText>
      </styles.ContainerCardWelcomeText>
      <styles.ContainerCardWelcomeImage>
        <styles.CardWelcomeImage
          src={welcomeLogo}
          alt='Imagem de Boas vindas, nela há um homem utilizando seu notebook com um fone de ouvido sem fio no ouvido, e ele tammbém está em uma chamada com alguém'
        />
      </styles.ContainerCardWelcomeImage>
    </styles.ContainerCardWelcome>
  );
}

export default WelcomeCard;
