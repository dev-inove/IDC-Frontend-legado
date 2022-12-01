import { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
// Importando icones do react-icons
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-datepicker/dist/react-datepicker.css';
// Importando styles e atribuindo prefixo "S"
import * as S from './styles';
// Importando a biblioteca de Tabs
import 'react-tabs/style/react-tabs.css';
import Adress from './Adress';
import PersonalData from './PersonalData';
import Relatives from './Relatives';

function Detail() {
  // Auxiliares de estilização das Tabs
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <S.Container style={{ marginLeft: '18rem' }}>
      <S.Header>
        <S.NavLink to='/assisted'>
          <S.IconLink>
            <FontAwesomeIcon icon={faArrowLeft} />
          </S.IconLink>
        </S.NavLink>
        <S.Welcome>Detalhes do assistido</S.Welcome>
      </S.Header>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/*
        O react-tabs foi utilizado para criar as diversas tabas sem que seja necessário criar novas rotas
        Os elementos "CustomTabList" e "CustomTab" são estilizações dos elementos "TabList" e "Tab" da biblioteca react-tabs
        Os formularios estão dentro de um "TabPanel" para que possam ser exibidos apenas quando a tab correspondente for selecionada
        Biblioteca:
        https://www.npmjs.com/package/react-tabs 

        Obs: Utilizamos o "Controlled mode" da biblioteca react-tabs para utilizarmos a estilização condicional com base na variavel "tabIndex"
        */}
        <S.CustomTabList>
          <S.CustomTab className={tabIndex === 0 ? 'activeButton' : ''}>
            Dados Pessoais
          </S.CustomTab>
          <S.CustomTab className={tabIndex === 1 ? 'activeButton' : ''}>
            Endereço
          </S.CustomTab>
          <S.CustomTab className={tabIndex === 2 ? 'activeButton' : ''}>
            Familiares
          </S.CustomTab>
          <S.CustomTab className={tabIndex === 3 ? 'activeButton' : ''}>
            Imóveis
          </S.CustomTab>
        </S.CustomTabList>
        {/* Aba de Dados Pessoais */}
        <TabPanel>
          <PersonalData />
        </TabPanel>
        {/* Aba de Endereço */}
        <TabPanel>
          <Adress />
        </TabPanel>
        {/* Aba de Familiares */}
        <TabPanel>
          <Relatives />
        </TabPanel>

        {/* Aba de Imóveis */}
        <TabPanel>Imóveis</TabPanel>
      </Tabs>

      {/* Verificar possibilidade de utilizar React Tabs para não recarregar a pag completa */}
    </S.Container>
  );
}

export default Detail;
