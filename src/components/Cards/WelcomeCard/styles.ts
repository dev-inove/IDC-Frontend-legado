import styled from 'styled-components';

export const ContainerCardWelcome = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 10rem;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 1366px) {
    height: 12rem;
  }
  @media (max-width: 1080px) {
    height: 11rem;
  }
`;

export const ContainerCardWelcomeText = styled.div`
  display: flex;
  width: 50rem;
  word-wrap: break-word;
  flex-direction: column;
  align-content: space-between;
  align-self: center;
  margin-left: 2.5rem;

  @media (max-width: 1366px) {
    width: auto;
  }
`;

export const ContainerCardWelcomeImage = styled.div`
  margin-right: 2rem;
  margin-left: 2rem;
  justify-content: center;
`;

export const CardWelcomeImage = styled.img`
  width: 14rem;
  min-width: 10rem;
  height: 100%;
  min-height: 50px;
  padding: 1em 0;

  @media (max-width: 1366px) {
    width: 15rem;
  }
  @media (max-width: 1080px) {
    width: 13rem;
  }
`;

export const CardWelcomeHeaderText = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 2.2rem;
  width: 17.5rem;

  letter-spacing: 0.01em;

  color: #323232;

  @media (max-width: 1366px) {
    width: 14.5rem;
    font-size: 2.5rem;
  }

  @media (max-width: 1080px) {
    width: 11.5rem;
    font-size: 2rem;
  }
  @media (max-width: 846px) {
    font-size: 1.9rem;
  }
  @media (max-width: 720px) {
    font-size: 1.95rem;
  }
`;

export const CardWelcomeText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: auto;
  letter-spacing: 0.01em;
  max-width: 47rem;

  color: #666666;

  @media (max-width: 1366px) {
    max-width: 39rem;
    font-size: 1.25rem;
  }
  @media (max-width: 1080px) {
    max-width: 34rem;
    font-size: 1rem;
  }

  @media (max-width: 846px) {
    font-size: 0.9rem;
  }
  @media (max-width: 720px) {
    font-size: 0.95rem;
  }
`;
