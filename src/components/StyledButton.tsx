import styled, { css } from 'styled-components';

interface StyledButtonProps {
  color?: 'primary';
  inversed?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, color = 'primary', inversed = false }) => css`
    background-color: ${theme.colors[color].main};
    color: ${theme.colors[color].text};
    border-radius: ${theme.borderRadius.md};
    &:disabled {
      background-color: ${theme.colors.primary.disabled};
    }

    ${inversed
      ? css`
          background-color: transparent;
          color: ${theme.colors.primary.main};
        `
      : ''}
  `};

  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5em 1em;
  border: none;
  font-weight: bold;

  &:disabled {
    cursor: default;
  }
`;
