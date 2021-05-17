import React from 'react';
import styled from 'styled-components';
import { User } from '../types';
import { Avatar } from './Avatar';
import { StyledButton } from './StyledButton';

interface Props {
  user: User;
}

export const Suggestion = ({ user }: Props) => {
  return (
    <StyledSuggestion>
      <Avatar user={user} size={32} showUsername />
      <StyledButton inversed>follow</StyledButton>
    </StyledSuggestion>
  );
};

const StyledSuggestion = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;
