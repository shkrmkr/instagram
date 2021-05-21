import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { useFeedStore } from '../../store/feed.store';
import { Post } from './timeline/Post';

export const Timeline = () => {
  const { posts, getPosts } = useFeedStore();

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
      {!posts ? (
        <Skeleton height={400} />
      ) : posts.length === 0 ? (
        <p>follow people to see posts</p>
      ) : (
        posts.map((post) => <Post post={post} key={post.id} />)
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
