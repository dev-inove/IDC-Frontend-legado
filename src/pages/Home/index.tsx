import React from 'react';

import HomeCards from '~/components/Cards/HomeCards';
import * as S from './styles';

function Home() {
  return (
    <S.HomeContainer>
      <HomeCards />
    </S.HomeContainer>
  );
}

export default Home;
