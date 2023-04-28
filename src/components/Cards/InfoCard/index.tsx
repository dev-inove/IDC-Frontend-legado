import { useEffect, useState } from 'react';

import assistaintsLogo from '~/assets/images/assistants_logo.svg';
import activitiesLogo from '~/assets/images/activities_logo.svg';

import * as styles from './styles';

function Infocards() {
  const [assisteds, setAssisted] = useState(0);
  const [activities, setActivities] = useState(0);

  useEffect(() => {
    setAssisted(111);
    setActivities(199);
  }, []);

  return (
    <>
      <styles.InfoHeaderText>Dados gerais</styles.InfoHeaderText>
      <styles.ContainerCardsInfo>
        <styles.InfoCard>
          <styles.ContainerInfoCardImage>
            <styles.InforCardImage
              src={assistaintsLogo}
              alt='Uma mulher fazendo companhia para idosos'
            />
          </styles.ContainerInfoCardImage>
          <styles.ContainerInfoCardText>
            <styles.CounterStyle>{assisteds}</styles.CounterStyle>
            <styles.InforCardText>Assistidos cadastrados</styles.InforCardText>
          </styles.ContainerInfoCardText>
        </styles.InfoCard>
        <styles.InfoCard>
          <styles.ContainerInfoCardImage>
            <styles.InforCardImage
              src={activitiesLogo}
              alt='Dois idosos fazendo alongamentos'
            />
          </styles.ContainerInfoCardImage>
          <styles.ContainerInfoCardText>
            <styles.CounterStyle>{activities}</styles.CounterStyle>
            <styles.InforCardText>Atividades cadastradas</styles.InforCardText>
          </styles.ContainerInfoCardText>
        </styles.InfoCard>
      </styles.ContainerCardsInfo>
    </>
  );
}

export default Infocards;
