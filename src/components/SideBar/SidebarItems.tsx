import React from 'react';
import { FiHome, FiUsers, FiCalendar, FiUser } from 'react-icons/fi';

const SidebarItems = [
  {
    id: 0,
    name: 'Página inicial',
    route: '/home',
    iconName: <FiHome size={20} />,
  },
  {
    id: 1,
    name: 'Assistidos',
    route: '/assisted',
    iconName: <FiUsers size={20} />,
  },
  {
    id: 2,
    name: 'Eventos',
    route: '/events',
    iconName: <FiCalendar size={20} />,
  },
  {
    id: 3,
    name: 'Meu perfil',
    route: '/profile',
    iconName: <FiUser size={20} />,
  },
];

export default SidebarItems;
