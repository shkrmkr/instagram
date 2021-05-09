import React, { ComponentType } from 'react';
import { Redirect, Route } from 'react-router';
import ROUTES from '../constants/routes';
import { useAuthStore } from '../store/auth.store';

interface Props {
  component: ComponentType<any>;
  path: string;
  exact?: boolean;
}

export const AuthRoute = (props: Props) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Route {...props} />;
  }

  return <Redirect to={ROUTES.HOME} />;
};
