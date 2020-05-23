import React from 'react';
import { useSelector } from 'react-redux';

import Chat from './pages/Chat';
import Login from './pages/Login';

import { IApplicationState } from './store';

const Routes = () => {
  const signed = useSelector((state: IApplicationState) => state.auth.signed);

  return <>{signed ? <Chat /> : <Login />}</>;
};

export default Routes;
