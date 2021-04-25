import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './constants/routes';
import Login from './pages/Login';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
