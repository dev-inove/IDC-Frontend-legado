import styled from 'styled-components';

export const InfoHeaderText = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 47px;
  margin-bottom: 25px;
  color: #323232;
  min-width: 165px;
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
  }
`;

// --------- container dos cards de informações ----------------------
export const ContainerCardsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  height: 9rem;
  @media (max-width: 1080px) {
    align-content: space-between;
    flex-direction: column;
    height: 14rem;
  }
`;

export const CounterStyle = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 5.75rem;
  line-height: 126px;
  color: #ef6d1f;
  margin-right: 15px;
  @media (max-width: 1366px) {
    font-size: 4.5rem;
  }
  @media (max-width: 1280px) {
    font-size: 4rem;
  }
  @media (max-width: 1150px) {
    font-size: 3.85rem;
  }
  @media (max-width: 1080px) {
    font-size: 4.25rem;
  }
  @media (max-width: 846px) {
    font-size: 4rem;
  }
  @media (max-width: 720px) {
    font-size: 3.8rem;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 10rem;
  width: 49%;
  min-width: 454px;
  min-height: 96px;
  background-color: #ffffff;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1366px) {
    min-width: auto;
    height: 9rem;
  }
  @media (max-width: 1280px) {
    height: 8rem;
  }
  @media (max-width: 1150px) {
    height: 7rem;
  }
  @media (max-width: 1080px) {
    width: 100%;
    height: 4rem;
    padding: 3rem 0;
    min-width: 484px;
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
  max-width: 135px;
  height: 64px;
  line-height: 32px;
  font-size: 1.275rem;
  color: #666666;
  @media (max-width: 1366px) {
    font-size: 1.25rem;
  }
  @media (max-width: 1280px) {
    font-size: 1.1rem;
    margin-right: 5px;
  }
  @media (max-width: 1150px) {
    font-size: 1rem;
  }

  @media (max-width: 1080px) {
    font-size: 1rem;
  }
  @media (max-width: 720px) {
    font-size: 0.9rem;
    margin-right: 0px;
  }
`;

export const InforCardImage = styled.img`
  max-width: 100%;
  min-width: 5rem;
  height: 100%;
  min-height: 50px;
  @media (max-width: 1366px) {
    width: 90%;
  }
  @media (max-width: 1280px) {
    width: 75%;
  }
`;
