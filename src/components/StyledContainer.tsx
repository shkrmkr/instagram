import styled from 'styled-components';

export const StyledContainer = styled.div<{ padding?: string }>`
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')};
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
