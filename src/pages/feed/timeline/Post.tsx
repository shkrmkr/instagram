import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { format } from 'timeago.js';
import { Avatar } from '../../../components/Avatar';
import { PostActions } from '../../../components/PostActions';
import { StyledButton } from '../../../components/StyledButton';
import { usePostStore } from '../../../store/feed.store';
import { Post as PostType } from '../../../types';

interface Props {
  post: PostType;
}

export const Post = ({ post }: Props) => {
  const [commentInput, setCommentInput] = useState('');
  const { toggleLike, addComment } = usePostStore();
  const history = useHistory();

  const handleLike = () => toggleLike(post.id);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addComment(post.id, commentInput);
    setCommentInput('');
  };

  return (
    <StyledPost>
      <div className="header">
        <Avatar user={post.user} showUsername />
      </div>

      <img
        src={post.imageSrc}
        alt={`Image from ${post.user} on ${post.createdAt}`}
      />

      <PostActions
        isLikedByUser={post.isLikedByUser}
        handleLike={handleLike}
        handleComment={() => {
          history.push(`/p/${post.id}`, { modal: true });
        }}
      />

      <div className="footer">
        <div className="post-data">
          <p className="bold">
            {post.totalLikes === 1 ? '1 like' : `${post.totalLikes} likes`}
          </p>

          <p>
            <Link className="bold link" to={`/${post.user.username}`}>
              {post.user.username}
            </Link>
            {post.caption}
          </p>

          {post.comments.length > 2 && (
            <Link
              className="bold link link--grey"
              to={{ pathname: `/p/${post.id}`, state: { modal: true } }}
            >
              View all {post.comments.length} comments
            </Link>
          )}

          {post.comments.slice(0, 2).map((comment) => (
            <p key={comment.id}>
              <Link className="bold link" to={`/${comment.user.username}`}>
                {comment.user.username}
              </Link>
              {comment.body}
            </p>
          ))}

          {<p className="created-at">{format(post.createdAt, 'en_US')}</p>}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add a comment..."
          />
          <StyledButton inversed disabled={commentInput.length === 0}>
            Post
          </StyledButton>
        </form>
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
  overflow: hidden;
  flex-direction: column;

  .header {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};
  }

  .footer {
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 1.4rem;
  }

  .post-data {
    padding: 1rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .created-at {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.common.greyDarkest};
  }

  .bold {
    font-weight: bold;
  }

  .grey {
    color: ${({ theme }) => theme.colors.common.greyDarkest};
  }

  .link {
    color: ${({ theme }) => theme.colors.common.black};
    text-decoration: none;
    margin-right: 5px;

    &:hover {
      text-decoration: underline;
    }

    &--grey {
      color: ${({ theme }) => theme.colors.common.greyDarkest};
    }
  }

  form {
    border-top: 1px solid ${({ theme }) => theme.colors.common.grey};
    display: flex;

    input {
      padding: 2rem;
      border: none;
      flex: 1;

      &:focus {
        outline: none;
      }
    }

    ${StyledButton} {
      padding: 2rem;

      &:disabled {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary.disabled};
      }
    }
  }
`;
