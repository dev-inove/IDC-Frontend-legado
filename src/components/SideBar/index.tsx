import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '~/assets/images/logo.svg';

import items from './items';
import * as styles from './styles';

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
    <styles.Container>
      <styles.ContainerAside>
        <styles.ContainerLogo>
          <styles.ImgLogo src={Logo} alt='Logo' />
        </styles.ContainerLogo>
        <styles.ContainerHeader>
          {items.map((item, index) => (
            <styles.NavLink to={item.route} key={item.id}>
              <styles.NavLinkItens active={index === activeIndex}>
                <styles.IconLink>{item.iconName}</styles.IconLink>
                <styles.TextIcons>{item.name}</styles.TextIcons>
              </styles.NavLinkItens>
            </styles.NavLink>
          ))}
        </styles.ContainerHeader>
        <styles.ContainerBottom>
          <styles.Line />
          <styles.NavLink to='/'>
            <styles.IconFiLogOut size={20} />
            <styles.TextIcons>Sair</styles.TextIcons>
          </styles.NavLink>
        </styles.ContainerBottom>
      </styles.ContainerAside>
    </styles.Container>
  );
}

export default SideBar;
