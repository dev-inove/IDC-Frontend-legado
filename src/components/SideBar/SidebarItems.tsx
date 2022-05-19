import React from 'react';
import { House, Users, CalendarPlus, User } from 'phosphor-react';

const SidebarItems = [
  {
    id: 0,
    name: 'Página inicial',
    route: '/home',
    iconName: <House size={22} weight='regular' />,
  },
  {
    id: 1,
    name: 'Assistidos',
    route: '/assisted',
    iconName: <Users size={22} weight='regular' />,
  },
  {
    id: 2,
    name: 'Eventos',
    route: '/events',
    iconName: <CalendarPlus size={22} weight='regular' />,
  },
  {
    id: 3,
    name: 'Meu perfil',
    route: '/profile',
    iconName: <User size={20} weight='regular' />,
  },
];

export default SidebarItems;
