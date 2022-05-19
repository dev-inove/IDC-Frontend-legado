import React from 'react';

import * as S from './styles';

interface PropsButtonPrimary {
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  iconName: any;
  onClick?: () => void;
}

function ButtonPrimary({ type, name, iconName, onClick }: PropsButtonPrimary) {
  return (
    <S.ButtonContainer type={type} onClick={onClick}>
      <S.ButtonContent>
        {iconName !== null
          ? React.createElement(iconName, {
              color: '#fff',
              fontSize: 14,
              weight: 'bold',
            })
          : null}
        <S.TextButtonName>{name}</S.TextButtonName>
      </S.ButtonContent>
    </S.ButtonContainer>
  );
}

export default ButtonPrimary;
