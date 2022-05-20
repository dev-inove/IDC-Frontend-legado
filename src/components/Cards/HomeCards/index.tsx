import React from 'react';

import WelcomeCard from '../WelcomeCard';
import Infocards from '../InfoCards';
import * as S from './styles';

function HomeCards() {
  return (
    <S.HomeCardsContainer>
      <WelcomeCard />
      <Infocards />
    </S.HomeCardsContainer>
  );
}

export default HomeCards;
