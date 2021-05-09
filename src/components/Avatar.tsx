import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  profilePictureUrl: string;
}

export const Avatar = ({ profilePictureUrl }: Props) => {
  return <StyledAvatar profilePictureUrl={profilePictureUrl} />;
};

const StyledAvatar = styled.div<Props>`
  ${({ profilePictureUrl }) => css`
    background: url(${profilePictureUrl}) no-repeat center / contain;
  `};
  cursor: pointer;
  height: 22px;
  width: 22px;
  border: none;
  border-radius: 50%;
`;
