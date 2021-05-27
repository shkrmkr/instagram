/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { Avatar } from '../components/Avatar';
import { PostActions } from '../components/PostActions';
import { StyledButton } from '../components/StyledButton';
import { usePostStore } from '../store/feed.store';
import { Comment } from './post/Comment';

export const PostPage = () => {
  const history = useHistory();
  const [commentInput, setCommentInput] = useState('');
  const { params } = useRouteMatch<{ postId: string }>();
  const {
    currentPost,
    getCurrentPost,
    addComment,
    toggleLike,
  } = usePostStore();
  const commentInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = document.getElementById('root')!;
    root.style.overflowY = 'hidden';
    getCurrentPost(parseInt(params.postId));

    return () => {
      root.style.overflowY = 'scroll';
    };
  }, [params.postId, getCurrentPost]);

  if (!currentPost) {
    return null;
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addComment(currentPost.id, commentInput);
    setCommentInput('');
  };

  return (
    <StyledPostPage onClick={() => history.goBack()}>
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        className="modal"
      >
        <div className="post-image">
          <img
            src={currentPost.imageSrc}
            alt={`${currentPost.user.username}'s post on ${currentPost.createdAt}`}
          />
        </div>

        <div className="post-info">
          <div className="header">
            <Avatar showUsername user={currentPost.user} />
          </div>

          <div className="comments">
            {/* caption of the post */}
            <Comment
              user={currentPost.user}
              body={currentPost.caption}
              createdAt={currentPost.createdAt}
            />

            {currentPost.comments.map((comment) => (
              <Comment
                key={comment.id}
                user={comment.user}
                body={comment.body}
                createdAt={comment.createdAt}
              />
            ))}
          </div>

          <PostActions
            isLikedByUser={currentPost.isLikedByUser}
            handleComment={() => {
              commentInputRef.current?.focus();
            }}
            handleLike={() => {
              toggleLike(currentPost.id);
            }}
          />

          <div className="footer">
            <p className="like-count">
              {currentPost.totalLikes === 1
                ? `1 like`
                : `${currentPost.totalLikes} likes`}
            </p>

            <p className="created-at">
              {format(currentPost.createdAt, 'en_US')}
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                ref={commentInputRef}
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Add a comment..."
              />
              <StyledButton inversed disabled={commentInput.length === 0}>
                Post
              </StyledButton>
            </form>
          </div>
        </div>
      </div>
    </StyledPostPage>
  );
};

const StyledPostPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;

  .modal {
    background-color: ${({ theme }) => theme.colors.common.offWhite};
    max-width: 900px;
    display: flex;
  }

  .post-image {
    width: 100%;
    flex: 1;
    background-color: #000;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .post-info {
    width: 335px;
  }

  .header {
    padding: 1.5rem;
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    min-height: 223px;
    max-height: 400px;
    overflow-y: scroll;
    border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};

    /* hide scrollbar */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .footer {
    .like-count {
      font-size: 1.4rem;
      font-weight: bold;
      margin: 1rem 0 1rem 1.5rem;
    }

    .created-at {
      color: ${({ theme }) => theme.colors.common.greyDarkest};
      font-size: 1.1rem;
      margin: 0 0 1.5rem 1.5rem;
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
