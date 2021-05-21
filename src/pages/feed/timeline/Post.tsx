import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Avatar } from '../../../components/Avatar';
import { useFeedStore } from '../../../store/feed.store';
import { Post as PostType } from '../../../types';

interface Props {
  post: PostType;
}

export const Post = ({ post }: Props) => {
  const { toggleLike } = useFeedStore();

  const handleLike = () => toggleLike(post.id);

  return (
    <StyledPost>
      <div className="header">
        <Avatar user={post.user} showUsername />
      </div>

      <img
        src={post.imageSrc}
        alt={`Image from ${post.user} on ${post.createdAt}`}
      />

      <div className="actions">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${post.isLikedByUser ? 'liked' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleLike}
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
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>

      <div className="footer">
        <p className="bold">
          {post.totalLikes === 1 ? '1 Like' : `${post.totalLikes} likes`}
        </p>
        <p>
          <Link className="bold link" to={`/p/${post.user.username}`}>
            {post.user.username}
          </Link>
          {post.caption}
        </p>
      </div>
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

  .footer {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 1.4rem;
  }

  .bold {
    font-weight: bold;
  }

  .link {
    color: ${({ theme }) => theme.colors.common.black};
    text-decoration: none;
    margin-right: 5px;

    &:hover {
      text-decoration: underline;
    }
  }

  .actions {
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
  }
`;
