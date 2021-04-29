const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/',
  SIGN_UP: '/signup',
  PROFILE: '/p/:username',
  NOT_FOUND: '/not-found',
} as const;

export default ROUTES;
