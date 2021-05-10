import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from '../components/StyledContainer';
import ROUTES from '../constants/routes';
import { Login } from './auth/Login';
import {
  StyledAuthFormContainer,
  StyledAuthModeSwitcher,
} from './auth/sharedStyles';

export const LoginPage = () => {
  return (
    <StyledContainer>
      <StyledAuthFormContainer>
        <Login />
        <StyledAuthModeSwitcher>
          <p>Don&apos;t have an account?</p>

          <Link to={ROUTES.SIGNUP} className="mode-button">
            Sign Up
          </Link>
        </StyledAuthModeSwitcher>
      </StyledAuthFormContainer>
    </StyledContainer>
  );
};
