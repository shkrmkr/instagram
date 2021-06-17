import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { api } from '../api';
import { Avatar } from '../components/Avatar';
import { Header } from '../components/Header';
import { useAuthStore } from '../store/auth.store';
import { UserProfile } from '../types';

export const ProfilePage = () => {
  const { params } = useRouteMatch<{ username: string }>();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState(false);
  const { user } = useAuthStore();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const { data } = await api.getUserProfile(params.username);
        setUserProfile(data);
      } catch (error) {
        setError(true);
      }
    })();
  }, [params.username]);

  if (error) {
    return (
      <>
        <Header />
        <StyledError>
          <h2>Sorry, this page isn&apos;t available.</h2>
          <div>
            The link you followed may be broken, or the page may have been
            removed. <Link to="/">Go back to Instagram.</Link>
          </div>
        </StyledError>
      </>
    );
  }

  if (userProfile) {
    return (
      <>
        <Header />
        <StyledProfile>
          <div className="profile">
            <Avatar user={userProfile} size={150} />
            <div className="profile__right">
              <div className="profile__username">
                <h2>{userProfile.username}</h2>
                {userProfile.username === user?.username ? (
                  <Link className="button" to="/accounts/edit">
                    Edit Profile
                  </Link>
                ) : userProfile.isFollowedByUser ? (
                  <button className="button button--primary">follow</button>
                ) : (
                  <button className="button">unfollow</button>
                )}
              </div>

              <ul className="profile__info">
                <li>
                  <span>{userProfile.postCount}</span> posts
                </li>
                <li>
                  <span>{userProfile.followerCount}</span> followers
                </li>
                <li>
                  <span>{userProfile.followerCount}</span> following
                </li>
              </ul>
            </div>
          </div>

          <div className="gallery">
            {userProfile.posts.map((post) => (
              <Link
                className="gallery-item"
                key={post.id}
                to={{ pathname: `/p/${post.id}`, state: { modal: true } }}
              >
                <img
                  src={post.imageSrc}
                  alt={`post from ${userProfile.username}`}
                />
                <div className="gallery-item__info">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>12</span>
                  </span>

                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>123</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </StyledProfile>
      </>
    );
  }

  return null;
};

const StyledError = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  div {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }
`;

const StyledProfile = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  .profile {
    display: flex;
    gap: 10rem;
    max-width: 800px;
    margin: 0 auto;

    &__username {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;

      h2 {
        font-size: 3rem;
        font-weight: 300;
      }

      .button {
        ${({ theme }) => css`
          background-color: transparent;
          border: 1px solid ${theme.colors.common.grey};
          color: ${theme.colors.common.black};
          border-radius: ${theme.borderRadius.md};
        `}
        font-size: 1.5rem;
        font-weight: 500;
        text-decoration: none;
        padding: 0.5rem 1.5rem;
      }

      .button--primary {
        ${({ theme }) => css`
          background-color: ${theme.colors.primary.main};
          border: none;
          color: ${theme.colors.primary.text};
          border-radius: ${theme.borderRadius.md};
        `}
      }
    }

    &__info {
      font-size: 1.5rem;
      list-style: none;
      display: flex;
      gap: 5rem;

      span {
        font-weight: bold;
      }
    }
  }

  .gallery {
    margin: 5rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .gallery-item {
      width: 100%;
      padding-top: 100%;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .gallery-item__info {
      position: absolute;
      color: ${({ theme }) => theme.colors.common.white};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: none;
      justify-content: center;
      align-items: center;

      span {
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        align-items: center;
      }

      span:first-of-type {
        margin-right: 1rem;
      }

      svg {
        height: 24px;
        width: 24px;
        margin-right: 5px;
      }
    }

    .gallery-item:hover .gallery-item__info {
      display: flex;
    }
  }
`;
