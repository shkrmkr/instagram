import React, { useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AuthRoute } from './components/AuthRoute';
import ROUTES from './constants/routes';
import { FeedPage } from './pages/Feed.page';
import { LoginPage } from './pages/Login.page';
import { NotFoundPage } from './pages/NotFound.page';
import { PostPage } from './pages/Post.page';
import { ProfilePage } from './pages/Profile.page';
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

  const previousLocation = useRef(useLocation<{ modal?: boolean }>());
  const location = useLocation<{ modal?: boolean }>();

  useEffect(() => {
    if (!location.state?.modal) {
      previousLocation.current = location;
    }
  }, [location]);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  const isModal =
    location.state?.modal && previousLocation.current !== location;

  if (isRefreshing) {
    return null;
  }

  return (
    <>
      <Switch location={isModal ? previousLocation.current : location}>
        {user === null ? (
          <Route path={ROUTES.HOME} exact component={WelcomePage} />
        ) : (
          <Route path={ROUTES.HOME} exact component={FeedPage} />
        )}
        <AuthRoute path={ROUTES.LOGIN} component={LoginPage} />
        <AuthRoute path={ROUTES.SIGNUP} component={SignupPage} />

        <Route path={ROUTES.POST} component={PostPage} />
        <Route path={ROUTES.PROFILE} component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      {isModal && <Route path={ROUTES.POST} component={PostPage} />}
    </>
  );
};
