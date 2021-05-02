import axios, { AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';
import { AuthResponse, LoginInput, SignupInput } from './types';

axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true;

// 서버로부터 access token을 받았을 때,
//  1. authorization header로 설정하고
//  2. token 만료 1분 전에 refresh endpoint를 hit하는 로직
const onAccessTokenReceived = (res: AxiosResponse<AuthResponse>) => {
  const { accessToken, user } = res.data;

  axios.defaults.headers.common['Authorization'] = accessToken;

  const { exp } = jwtDecode<{ exp: number }>(accessToken);

  // decode된 exp(만료시각)은 초단위이기 때문에 1000을 곱해서 밀리세컨드로 만듦
  setTimeout(refreshToken, exp * 1000 - new Date().getTime() - 60 * 1000);

  return user;
};

const refreshToken = () =>
  axios.get<AuthResponse>('/auth/refresh').then(onAccessTokenReceived);

const login = (loginInput: LoginInput) =>
  axios
    .post<AuthResponse>('/auth/login', loginInput)
    .then(onAccessTokenReceived);

const signup = (signupInput: SignupInput) =>
  axios
    .post<AuthResponse>('/auth/signup', signupInput)
    .then(onAccessTokenReceived);

const logout = () => axios.get('/auth/logout');

export const api = {
  refreshToken,
  login,
  signup,
  logout,
};
