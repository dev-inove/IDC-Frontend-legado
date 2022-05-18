import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import * as S from './styles';

interface PropsInputLabelPhone {
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  onChange: any;
  onBlur: any;
}

function InputLabelPhone({
  label,
  error,
  touched,
  onChange,
  onBlur,
}: PropsInputLabelPhone) {
  return (
    <S.FormInput>
      <S.ContainerTextInput>
        <S.LabelInput>{label}</S.LabelInput>
        {error && touched ? (
          <S.LabelInputAlert>{error}</S.LabelInputAlert>
        ) : null}
      </S.ContainerTextInput>
      <PhoneInput
        country='br'
        inputStyle={{
          width: '30rem',
          borderRadius: 5,
          border: '1px solid #E9E7E7',
          fontSize: 16,
          marginBottom: '20px',
          color: '#666666',
        }}
        onChange={onChange}
        onBlur={onBlur}
      />
    </S.FormInput>
  );
}

export default InputLabelPhone;
