import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '~/assets/images/logo.svg';

import items from './items';
import * as S from './styles';

function SideBar() {
  const { pathname } = useLocation();

  const lastActiveIndexString = localStorage.getItem('lastActiveIndex');
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || undefined);

  function changeActiveIndex(newIndex: any) {
    localStorage.setItem('lastActiveIndex', newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path: string) {
    if (path.charAt(0) !== '/') {
      return `/${path}`;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = items.findIndex(
      (item) => getPath(item.route) === getPath(pathname)
    );
    changeActiveIndex(activeItem);
  }, [pathname]);

  return (
    <S.Container>
      <S.ContainerAside>
        <S.ContainerLogo>
          <S.ImgLogo src={Logo} alt='Logo' />
        </S.ContainerLogo>
        <S.ContainerHeader>
          {items.map((item, index) => (
            <S.NavLink to={item.route} key={item.id}>
              <S.NavLinkItens active={index === activeIndex}>
                <S.IconLink>{item.iconName}</S.IconLink>
                <S.TextIcons>{item.name}</S.TextIcons>
              </S.NavLinkItens>
            </S.NavLink>
          ))}
        </S.ContainerHeader>
        <S.ContainerBottom>
          <S.Line />
          <S.NavLink to='/'>
            <S.IconFiLogOut size={20} />
            <S.TextIcons>Sair</S.TextIcons>
          </S.NavLink>
        </S.ContainerBottom>
      </S.ContainerAside>
    </S.Container>
  );
}

export default SideBar;
