import styled from 'styled-components';
import { IoMailOutline } from "react-icons/io5";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media(max-width: 950px) {
    flex-direction: column;
  }

`;

export const ContainerInfo = styled.div`
  width: 50%;
  min-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8%;
  flex-direction: column;

  @media(max-width: 950px) {
    width: 100%;
    margin-top: 30%;
  }

  @media(max-width: 820px) {
    margin-top: 40%;
    min-width: 400px;
  }

  @media(max-width: 600px) {
    margin-top: 50%;
  }

  @media(max-width: 480px) {
    margin-top: 65%;
  }

  @media(max-width: 400px) {
    margin-top: 70%;
  }

  @media(max-width: 340px) {
    margin-top: 85%;
  }

`;

export const ContainerLogo = styled.div`
  width: 50%;
  background-color: var(--secondColor);

  @media(max-width: 950px) {
    width: 100%;
    position: fixed;
  }

  @media(max-width: 620px) {
    width: 100%;
  }

  @media(max-width: 560px) {
    width: 100%;
  }

`;

export const ImgBanner = styled.img`
  width: 80%;
  margin: 0 10%;
  justify-content: center;
  align-items: center;
  height: 99vh;

  @media(max-width: 950px) {
    height: 25vh;
  }

  @media(max-width: 620px) {
    max-height: 500px;
  }
`;

export const Welcome = styled.div`
  width: 400px;
  margin-top: 30px;

  @media(max-width: 500px) {
    width: 70%;
  }
`;

export const ImgLogo = styled.img`
`;

export const Line = styled.hr`
  display: block;
  width: 400px;
  height: 1.5px;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin: 1em 0;
  padding: 0;

  @media(max-width: 500px) {
    width: 100%;
  }
`;

export const FormLogin = styled.div`
  width: 400px;

  @media(max-width: 500px) {
    width: 70%;
  }
`;

export const FormInput = styled.div`
  text-align: left;
`;

export const ContainerTextInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LabelInput = styled.label`
  display: block;
  margin-bottom: 5px;
  color: var(--textColor300);
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const LabelInputAlert = styled.label`
  display: block;
  margin-bottom: 5px;
  color: var(--primaryColor);
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
`;

export const Input = styled.input`
  width: 400px;
  background-color: var(--backgroundGray);
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid var(--borderInput);
  border-radius: 5px;
  transition: 0.3s;
  ::-webkit-input-placeholder {
    color: var(--textColor100);
  }

  @media(max-width: 500px) {
    width: 100%;
  }
`;

export const WelcomeText = styled.h1`
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 2px;
  margin-top: 30px;
  margin-bottom: 5px;
  color: var(--textColor500);

  @media(max-width: 480px) {
    font-size: 35px;
  }
`;

export const IconEmail = styled(IoMailOutline)`
  font-size: 25px;
  display: flex;
`;

export const LabelRemember = styled.label`
  margin-left: 8px;
  color: var(--textColor300);
  font-weight: normal;
  font-size: 14px;
`;

export const RecoverPassword = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ForgotPassword = styled.a`
  text-decoration: none;
  font-weight: normal;
  font-size: 14px;
  color: var(--primaryColor);
  :hover {
    color: var(--primaryColorHover);
  }

  @media(max-width: 500px) {
    margin-top: 4px;
  }
`;

export const CheckBox = styled(CheckboxPrimitive.Root)`
  background-color: #FFF;
  color: var(--primaryColor);
  border-color: var(--textColor100);
  border-radius: 5px;
  width: 20px;
  height: 20px;
`;

export const ButtonLogin = styled.button`
  min-width: 100%;
  height: 50px;
  margin-top: 40px;
  border-radius: 40px;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColor);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: 0.7s;
  :hover {
    background-color: var(--primaryColorHover);
  }
`;

export const TextButtonLogin = styled.h4`
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: var(--background);
`;




