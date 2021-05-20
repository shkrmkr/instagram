import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Sidebar } from './feed/Sidebar';
import { Timeline } from './feed/Timeline';

export const FeedPage = () => {
  return (
    <>
      <Header />
      <StyledGrid>
        <Timeline />
        <Sidebar />
      </StyledGrid>
    </>
  );
};

const StyledGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem;

  @media screen and (max-width: 1000px) {
    max-width: 600px;
    padding: 0;
  }
`;
