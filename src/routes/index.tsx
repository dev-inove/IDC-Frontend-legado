import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from '~/pages/Login/index';
import Home from '~/pages/Home/index';
import Assisted from '~/pages/Assisteds/index';
import AssistedRegister from '~/pages/Assisteds/pages/Register';
import Events from '~/pages/Events/index';
import Profile from '~/pages/Profile/index';
import Sidebar from '~/components/SideBar/index';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
    <Sidebar />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/assisted' element={<Assisted />} />
      <Route path='/assistedRegister' element={<AssistedRegister />} />
      <Route path='/events' element={<Events />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
export default routes;
