import React from 'react';
import { Field } from 'formik';

import * as S from './styles';

interface PropsInputLabelDate {
  label: string;
  error: string | undefined;
  touched: string | undefined;
  isHalf: number;
}

function InputLabelDate({ label, error, touched }: PropsInputLabelDate) {
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
          />
        )}
      </Field>
    </S.FormInput>
  );
}

export default InputLabelDate;
