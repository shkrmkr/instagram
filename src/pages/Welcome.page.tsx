import React, { useState } from 'react';
import { StyledContainer } from '../components/StyledContainer';
import { AuthModeSwitcher } from './auth/AuthModeSwitcher';
import { Login } from './auth/Login';
import { ScreenshotShowcase } from './auth/ScreenshotShowcase';
import { StyledAuthFormContainer } from './auth/sharedStyles';
import { Signup } from './auth/Signup';

export const WelcomePage = () => {
  // true => login mode
  // false => signup mode
  const [authMode, setAuthMode] = useState(true);

  return (
    <StyledContainer>
      <ScreenshotShowcase />

      <StyledAuthFormContainer>
        {authMode ? <Login /> : <Signup />}
        <AuthModeSwitcher authMode={authMode} setAuthMode={setAuthMode} />
      </StyledAuthFormContainer>
    </StyledContainer>
  );
};
