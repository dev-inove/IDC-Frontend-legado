// Import de pacotes de dependencias
import * as Yup from 'yup';
import { validateCep, validateUF } from 'validations-br';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

// Import componentes
import ButtonPrimary from '~/components/ButtonPrimary';
import ButtonSecondary from '~/components/ButtonSecondary';
import InputLabel from '~/components/Inputs/InputLabel';

// Import estilos e icones
import * as S from '../styles';
import { ContentRowLabels } from '~/pages/Assisteds/styles';
import { TrashSimple, PencilSimpleLine } from 'phosphor-react';

const schema = Yup.object().shape({
  cep: Yup.string()
    .typeError('Apenas números')
    .test('is-cpf', 'Cep não é valido', (value) => validateCep(value as string))
    .required('O Cep é obrigatório'),
  uf: Yup.string()
    .typeError('Apenas letras')
    .test('is-uf', 'Estado não é valido', (value) =>
      validateUF(value as string)
    )
    .required('O Estado é obrigatório'),
  cityName: Yup.string().required('O nome da cidade é obrigatório'),
  district: Yup.string().required('O bairro é obrigatório'),
  adressNumber: Yup.string().required('O número é obrigatório'),
  adressComplement: Yup.string(),
});
function Adress() {
  const adressInfo = {
    cep: '',
    uf: '',
    cityName: '',
    district: '',
    adressNumber: '',
    adressComplement: '',
  };

  function onSubmitHandler(values: any) {
    console.log(values);
  }

  const navigate = useNavigate();

  return (
    <S.FormLogin>
      <Formik
        initialValues={adressInfo}
        validationSchema={schema}
        onSubmit={onSubmitHandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <ContentRowLabels>
              <InputLabel
                label='CEP'
                error={errors.cep}
                touched={touched.cep}
                placeholder='63685-000'
                value={values.cep}
                onChange={handleChange('cep')}
                onBlur={handleBlur('cep')}
                isHalf={2}
              />
              <InputLabel
                label='UF'
                error={errors.uf}
                touched={touched.uf}
                placeholder='CE'
                value={values.uf}
                onChange={handleChange('uf')}
                onBlur={handleBlur('uf')}
                isHalf={2}
              />
            </ContentRowLabels>

            <ContentRowLabels>
              <InputLabel
                label='Cidade'
                error={errors.cityName}
                touched={touched.cityName}
                placeholder='Quixadá'
                value={values.cityName}
                onChange={handleChange('cityName')}
                onBlur={handleBlur('cityName')}
                isHalf={1}
              />
            </ContentRowLabels>

            <ContentRowLabels>
              <InputLabel
                label='Bairro'
                error={errors.district}
                touched={touched.district}
                placeholder='Centro'
                value={values.district}
                onChange={handleChange('district')}
                onBlur={handleBlur('district')}
                isHalf={2}
              />
              <InputLabel
                label='Número'
                error={errors.adressNumber}
                touched={touched.adressNumber}
                placeholder='N° 299'
                value={values.adressNumber}
                onChange={handleChange('adressNumber')}
                onBlur={handleBlur('adressNumber')}
                isHalf={2}
              />
            </ContentRowLabels>

            <ContentRowLabels>
              <InputLabel
                label='Complemento'
                error={errors.adressComplement}
                touched={touched.adressComplement}
                placeholder='Sem complemento.'
                value={values.adressComplement}
                onChange={handleChange('adressComplement')}
                onBlur={handleBlur('adressComplement')}
                isHalf={1}
              />
            </ContentRowLabels>
            <S.ContentButtons>
              <ButtonSecondary
                type='button'
                name='Remover endereço'
                iconName={TrashSimple}
                onClick={() => navigate('/assisted')}
              />
              <div style={{ marginLeft: 30 }}>
                <ButtonPrimary
                  type='submit'
                  name='Editar conteúdo'
                  iconName={PencilSimpleLine}
                />
              </div>
            </S.ContentButtons>
          </Form>
        )}
      </Formik>
    </S.FormLogin>
  );
}

export default Adress;
