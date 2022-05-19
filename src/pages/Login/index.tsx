import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Formik, Form } from 'formik';
import { EnvelopeSimple, LockSimple } from 'phosphor-react';
import * as Yup from 'yup';

import Logo from '~/assets/images/logo.svg';
import Banner from '~/assets/images/banner_login.svg';

import * as S from './styles';

interface InfoLogin {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});

function Login() {
  const navigate = useNavigate();

  const loginInfo = {
    email: '',
    password: '',
  };

  function onSubmit(values: InfoLogin) {
    navigate('/home');
  }

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Welcome>
          <S.ImgLogo src={Logo} alt='Logo' />
          <S.WelcomeText>Bem-vindo</S.WelcomeText>
        </S.Welcome>
        <S.FormLogin>
          <S.Line />

          <Formik
            initialValues={loginInfo}
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
            }) => {
              const { email, password } = values;
              return (
                <Form>
                  <S.FormInput>
                    <S.ContainerTextInput>
                      <S.LabelInput>Digite seu email</S.LabelInput>
                      {errors.email && touched.email ? (
                        <S.LabelInputAlert>{errors.email}</S.LabelInputAlert>
                      ) : null}
                    </S.ContainerTextInput>
                    <S.ContentInput>
                      <EnvelopeSimple
                        size={22}
                        weight='regular'
                        style={{
                          position: 'absolute',
                          left: 10,
                          top: 8,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#999999',
                        }}
                      />
                      <S.Input
                        type='email'
                        placeholder='Ex: nome@gmail.com'
                        value={email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                      />
                    </S.ContentInput>
                  </S.FormInput>

                  <S.FormInput>
                    <S.ContainerTextInput>
                      <S.LabelInput>Digite sua senha</S.LabelInput>
                      {errors.password && touched.password ? (
                        <S.LabelInputAlert>{errors.password}</S.LabelInputAlert>
                      ) : null}
                    </S.ContainerTextInput>
                    <S.ContentInput>
                      <LockSimple
                        size={22}
                        weight='regular'
                        style={{
                          position: 'absolute',
                          left: 10,
                          top: 8,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#999999',
                        }}
                      />
                      <S.Input
                        type='password'
                        placeholder='Ex: 123456'
                        value={password}
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                      />
                    </S.ContentInput>
                  </S.FormInput>

                  <S.RecoverPassword>
                    <div style={{ margin: 0 }}>
                      <S.CheckBox defaultChecked id='c1'>
                        <CheckboxPrimitive.Indicator>
                          <CheckIcon />
                        </CheckboxPrimitive.Indicator>
                      </S.CheckBox>

                      <S.LabelRemember>Lembrar de mim</S.LabelRemember>
                    </div>
                    <div style={{ margin: 2 }}>
                      <S.ForgotPassword href='#'>
                        Esqueceu sua senha?
                      </S.ForgotPassword>
                    </div>
                  </S.RecoverPassword>
                  <S.ButtonLogin type='submit'>
                    <S.TextButtonLogin>Entrar</S.TextButtonLogin>
                  </S.ButtonLogin>
                </Form>
              );
            }}
          </Formik>
        </S.FormLogin>
      </S.ContainerInfo>
      <S.ContainerLogo>
        <S.ImgBanner src={Banner} alt='Banner' />
      </S.ContainerLogo>
    </S.Container>
  );
}

export default Login;
