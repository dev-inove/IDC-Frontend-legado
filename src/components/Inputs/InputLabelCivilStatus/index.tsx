import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { Field } from 'formik';

import * as S from './styles';

interface PropsInputLabelCivilStatus {
  label: string;
}

function InputLabelCivilStatus({ label }: PropsInputLabelCivilStatus) {
  return (
    <Field name='civilState'>
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
                  <S.StyledItem value='Solteiro'>
                    <Select.ItemText>Solteiro</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='Casado'>
                    <Select.ItemText>Casado</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='Viúvo'>
                    <Select.ItemText>Viúvo</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='Separado'>
                    <Select.ItemText>Separado</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='Divorciado'>
                    <Select.ItemText>Divorciado</Select.ItemText>
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

export default InputLabelCivilStatus;
