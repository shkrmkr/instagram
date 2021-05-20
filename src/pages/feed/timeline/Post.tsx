import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar } from '../../../components/Avatar';
import { Post as PostType } from '../../../types';

interface Props {
  post: PostType;
}

export const Post = ({ post }: Props) => {
  return (
    <StyledPost>
      <div className="header">
        <Avatar user={post.user} showUsername />
      </div>
      <img
        src={post.imageSrc}
        alt={`Image from ${post.user} on ${post.createdAt}`}
      />
    </StyledPost>
  );
};

const StyledPost = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.common.black};
    border: 1px solid ${theme.colors.common.grey};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.common.white};
  `};

  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;

  .header {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};
  }
`;
