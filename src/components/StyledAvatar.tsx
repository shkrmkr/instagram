import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import avatarPlaceholder from '../../asset/images/avatar-placeholder.jpg';

interface Props {
  $profilePictureUrl: string | undefined;
  size?: number; // diameter in px
}

export const StyledAvatar = styled(Link)<Props>`
  ${({ theme, $profilePictureUrl = avatarPlaceholder, size = 30 }) => css`
    color: ${theme.colors.common.black};
    background: url(${$profilePictureUrl}) no-repeat center / contain;
    height: ${size}px;
    width: ${size}px;
  `}

  border-radius: 50%;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
`;
