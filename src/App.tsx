import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute } from './components/AuthRoute';
import ROUTES from './constants/routes';
import { FeedPage } from './pages/Feed.page';
import { LoginPage } from './pages/Login.page';
import { NotFoundPage } from './pages/NotFound.page';
import { SignupPage } from './pages/Signup.page';
import { WelcomePage } from './pages/Welcome.page';
import { useAuthStore } from './store/auth.store';

export const App = () => {
  const { user, refreshToken, isRefreshing } = useAuthStore(
    ({ user, refreshToken, isRefreshing }) => ({
      user,
      refreshToken,
      isRefreshing,
    }),
  );

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  if (isRefreshing) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        {user === null ? (
          <Route path={ROUTES.HOME} exact component={WelcomePage} />
        ) : (
          <Route path={ROUTES.HOME} exact component={FeedPage} />
        )}
        <AuthRoute path={ROUTES.LOGIN} component={LoginPage} />
        <AuthRoute path={ROUTES.SIGNUP} component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
