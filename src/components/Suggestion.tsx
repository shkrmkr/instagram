import React from 'react';
import styled from 'styled-components';
import { User } from '../types';
import { StyledAvatar } from './StyledAvatar';
import { StyledButton } from './StyledButton';

interface Props {
  user: User;
}

export const Suggestion = ({ user }: Props) => {
  return (
    <StyledSuggestions>
      <StyledAvatar
        to={`/p/${user.username}`}
        size={32}
        $profilePictureUrl={user.profilePictureUrl}
      />
      <p>{user.username}</p>
      <StyledButton inversed>follow</StyledButton>
    </StyledSuggestions>
  );
};

const StyledSuggestions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & + & {
    margin-top: 1rem;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
`;
