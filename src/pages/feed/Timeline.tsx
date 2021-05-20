import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { api } from '../../api';
import { Post as PostType } from '../../types';
import { Post } from './timeline/Post';

export const Timeline = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.getPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
