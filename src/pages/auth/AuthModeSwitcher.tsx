import React from 'react';
import { useAuthStore } from '../../store/auth.store';
import { StyledAuthModeSwitcher } from './sharedStyles';

interface Props {
  authMode: boolean;
  setAuthMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthModeSwitcher = ({ authMode, setAuthMode }: Props) => {
  const { resetAuthState } = useAuthStore();

  return (
    <StyledAuthModeSwitcher>
      {authMode ? <p>Don&apos;t have an account?</p> : <p>Have an account?</p>}

      <button
        className="mode-button"
        onClick={() => {
          setAuthMode((prev) => !prev);
          resetAuthState();
        }}
      >
        {authMode ? 'Sign Up' : 'Log In'}
      </button>
    </StyledAuthModeSwitcher>
  );
};
