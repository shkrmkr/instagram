import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './constants/routes';
import { Dashboard } from './pages/Dashboard.page';
import { Welcome } from './pages/Welcome.page';
import { useAuthStore } from './store/auth.store';

export const App = () => {
  const { user, refreshToken, isLoading } = useAuthStore(
    ({ user, refreshToken, isLoading }) => ({
      user,
      refreshToken,
      isLoading,
    }),
  );

  useEffect(() => {
    refreshToken().catch();
  }, [refreshToken]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        {user === null ? (
          <Route path={ROUTES.HOME} exact component={Welcome} />
        ) : (
          <Route path={ROUTES.HOME} exact component={Dashboard} />
        )}
      </Switch>
    </BrowserRouter>
  );
};
