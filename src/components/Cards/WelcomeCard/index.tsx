import React from 'react';

import welcomeLogo from '~/assets/images/welcome_logo.svg';

import * as S from './styles';

function WelcomeCard() {
  return (
    <S.ContainerCardWelcome>
      <S.ContainerCardWelcomeText>
        <S.CardWelcomeHeaderText>Bem-vindo</S.CardWelcomeHeaderText>
        <S.CardWelcomeText>
          Aqui você pode gerenciar cada assistido e cada evento feito pela Casa
          de Saberes Cego Aderaldo
        </S.CardWelcomeText>
      </S.ContainerCardWelcomeText>
      <S.ContainerCardWelcomeImage>
        <S.CardWelcomeImage
          src={welcomeLogo}
          alt='Imagem de Boas vindas, nela há um homem utilizando seu notebook com um fone de ouvido sem fio no ouvido, e ele tammbém está em uma chamada com alguém'
        />
      </S.ContainerCardWelcomeImage>
    </S.ContainerCardWelcome>
  );
}

export default WelcomeCard;
