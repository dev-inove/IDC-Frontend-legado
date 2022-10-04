import React, { useState } from 'react';
import * as S from './styles';
import AssistedTable from '~/components/Tables/AssistedTable';
import ActivitiesTable from '~/components/Tables/ActivitiesTable';

function RegisteredCard() {
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => setIsActive(current => !current);

    return(
        <S.ContainerRegisteredCard>
            <S.RegisteredHeaderText>Registrados recentemente</S.RegisteredHeaderText>
            <S.RegisteredNavBar>
                <S.RegisteredButton className='assistedButton' style={{
                    color: isActive ? 'var(--textGray)' : 'var(--black)',
                    borderBottom: isActive ?  '1px solid transparent' : '1px solid var(--black)',
                }}
                onClick={handleClick}
                >
                    Assistidos
                </S.RegisteredButton>
                <S.RegisteredButton className='activitiesButton'style={{
                    color: isActive ? 'var(--black)' : 'var(--textGray)',
                    borderBottom: isActive ? '1px solid var(--black)' : '1px solid transparent',
                }}
                onClick={handleClick}
                >
                    Atividades
                </S.RegisteredButton>
            </S.RegisteredNavBar>
            { isActive === true && <ActivitiesTable /> }
            { isActive === false && <AssistedTable /> }
            <S.seeMore>Ver mais</S.seeMore>
        </S.ContainerRegisteredCard>
    );
}

export default RegisteredCard;