import React, { useState } from 'react';

import * as S from './styles';

function RegisteredCard() {
    return(
        <S.ContainerRegisteredCard>
            <S.RegisteredHeaderText>Registrados recentemente</S.RegisteredHeaderText>
            <S.RegisteredNavBar>
                <S.RegisteredButton className='assistedButton'>
                    Assistidos
                </S.RegisteredButton>
                <S.RegisteredButton className='activitiesButton'>
                    Atividades
                </S.RegisteredButton>
            </S.RegisteredNavBar>
        </S.ContainerRegisteredCard>
    );
}

export default RegisteredCard;