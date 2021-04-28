import styled, { css } from 'styled-components';
import heroImg from '../../../asset/images/home-phones.png';

export const HeroLeft = styled.div`
  background-image: url(${heroImg});
  width: 374px;
  height: 617px;
  position: relative;

  img {
    position: absolute;
    top: 99px;
    left: 111px;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 2s ease;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 2s ease;
  }

  @media screen and (max-width: 875px) {
    display: none;
  }
`;

export const HeroRight = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.common.white};
    border: 1px solid ${theme.colors.common.grey};
    border-radius: ${theme.borderRadius.sm};
  `};

  width: 35rem;
  padding: 4rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 img {
    width: 175px;
  }

  form {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    border: none;
    background-color: ${({ theme }) => theme.colors.common.offWhite};
    align-self: flex-start;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.common.danger};
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`;
