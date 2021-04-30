import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './constants/routes';
import { Welcome } from './pages/Welcome.page';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} exact component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
};
