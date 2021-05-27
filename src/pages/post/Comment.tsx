import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { Avatar } from '../../components/Avatar';
import { User } from '../../types';

interface Props {
  user: User;
  body: string;
  createdAt: string;
}

export const Comment = ({ user, body, createdAt }: Props) => {
  return (
    <StyledComment>
      <Avatar user={user} />

      <div className="text">
        <p>
          <Link className="username" to={`/${user.username}`}>
            {user.username}
          </Link>
          {body}
        </p>

        <p className="created-at">{format(createdAt, 'en_US')}</p>
      </div>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  /* hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .username {
    text-decoration: none;
    font-weight: bold;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.common.black};

    &:hover {
      text-decoration: underline;
    }
  }

  .created-at {
    font-size: 1.1rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.common.greyDarkest};
  }
`;
