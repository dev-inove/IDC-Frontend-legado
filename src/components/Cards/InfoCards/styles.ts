import styled from 'styled-components';

export const InfoHeaderText = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 47px;
  margin-bottom: 25px;
  margin-left: 5px;
  color: #323232;

  min-width: 165px;

  @media (max-width: 1366px) {
    font-size: 2.4rem;
  }

  @media (max-width: 1080px) {
    font-size: 1.9rem;
  }
  @media (max-width: 846px) {
    font-size: 1.8rem;
  }
  @media (max-width: 720px) {
    font-size: 1.75rem;
  }
`;

export const ContainerCardsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 1366px) {
    align-content: space-between;
    height: 19rem;
  }
  @media (max-width: 1080px) {
    align-content: space-between;
    flex-direction: column;
    height: 18rem;
  }
`;

export const CounterStyle = styled.span`
  font-family: 'Rubik', sans-serif;

  font-style: normal;
  font-weight: 700;
  font-size: 6rem;
  line-height: 126px;
  color: #ef6d1f;

  margin-right: 15px;

  @media (max-width: 1366px) {
    font-size: 6.5rem;
  }

  @media (max-width: 1080px) {
    font-size: 6rem;
  }
  @media (max-width: 846px) {
    font-size: 5.8rem;
  }
  @media (max-width: 720px) {
    font-size: 5.9rem;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 8rem;
  width: 49%;
  min-width: 484px;
  min-height: 96px;

  background-color: #ffffff;

  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1366px) {
    height: 9rem;
    width: 49%;
    padding: 1rem;
  }
  @media (max-width: 1080px) {
    height: 6rem;
    padding: 4rem 0;
  }
`;

export const ContainerInfoCardImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerInfoCardText = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InforCardText = styled.p`
  align-self: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  width: 135px;
  height: 64px;
  line-height: 32px;
  font-size: 1.325rem;

  color: #666666;

  @media (max-width: 1366px) {
    font-size: 1.5rem;
    width: 155px;
  }

  @media (max-width: 1080px) {
    font-size: 1.3rem;
    width: 125px;
  }
  @media (max-width: 720px) {
    font-size: 1.2rem;
    width: 110px;
  }
`;

export const InforCardImage = styled.img`
  max-width: 90%;
  min-width: 5rem;
  height: 100%;
  min-height: 50px;

  @media (max-width: 1366px) {
    width: 90%;
  }

  @media (max-width: 1080px) {
    width: 75%;
  }
`;
