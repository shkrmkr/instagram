import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ROUTES from '../constants/routes';
import logoImg from '../../asset/images/logo.png';
import { useAuthStore } from '../store/auth.store';
import { StyledContainer } from './StyledContainer';
import { Avatar } from './Avatar';
import { StyledButton } from './StyledButton';

export const Header = () => {
  const { user, logout } = useAuthStore();

  return (
    <StyledHeader>
      <StyledContainer padding="0 2rem">
        <div className="header-left">
          <Link to={ROUTES.HOME}>
            <img src={logoImg} alt="Instagram logo" />
          </Link>
        </div>

        <div className="header-right">
          {user ? (
            <>
              <Link to={ROUTES.HOME} aria-label="Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>

              <button aria-label="Logout" onClick={logout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>

              <Avatar user={user} size={24} />
            </>
          ) : (
            <>
              <StyledButton as={Link} to={ROUTES.LOGIN} aria-label="Log in">
                Log In
              </StyledButton>
              <StyledButton
                as={Link}
                inversed
                to={ROUTES.SIGNUP}
                aria-label="Sign up"
              >
                Sign Up
              </StyledButton>
            </>
          )}
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};
  height: 50px;
  background-color: #fff;
  margin-bottom: 3rem;

  .header-left {
    display: flex;
    height: 100%;
    flex: 1;
    align-items: center;

    a {
      height: 60%;
    }

    img {
      height: 100%;
    }
  }

  .header-right {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 100%;

    svg {
      color: ${({ theme }) => theme.colors.common.black};
      height: 24px;
      width: 24px;
    }

    button {
      border: none;
      height: 24px;
      cursor: pointer;
      background-color: transparent;
    }
  }
`;
