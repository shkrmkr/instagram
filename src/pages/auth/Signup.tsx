import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';
import { StyledButton } from '../../components/StyledButton';
import { TextField } from '../../components/TextField';
import { useAuthStore } from '../../store/auth.store';
import { SignupInput } from '../../types';
import logoImg from '../../../asset/images/logo.png';
import { StyledAuthForm, StyledErrorMessage, StyledForm } from './sharedStyles';

const validationSchema: SchemaOf<SignupInput> = object().shape({
  email: string().email().required(),
  fullName: string().required(),
  username: string().max(30).required(),
  password: string().min(6).max(255).required(),
});

export const Signup = () => {
  const { signup, error, isLoading } = useAuthStore();
  const {
    formState: { isValid },
    register,
    handleSubmit: makeHandleSubmit,
  } = useForm<SignupInput>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = makeHandleSubmit((fieldValues) => signup(fieldValues));

  return (
    <StyledAuthForm>
      <h1>
        <img src={logoImg} alt="Instagram" />
      </h1>

      <StyledForm onSubmit={handleSubmit}>
        <TextField label="Email Address" {...register('email')} />
        <TextField label="Full Name" {...register('fullName')} />
        <TextField label="Username" {...register('username')} />
        <TextField label="Password" type="password" {...register('password')} />
        <StyledButton disabled={!isValid || isLoading} type="submit">
          Sign Up
        </StyledButton>
      </StyledForm>

      {error && (
        <StyledErrorMessage>{error.response?.data.message}</StyledErrorMessage>
      )}
    </StyledAuthForm>
  );
};
