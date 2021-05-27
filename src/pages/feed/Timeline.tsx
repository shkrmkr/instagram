import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { usePostStore } from '../../store/feed.store';
import { Post } from './timeline/Post';

export const Timeline = () => {
  const { feedPosts, isLoading, getPosts } = usePostStore();

  useEffect(() => {
    (async () => {
      try {
        await getPosts();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [getPosts]);

  return (
    <StyledTimeline>
      {isLoading ? (
        <Skeleton height={400} />
      ) : feedPosts.length === 0 ? (
        <p>follow people to see posts</p>
      ) : (
        feedPosts.map((post) => <Post post={post} key={post.id} />)
      )}
    </StyledTimeline>
  );
};

const StyledTimeline = styled.main`
  grid-column: 1 / 5;

  @media screen and (max-width: 1000px) {
    grid-column: span 6;
  }
`;
