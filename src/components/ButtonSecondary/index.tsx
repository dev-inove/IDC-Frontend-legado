import React from 'react';

import * as S from './styles';

interface PropsButtonSecondary {
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  iconName: any | null;
  onClick?: () => void;
}

function ButtonSecondary({
  type,
  name,
  iconName,
  onClick,
}: PropsButtonSecondary) {
  return (
    <S.ButtonContainer type={type} onClick={onClick}>
      <S.ButtonContent>
        {iconName !== null
          ? React.createElement(iconName, {
              color: '#EF6D1F',
              fontSize: 14,
              weight: 'bold',
            })
          : null}
        <S.TextButtonName>{name}</S.TextButtonName>
      </S.ButtonContent>
    </S.ButtonContainer>
  );
}

export default ButtonSecondary;
