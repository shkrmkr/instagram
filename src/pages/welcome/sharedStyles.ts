import styled from 'styled-components';

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
