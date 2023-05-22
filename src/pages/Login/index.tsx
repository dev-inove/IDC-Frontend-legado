import { useNavigate } from 'react-router-dom';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Formik, Form } from 'formik';
import { EnvelopeSimple, LockSimple } from 'phosphor-react';
import * as Yup from 'yup';

import Logo from '~/assets/images/logo.svg';
import Banner from '~/assets/images/banner_login.svg';

import * as styles from './styles';

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
    <styles.Container>
      <styles.ContainerInfo>
        <styles.Welcome>
          <styles.ImgLogo src={Logo} alt='Logo' />
          <styles.WelcomeText>Bem-vindo</styles.WelcomeText>
        </styles.Welcome>
        <styles.FormLogin>
          <styles.Line />

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
                  <styles.FormInput>
                    <styles.ContainerTextInput>
                      <styles.LabelInput>Digite seu email</styles.LabelInput>
                      {errors.email && touched.email ? (
                        <styles.LabelInputAlert>{errors.email}</styles.LabelInputAlert>
                      ) : null}
                    </styles.ContainerTextInput>
                    <styles.ContentInput>
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
                      <styles.Input
                        type='email'
                        placeholder='Ex: nome@gmail.com'
                        value={email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                      />
                    </styles.ContentInput>
                  </styles.FormInput>

                  <styles.FormInput>
                    <styles.ContainerTextInput>
                      <styles.LabelInput>Digite sua senha</styles.LabelInput>
                      {errors.password && touched.password ? (
                        <styles.LabelInputAlert>{errors.password}</styles.LabelInputAlert>
                      ) : null}
                    </styles.ContainerTextInput>
                    <styles.ContentInput>
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
                      <styles.Input
                        type='password'
                        placeholder='Ex: 123456'
                        value={password}
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                      />
                    </styles.ContentInput>
                  </styles.FormInput>

                  <styles.RecoverPassword>
                    <div style={{ margin: 0 }}>
                      <styles.CheckBox defaultChecked id='c1'>
                        <CheckboxPrimitive.Indicator>
                          <CheckIcon />
                        </CheckboxPrimitive.Indicator>
                      </styles.CheckBox>

                      <styles.LabelRemember>Lembrar de mim</styles.LabelRemember>
                    </div>
                    <div style={{ margin: 2 }}>
                      <styles.ForgotPassword href='#'>
                        Esqueceu sua senha?
                      </styles.ForgotPassword>
                    </div>
                  </styles.RecoverPassword>
                  <styles.LoginButton property='primary'>
                    Entrar
                  </styles.LoginButton>
                </Form>
              );
            }}
          </Formik>
        </styles.FormLogin>
      </styles.ContainerInfo>
      <styles.ContainerLogo>
        <styles.ImgBanner src={Banner} alt='Banner' />
      </styles.ContainerLogo>
    </styles.Container>
  );
}

export default Login;
