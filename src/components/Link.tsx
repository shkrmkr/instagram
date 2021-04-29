import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  text-decoration: none;
`;
