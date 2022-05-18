import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi';

interface Props {
  active: boolean,
}

export const Container = styled.div`
  height: 100vh;
  position: fixed;
  display: flex;
  box-shadow: inset 0 0 1em gold, 0 0 1em rgba(0, 0, 1, 0.123);
`;

export const ContainerAside = styled.aside`
  width: 16rem;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

export const ImgLogo = styled.img`
  width: 12rem;
`;

export const ContainerLogo = styled.div`
  display: flex;
  margin: 30px 0 80px 0;
  justify-content: center;
  align-items: center;
`;

export const NavLinkItens = styled.div<Props>`
  display: flex;
  height: 50px;
  min-width: 90%;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 5px;
  align-items: center;
  transition: all 0.25s ease-in-out;
  background-color: ${props => props.active ? "#F4F5F5" : ""};

  &:hover {
    background-color: var(--navigationHoverSideBar);
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  height: 50px;
  min-width: 90%;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 5px;
  justify-content: row;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  margin-bottom: 30px;
`;

export const IconLink = styled.div`
  color: var(--textColor500);
  margin-left: 15px;
`;

export const IconFiLogOut = styled(FiLogOut)`
  color: var(--textColor500);
  margin-left: 15px;
`;

export const TextIcons = styled.p`
  margin-left: 8px;
  margin-top: 1px;
  color: var(--textColor500);
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 20px;
  background-color: var(--textColor100);
`;

export const ContainerBottom = styled.footer`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;








