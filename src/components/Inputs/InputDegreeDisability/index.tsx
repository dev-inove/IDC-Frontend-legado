import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { Field } from 'formik';

import * as S from './styles';

interface PropsInputDegreeDisability {
  label: string;
}

function InputDegreeDisability({ label }: PropsInputDegreeDisability) {
  return (
    <Field name='degreeDisability'>
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
                  <S.StyledItem value='1 - Leve'>
                    <Select.ItemText>1 - Leve</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='2 - Moderada'>
                    <Select.ItemText>2 - Moderada</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='3 - Profunda'>
                    <Select.ItemText>3 - Profunda</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='4 - Severa'>
                    <Select.ItemText>4 - Severa</Select.ItemText>
                    <Select.ItemIndicator>
                      <S.StyledIconCheck />
                    </Select.ItemIndicator>
                  </S.StyledItem>
                  <S.StyledItem value='5 - Perda total'>
                    <Select.ItemText>5 - Perda total</Select.ItemText>
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

export default InputDegreeDisability;
