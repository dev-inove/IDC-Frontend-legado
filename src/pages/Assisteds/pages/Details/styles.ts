import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Tab, TabList } from 'react-tabs';
import * as Select from '@radix-ui/react-select';

export const Container = styled.div`
  height: 100%;
  margin-left: 16rem;
  overflow: hidden;
  overflow-x: hidden;
  min-width: 582.55px;
  padding: 50px 50px 50px 50px;
  :hover {
    overflow-x: auto;
    overflow-y: auto;
  }
  font-family: Poppins;
`;

export const Welcome = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 47px;
  color: var(--textColor500);
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const CustomTabList = styled(TabList).attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  min-width: auto;
  border-bottom: 1.5px solid var(--textColor200);
  margin-bottom: 30px;

  & .activeButton {
    color: var(--textColor500);
    transition: 10ms;
    border-bottom: 1.5px solid var(--textColor500);
  }
`;

export const MudarCor = styled.button`
  color: var(--textColor500);
  transition: 10ms;
  border-bottom: 1.5px solid var(--textColor500);
`;

export const CustomTab = styled(Tab)`
  text-decoration: none;
  font-size: 21px;
  font-weight: 400;
  line-height: 31px;
  color: var(--textColor200);
  display: inline;
  padding: 0 50px;
  background-color: var(--backgroundGrayContent);
  cursor: pointer;

  &:hover {
    transition: 10ms;
    border-bottom: 1.5px solid var(--textColor200);
  }

  &:focus-visible {
    outline: none;
  }
`;

export const activeButton = styled(Tab).attrs((props) => ({
  className: props.className,
}))``;

export const FormLogin = styled.div`
  width: 30rem;
`;

export const RelativesContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 21px;
`;

export const Text = styled.p`
  color: var(--textColor300);
  text-align: center;
  margin: 20px 0;

  & + p {
    margin-top: 10px;
  }
`;

export const StyledTrigger = styled(Select.SelectTrigger)`
  width: 12rem;
  background-color: var(--background);
  color: var(--textColor300);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
`;

export const StyledContent = styled(Select.Content)`
  overflow: hidden;
  background-color: var(--background);
  border-radius: 6px;
  padding: 5px;
`;

export const StyledItem = styled(Select.Item)`
  all: unset;
  font-size: 14px;
  line-height: 1.5;
  color: var(--textColor500);
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 5px;
  position: relative;

  &:focus {
    background-color: var(--primaryColorHover);
    color: var(--background);
    cursor: pointer;
  }
`;

export const ContentRowLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: end;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--textColor200);
  border-radius: 5px;
  height: 35px;
  width: 35px;
`;

export const IconLink = styled.div`
  color: var(--textColor300);
  font-size: 20px;
  &:hover {
    color: var(--textColor500);
    transition: 10ms;
  }
`;
