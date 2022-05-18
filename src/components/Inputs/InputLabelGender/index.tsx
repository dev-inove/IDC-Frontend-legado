import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { Field } from 'formik';

import * as S from './styles';

interface PropsInputLabelGender {
  label: string;
}

function InputLabelGender({ label }: PropsInputLabelGender) {
  return (
    <Field name='sex'>
      {({ field, form: { setFieldValue } }: any) => (
        <S.FormInput>
          <S.ContainerTextInput>
            <S.LabelInput>{label}</S.LabelInput>
          </S.ContainerTextInput>
          <Select.Root
            defaultValue='Selecione uma opção'
            onValueChange={(val) => setFieldValue(field.name, val)}
          >
            <S.StyledTrigger>
              <Select.Value />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </S.StyledTrigger>
            <S.StyledContent>
              <Select.Viewport>
                <Select.Group>
                  <S.StyledItem value='Selecione uma opção' disabled>
                    <Select.ItemText>Selecione uma opção</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='Masculino'>
                    <Select.ItemText>Masculino</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='Feminino'>
                    <Select.ItemText>Feminino</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                </Select.Group>
              </Select.Viewport>
            </S.StyledContent>
          </Select.Root>
        </S.FormInput>
      )}
    </Field>
  );
}

export default InputLabelGender;
