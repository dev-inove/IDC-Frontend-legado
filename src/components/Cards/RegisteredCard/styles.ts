import styled from 'styled-components';

export const ContainerRegisteredCard = styled.div`
display: flex;
flex-direction: column;
width: 100%;`

export const RegisteredHeaderText = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 2rem;
line-height: 47px;
margin-top: 15px;
color: #323232;
  @media (max-width: 1366px) {
    font-size: 2.4rem;
  }
  @media (max-width: 1280px) {
    font-size: 2rem;
  }
  @media (max-width: 1150px) {
    font-size: 1.9rem;
  }
  @media (max-width: 1080px) {
    font-size: 1.8rem;
  }
  @media (max-width: 846px) {
    font-size: 1.7rem;
  }
  @media (max-width: 720px) {
    font-size: 1.55rem;
  }`

  export const RegisteredNavBar = styled.div`
  display: flex;
  border-bottom: 1px solid var(--textColor100);
  flex-direction: row;
  gap: 75px;
  justify-content: flex-start;
  margin-top: 15px;`

  export const RegisteredButton = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  color: var(--textGray);
  display: flex;
  font-family: 'Poppins';
  font-size: 21px;
  font-weight: 400;
  padding: 10px 0;
  width: 110px;`

  export const seeMore = styled.button`
  color: var(--primaryColor);
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 21px;
  font-weight: 500;
  padding-top: 20px;
  &:hover {
    color: var(--primaryColorHover);
  }`;