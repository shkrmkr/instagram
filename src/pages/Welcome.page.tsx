import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import logoImg from '../../asset/images/logo.png';
import { StyledContainer } from '../components/StyledContainer';
import { Login } from './welcome/Login';
import { ScreenshotShowcase } from './welcome/ScreenshotShowcase';
import { Signup } from './welcome/Signup';

export const Welcome = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <StyledContainer>
      <ScreenshotShowcase />

      <StyledWelcomeForm>
        <div className="top">
          <h1>
            <img src={logoImg} alt="Instagram" />
          </h1>

          {isLoginMode ? <Login /> : <Signup />}
        </div>

        <div className="bottom">
          {isLoginMode ? (
            <p>Don&apos;t have an account?</p>
          ) : (
            <p>Have an account?</p>
          )}
          <button
            className="mode-button"
            onClick={() => setIsLoginMode((prev) => !prev)}
          >
            {isLoginMode ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </StyledWelcomeForm>
    </StyledContainer>
  );
};

const StyledWelcomeForm = styled.div`
  h1 img {
    width: 175px;
  }

  .top,
  .bottom {
    ${({ theme }) => css`
      background-color: ${theme.colors.common.white};
      border: 1px solid ${theme.colors.common.grey};
      border-radius: ${theme.borderRadius.sm};
    `};
    width: 35rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top {
    padding: 4rem 4rem 2rem;
    margin-bottom: 1rem;
    flex-direction: column;
  }

  .bottom {
    padding: 2rem;
    font-size: 1.4rem;
  }

  .mode-button {
    border: none;
    background-color: transparent;
    font: inherit;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    padding: 0 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    border: none;
    background-color: ${({ theme }) => theme.colors.common.offWhite};
    align-self: flex-start;
  }
`;
