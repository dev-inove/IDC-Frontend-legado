import React from 'react';

import * as S from './styles';

interface PropsInputLabel {
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  placeholder: string;
  value: any;
  onChange: any;
  onBlur: any;
  isHalf: number;
}

function InputLabel({
  label,
  error,
  touched,
  placeholder,
  value,
  onChange,
  onBlur,
  isHalf,
}: PropsInputLabel) {
  return (
    <S.FormInput>
      <S.ContainerTextInput>
        <S.LabelInput>{label}</S.LabelInput>
        {error && touched ? (
          <S.LabelInputAlert>{error}</S.LabelInputAlert>
        ) : null}
      </S.ContainerTextInput>
      <S.Input
        type='name'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isHalf={isHalf}
      />
    </S.FormInput>
  );
}

export default InputLabel;
