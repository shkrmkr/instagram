import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar } from '../../../components/Avatar';
import { StyledButton } from '../../../components/StyledButton';
import { User } from '../../../types';

interface Props {
  suggestion: User;
  handleToggleFollow: React.MouseEventHandler<HTMLButtonElement>;
}

export const Suggestion = ({ suggestion, handleToggleFollow }: Props) => {
  const [following, setFollowing] = useState(false);

  return (
    <StyledSuggestion>
      <Avatar user={suggestion} size={32} showUsername />
      <StyledButton
        inversed
        onClick={(e) => {
          setFollowing((prev) => !prev);
          handleToggleFollow(e);
        }}
        color={following ? 'dimmed' : 'primary'}
      >
        {following ? 'unfollow' : 'follow'}
      </StyledButton>
    </StyledSuggestion>
  );
};

const StyledSuggestion = styled.div`
  display: flex;
  gap: 1rem;

  ${StyledButton} {
    padding: 0;
    font-size: inherit;
  }
`;
