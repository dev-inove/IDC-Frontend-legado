import React from 'react';
import { IconType } from 'react-icons';

import * as S from './styles';

interface PropsButtonSecondary {
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  iconName: IconType | null;
}

function ButtonSecondary({ type, name, iconName }: PropsButtonSecondary) {
  return (
    <S.ButtonContainer type={type}>
      <S.ButtonContent>
        {iconName !== null
          ? React.createElement(iconName, {
              color: '#EF6D1F',
              fontSize: 13,
            })
          : null}
        <S.TextButtonName>{name}</S.TextButtonName>
      </S.ButtonContent>
    </S.ButtonContainer>
  );
}

export default ButtonSecondary;
