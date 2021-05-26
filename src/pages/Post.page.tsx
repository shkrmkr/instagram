/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import styled from 'styled-components';

export const PostPage = () => {
  const history = useHistory();
  const { params } = useRouteMatch<{ postId: string }>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = document.getElementById('root')!;

    root.style.overflowY = 'hidden';

    return () => {
      root.style.overflowY = 'scroll';
    };
  }, []);

  return (
    <StyledPostPage onClick={() => history.goBack()}>
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        className="modal"
      >
        {params.postId}
      </div>
    </StyledPostPage>
  );
};

const StyledPostPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: ${({ theme }) => theme.colors.common.offWhite};
    height: 50%;
    width: 50%;
  }
`;
