import React, { useState } from 'react';
import { StyledContainer } from '../components/StyledContainer';
import { AuthModeSwitcher } from './shared/AuthModeSwitcher';
import { Login } from './shared/Login';
import { ScreenshotShowcase } from './shared/ScreenshotShowcase';
import { StyledAuthFormContainer } from './shared/sharedStyles';
import { Signup } from './shared/Signup';

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
