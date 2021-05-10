import React from 'react';
import styled from 'styled-components';

export const Timeline = () => {
  return <StyledTimeline>i am the timeline</StyledTimeline>;
};

const StyledTimeline = styled.main`
  grid-column: 1 / 5;

  @media screen and (max-width: 1000px) {
    grid-column: span 6;
  }
`;
