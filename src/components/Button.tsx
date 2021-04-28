import styled, { css } from 'styled-components';

export interface StyledButtonProps {
  color?: 'primary';
}

export const Button = styled.button<StyledButtonProps>`
  ${({ theme, color = 'primary' }) => css`
    background-color: ${theme.colors[color].main};
    color: ${theme.colors[color].text};
    border-radius: ${theme.borderRadius.md};
    &:disabled {
      background-color: ${theme.colors.primary.disabled};
    }
  `};

  padding: 0.5em 2em;
  border: none;
  font-weight: bold;
`;
