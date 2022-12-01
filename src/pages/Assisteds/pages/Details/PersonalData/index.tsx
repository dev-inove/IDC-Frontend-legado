// Import de pacotes de dependencias
import * as Yup from 'yup';
import { validateCPF } from 'validations-br';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { PencilSimpleLine, TrashSimple } from 'phosphor-react';

// Import componentes
import InputLabel from '~/components/Inputs/InputLabel';
import InputLabelDate from '~/components/Inputs/InputLabelDate';
import InputLabelCivilStatus from '~/components/Inputs/InputLabelCivilStatus';
import InputLabelGender from '~/components/Inputs/InputLabelGender';
import InputDegreeDisability from '~/components/Inputs/InputDegreeDisability';
import InputLabelPhone from '~/components/Inputs/InputLabelPhone';
import InputLabelRGEmissionDate from '~/components/Inputs/InputLabelRGEmissionDate';
import ButtonPrimary from '~/components/ButtonPrimary';
import ButtonSecondary from '~/components/ButtonSecondary';
// Import estilos e icones
import * as S from '../styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  socialName: Yup.string().min(2, 'Digite pelo menos 2 caracteres'),
  date: Yup.date().required('Data de nascimento obrigatória'),
  civilState: Yup.string().required('Estado civil é obrigatório'),
  sex: Yup.string().required('O sexo é obrigatório'),
  nationality: Yup.string().required('Obrigatório'),
  naturalness: Yup.string().required('Obrigatório'),
  degreeDisability: Yup.string().required(
    'O grau de deficiência é obrigatório'
  ),
  phone: Yup.number()
    .integer('Número invalido')
    .min(9, 'O formato do número é inválido')
    .required('O número é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('O e-mail é obrigatório'),
  RG: Yup.number()
    .typeError('Apenas números')
    .integer('Número invalido')
    .required('O RG é obrigatório'),
  RGDispatcher: Yup.string().max(3, 'Max 3').required('*'),
  RGEmissionDate: Yup.date().required('*'),
  CPF: Yup.string()
    .typeError('Apenas números')
    .test('is-cpf', 'CPF não é valido', (value) => validateCPF(value as string))
    .required('O CPF é obrigatório'),
});

function PersonalData() {
  const assistedInfo = {
    name: '',
    socialName: '',
    date: '',
    civilState: '',
    sex: '',
    nationality: '',
    naturalness: '',
    degreeDisability: '',
    phone: '',
    email: '',
    RG: '',
    RGDispatcher: '',
    RGEmissionDate: '',
    CPF: '',
  };

  function onSubmitHandler(values: any) {
    console.log(values);
  }

  const navigate = useNavigate();

  return (
    <S.FormLogin>
      <Formik
        initialValues={assistedInfo}
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
            <InputLabel
              label='Nome completo'
              error={errors.name}
              touched={touched.name}
              placeholder='Lucas Pereira Silva'
              value={values.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              isHalf={1}
            />

            <InputLabel
              label='Nome social'
              error={errors.socialName}
              touched={touched.socialName}
              placeholder='Lucas'
              value={values.socialName}
              onChange={handleChange('socialName')}
              onBlur={handleBlur('socialName')}
              isHalf={1}
            />

            <InputLabelDate
              label='Data de nascimento'
              error={errors.date}
              touched={touched.date}
              isHalf={1}
              placeholder='dd/mm/aaaa'
            />

            <S.ContentRowLabels>
              <InputLabelCivilStatus label='Estado civil' />
              <InputLabelGender label='Sexo' />
            </S.ContentRowLabels>

            <S.ContentRowLabels>
              <InputLabel
                label='Nacionalidade'
                error={errors.nationality}
                touched={touched.nationality}
                placeholder='Brasileiro'
                value={values.nationality}
                onChange={handleChange('nationality')}
                onBlur={handleBlur('nationality')}
                isHalf={2}
              />
              <InputLabel
                label='Naturalidade'
                error={errors.naturalness}
                touched={touched.naturalness}
                placeholder='Cearense'
                value={values.naturalness}
                onChange={handleChange('naturalness')}
                onBlur={handleBlur('naturalness')}
                isHalf={2}
              />
            </S.ContentRowLabels>

            <InputDegreeDisability label='Grau de deficiência visual' />

            <InputLabelPhone
              label='Número de telefone'
              error={errors.phone}
              touched={touched.phone}
              onChange={handleChange('phone')}
              onBlur={handleBlur('phone')}
            />

            <InputLabel
              label='Email'
              error={errors.email}
              touched={touched.email}
              placeholder='lucas@gmail.com'
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              isHalf={1}
            />

            <S.ContentRowLabels>
              <InputLabel
                label='RG'
                error={errors.RG}
                touched={touched.RG}
                placeholder='91837618202-1'
                value={values.RG}
                onChange={handleChange('RG')}
                onBlur={handleBlur('RG')}
                isHalf={3}
              />
              <InputLabel
                label='Expeditor'
                error={errors.RGDispatcher}
                touched={touched.RGDispatcher}
                placeholder='SSP'
                value={values.RGDispatcher}
                onChange={handleChange('RGDispatcher')}
                onBlur={handleBlur('RGDispatcher')}
                isHalf={3}
              />

              <InputLabelRGEmissionDate
                label='Data de emissão'
                error={errors.RGEmissionDate}
                touched={touched.RGEmissionDate}
                isHalf={3}
                placeholder='dd/mm/aaaa'
              />
            </S.ContentRowLabels>

            <InputLabel
              label='CPF'
              error={errors.CPF}
              touched={touched.CPF}
              placeholder='912.116.431-91'
              value={values.CPF}
              onChange={handleChange('CPF')}
              onBlur={handleBlur('CPF')}
              isHalf={1}
            />

            <S.ContentButtons>
              <ButtonSecondary
                type='button'
                name='Cancelar'
                iconName={TrashSimple}
                onClick={() => navigate('/assisted')}
              />
              <div style={{ marginLeft: 30 }}>
                <ButtonPrimary type='submit' name='Concluir Edição' iconName={PencilSimpleLine} />
              </div>
            </S.ContentButtons>
          </Form>
        )}
      </Formik>
    </S.FormLogin>
  );
}
export default PersonalData;
