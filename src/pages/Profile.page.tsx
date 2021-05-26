import React from 'react';
import { useRouteMatch } from 'react-router';
import styled from 'styled-components';

export const ProfilePage = () => {
  const { params } = useRouteMatch<{ username: string }>();

  return <StyledProfile>{params.username}</StyledProfile>;
};

const StyledProfile = styled.div`
  font-size: 2rem;
`;
