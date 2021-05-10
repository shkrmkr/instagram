import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from '../components/StyledContainer';
import ROUTES from '../constants/routes';
import {
  StyledAuthFormContainer,
  StyledAuthModeSwitcher,
} from './auth/sharedStyles';
import { Signup } from './auth/Signup';

export const SignupPage = () => {
  return (
    <StyledContainer>
      <StyledAuthFormContainer>
        <Signup />
        <StyledAuthModeSwitcher>
          <p>Have an account?</p>

          <Link to={ROUTES.LOGIN} className="mode-button">
            Log In
          </Link>
        </StyledAuthModeSwitcher>
      </StyledAuthFormContainer>
    </StyledContainer>
  );
};
