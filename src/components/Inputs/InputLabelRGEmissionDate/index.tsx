import React from 'react';
import { Field } from 'formik';

import * as S from './styles';

interface PropsInputLabelDate {
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  isHalf: number;
  placeholder: string | undefined;
}

function InputLabelDate({ label, error, touched, placeholder }: PropsInputLabelDate) {
  return (
    <S.FormInput>
      <S.ContainerTextInput>
        <S.LabelInput>{label}</S.LabelInput>
        {error && touched ? (
          <S.LabelInputAlert>{error}</S.LabelInputAlert>
        ) : null}
      </S.ContainerTextInput>

      <Field name='RGEmissionDate'>
        {({ field, form: { setFieldValue } }: any) => (
          <S.DatePickertainer
            {...field}
            dateFormat='dd/MM/yyyy'
            selected={field.value || null}
            onChange={(val: Date) => {
              setFieldValue(field.name, val);
            }}
            placeholderText={placeholder}
          />
        )}
      </Field>
    </S.FormInput>
  );
}

export default InputLabelDate;
