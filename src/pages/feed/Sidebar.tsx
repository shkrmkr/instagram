import React from 'react';
import styled from 'styled-components';
import { StyledAvatar } from '../../components/StyledAvatar';
import { Suggestion } from '../../components/Suggestion';
import { useAuthStore } from '../../store/auth.store';
import { User } from '../../types';

const sugg: User[] = [
  {
    id: 'sdfsdfdsfsdf',
    username: 'shkrmkr',
    createdAt: new Date().toDateString(),
    email: 'shkrmkr@gmail.com',
    fullName: 'user name',
  },
  {
    id: 'fdsfsdfsdfdsghgtfjf',
    username:
      'shkrmkr213dsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    createdAt: new Date().toDateString(),
    email: 'shkrmkr213@gmail.com',
    fullName: 'user name',
  },
];

export const Sidebar = () => {
  const { user } = useAuthStore();

  return (
    <StyledSidebar>
      {user && (
        <div className="user">
          <StyledAvatar
            to={`/p/${user.username}`}
            $profilePictureUrl={user.profilePictureUrl}
            size={56}
          />
          <p>{user.username}</p>
        </div>
      )}
      <div className="suggestions">
        <h3>Suggestions For You</h3>
        {sugg.map((user) => (
          <Suggestion user={user} key={user.id} />
        ))}
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  grid-column: 5 / 7;
  font-size: 1.4rem;
  font-weight: 600;

  .user {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 2rem;

    p {
      text-overflow: ellipsis;
      overflow: hidden;
      flex: 1;
    }
  }

  .suggestions {
    h3 {
      color: ${({ theme }) => theme.colors.common.greyDarkest};
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
