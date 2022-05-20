import React, { useEffect, useState } from 'react';

import assistaintsLogo from '~/assets/images/assistants_logo.svg';
import activitiesLogo from '~/assets/images/activities_logo.svg';

import * as S from './styles';

function Infocards() {
  const [assisteds, setAssisted] = useState(0);
  const [activities, setActivities] = useState(0);

  useEffect(() => {
    setAssisted(111);
    setActivities(199);
  }, []);

  return (
    <>
      <S.InfoHeaderText>Dados gerais</S.InfoHeaderText>
      <S.ContainerCardsInfo>
        <S.InfoCard>
          <S.ContainerInfoCardImage>
            <S.InforCardImage
              src={assistaintsLogo}
              alt='Uma mulher fazendo companhia para idosos'
            />
          </S.ContainerInfoCardImage>
          <S.ContainerInfoCardText>
            <S.CounterStyle>{assisteds}</S.CounterStyle>
            <S.InforCardText>Assistidos cadastrados</S.InforCardText>
          </S.ContainerInfoCardText>
        </S.InfoCard>
        <S.InfoCard>
          <S.ContainerInfoCardImage>
            <S.InforCardImage
              src={activitiesLogo}
              alt='Dois idosos fazendo alongamentos'
            />
          </S.ContainerInfoCardImage>
          <S.ContainerInfoCardText>
            <S.CounterStyle>{activities}</S.CounterStyle>
            <S.InforCardText>Atividades cadastradas</S.InforCardText>
          </S.ContainerInfoCardText>
        </S.InfoCard>
      </S.ContainerCardsInfo>
    </>
  );
}

export default Infocards;
