import styled, { css } from 'styled-components';

interface StyledButtonProps {
  color?: 'primary';
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, color = 'primary' }) => css`
    background-color: ${theme.colors[color].main};
    color: ${theme.colors[color].text};
    border-radius: ${theme.borderRadius.md};
    &:disabled {
      background-color: ${theme.colors.primary.disabled};
    }
  `};

  cursor: pointer;
  padding: 0.5em 2em;
  border: none;
  font-weight: bold;

  &:disabled {
    cursor: default;
  }
`;
