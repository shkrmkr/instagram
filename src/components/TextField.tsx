import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  type?: 'text' | 'password';
  label: string;
  name: string;
}

export const TextField = (props: Props) => {
  const { type = 'text', name, label } = props;

  return (
    <StyledTextField>
      <input
        aria-label={label}
        aria-required="true"
        autoCapitalize="off"
        autoCorrect="off"
        type={type}
        required
        id={name}
      />
      <label htmlFor={name}>{label}</label>
    </StyledTextField>
  );
};

const StyledTextField = styled.div`
  position: relative;
  font-size: 1.3rem;
  height: 3.6rem;

  input {
    ${({ theme }) => css`
      background-color: ${theme.colors.common.offWhite};
      border: 1px solid ${theme.colors.common.grey};
      border-radius: ${theme.borderRadius.md};
    `}

    width: 100%;
    height: 100%;
    padding-left: 1rem;
    outline: none;
  }

  label {
    color: ${({ theme }) => theme.colors.common.greyDarker};

    position: absolute;
    top: 0.8rem;
    left: 1rem;
    user-select: none;
    transition: all 0.2s;
  }

  input:focus {
    border-color: ${({ theme }) => theme.colors.common.greyDarkest};
  }

  input:valid {
    padding: 1.4rem 0 0.2rem 1rem;
  }

  input:valid + label {
    font-size: 1rem;
    top: 0.2rem;
  }
`;
