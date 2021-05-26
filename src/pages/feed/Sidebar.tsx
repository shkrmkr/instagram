import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { api } from '../../api';
import { Avatar } from '../../components/Avatar';
import { useAuthStore } from '../../store/auth.store';
import { Suggestions, User } from '../../types';
import { Suggestion } from './sidebar/Suggestion';

export const Sidebar = () => {
  const { user } = useAuthStore();
  const [suggestions, setSuggestions] = useState<Suggestions | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.getSuggestions();
        setSuggestions(data);
      } catch (error) {
        // TODO: toast에 에러 표시
        console.log(error);
      }
    })();
  }, []);

  const handleToggleFollow = (username: User['username']) => {
    api.toggleFollow(username);
  };

  return (
    <StyledSidebar>
      {user && <Avatar user={user} size={56} showUsername />}

      <h3>Suggestions For You</h3>

      {!suggestions ? (
        <Skeleton count={5} height={40} />
      ) : (
        <>
          {suggestions.map((suggestion) => (
            <Suggestion
              key={suggestion.username}
              suggestion={suggestion}
              handleToggleFollow={() => handleToggleFollow(suggestion.username)}
            />
          ))}
        </>
      )}
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  grid-column: 5 / 7;
  font-size: 1.3rem;
  align-self: flex-start;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.common.greyDarkest};
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
