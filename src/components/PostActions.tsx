import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isLikedByUser: boolean;
  handleLike: () => void;
  handleComment: () => void;
}

export const PostActions = ({
  handleLike,
  isLikedByUser,
  handleComment,
}: Props) => {
  return (
    <StyledPostActions>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${isLikedByUser ? 'liked' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handleLike}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleLike();
          }
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="button"
        tabIndex={0}
        onClick={handleComment}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleComment();
          }
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </StyledPostActions>
  );
};

const StyledPostActions = styled.div`
  height: 4rem;
  padding: 1rem 1rem 0;
  display: flex;
  gap: 1rem;

  svg {
    height: 100%;
    cursor: pointer;
  }

  svg.liked {
    ${({ theme }) => css`
      fill: ${theme.colors.common.danger};
      color: ${theme.colors.common.danger};
    `}
  }
`;
