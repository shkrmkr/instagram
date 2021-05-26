const ROUTES = {
  HOME: '/',
  PROFILE: '/:username',
  NOT_FOUND: '/not-found',
  SIGNUP: '/signup',
  LOGIN: '/login',
  POST: '/p/:postId',
} as const;

export default ROUTES;
