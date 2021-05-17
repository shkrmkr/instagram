import styled, { css } from 'styled-components';

export const StyledForm = styled.form`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

export const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.common.danger};
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;

  &.scale-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  &.scale-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 5000ms ease;
  }
`;

export const StyledAuthModeSwitcher = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.common.white};
    border: 1px solid ${theme.colors.common.grey};
    border-radius: ${theme.borderRadius.sm};
  `};
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-size: 1.4rem;

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
  }
`;

export const StyledAuthFormContainer = styled.div`
  @media screen and (max-width: 450px) {
    border: none;
    background-color: ${({ theme }) => theme.colors.common.offWhite};
    align-self: flex-start;
  }
`;

export const StyledAuthForm = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.common.white};
    border: 1px solid ${theme.colors.common.grey};
    border-radius: ${theme.borderRadius.sm};
  `};
  padding: 4rem 4rem 2rem;
  margin-bottom: 1rem;
  flex-direction: column;
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 img {
    width: 175px;
  }

  @media screen and (max-width: 450px) {
    border: none;
    background-color: ${({ theme }) => theme.colors.common.offWhite};
    align-self: flex-start;
  }
`;
