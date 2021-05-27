import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import avatarPlaceholder from '../../asset/images/avatar-placeholder.jpg';
import { User } from '../types';

interface Props {
  user: User;
  size?: number; // diameter in px
  showUsername?: boolean;
}

export const Avatar = ({ user, size = 30, showUsername }: Props) => {
  return (
    <StyledAvatar to={`/${user.username}`} size={size}>
      <img
        src={user.profilePictureUrl || avatarPlaceholder}
        alt={`${user.username}'s profile`}
      />
      {showUsername && <p>{user.username}</p>}
    </StyledAvatar>
  );
};

const StyledAvatar = styled(Link)<Pick<Props, 'size'>>`
  ${({ theme }) => css`
    color: ${theme.colors.common.black};
  `}
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  min-width: 0px;

  img {
    border-radius: 50%;
    ${({ size }) => css`
      height: ${size}px;
      width: ${size}px;
    `}
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
  }
`;
