import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Plus, TrashSimple } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { validateCPF } from 'validations-br';
import Person from '~/assets/images/person.svg';
import InputLabel from '~/components/Inputs/InputLabel';
import InputLabelDate from '~/components/Inputs/InputLabelDate';
import InputLabelRGEmissionDate from '~/components/Inputs/InputLabelRGEmissionDate';
import InputLabelCivilStatus from '~/components/Inputs/InputLabelCivilStatus';
import InputLabelGender from '~/components/Inputs/InputLabelGender';
import InputLabelPhone from '~/components/Inputs/InputLabelPhone';
import InputDegreeDisability from '~/components/Inputs/InputDegreeDisability';
import { Button } from '~/components/Button/index';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './styles';

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
		.min(9, 'teste')
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
		.test('is-cpf', 'CPF não é valido', (value) =>
			validateCPF(value as string)
		)
		.required('O CPF é obrigatório'),
});

function Register() {
	const registerInfo = {
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

	const navigate = useNavigate();

	function onSubmit(values: any) {
		console.log(values);
	}

	return (
		// Div
		<S.RegisterPageContainer>
			<S.FormContainer>
				<S.Welcome>Cadastrar assistido</S.Welcome>
				<S.WelcomeParagraph>
					Preencha todos os campos abaixo para cadastrar uma pessoa.
				</S.WelcomeParagraph>
				<Formik
					initialValues={registerInfo}
					validationSchema={schema}
					onSubmit={onSubmit}
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
								<Button
									type='button'
									name='Cancelar'
									onClick={() => navigate('/assisted')}
								>
									<TrashSimple size={14} weight="bold" />
									Cancelar
								</Button>
								<div style={{ marginLeft: 30 }}>
									<Button
										property='primary'
										type='submit'
										name='Cadastrar'
									>
										<Plus size={14} weight="bold" />
										Cadastrar
									</Button>
								</div>
							</S.ContentButtons>
						</Form>
					)}
				</Formik>
			</S.FormContainer>
			<S.ImageContainer>
				<S.ImagePerson src={Person} />
			</S.ImageContainer>
		</S.RegisterPageContainer>
	);
}

export default Register;
