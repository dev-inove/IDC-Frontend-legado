import React from 'react';

import WelcomeCard from '../WelcomeCard';
import Infocards from '../InfoCards';
import RegisteredCard from '../RegisteredCard';
import * as S from './styles';

function HomeCards() {
  return (
    <S.HomeCardsContainer>
      <WelcomeCard />
      <Infocards />
      <RegisteredCard />
    </S.HomeCardsContainer>
  );
}

export default HomeCards;
