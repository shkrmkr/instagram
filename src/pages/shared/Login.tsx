import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';
import { StyledButton } from '../../components/StyledButton';
import { TextField } from '../../components/TextField';
import { useAuthStore } from '../../store/auth.store';
import { LoginInput } from '../../types';
import logoImg from '../../../asset/images/logo.png';
import { StyledAuthForm, StyledErrorMessage, StyledForm } from './sharedStyles';

const formSchema: SchemaOf<LoginInput> = object().shape({
  email: string().email().required(),
  password: string().min(6).required(),
});

export const Login = () => {
  const { login, error, isLoading } = useAuthStore();
  const {
    formState: { isValid },
    register,
    handleSubmit: makeHandleSubmit,
  } = useForm<LoginInput>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const handleSubmit = makeHandleSubmit((fieldValues) => login(fieldValues));

  return (
    <StyledAuthForm>
      <h1>
        <img src={logoImg} alt="Instagram" />
      </h1>

      <StyledForm onSubmit={handleSubmit}>
        <TextField label="Email Address" type="text" {...register('email')} />
        <TextField label="Password" type="password" {...register('password')} />
        <StyledButton disabled={!isValid || isLoading} type="submit">
          Log In
        </StyledButton>
      </StyledForm>

      {error && (
        <StyledErrorMessage>{error.response?.data.message}</StyledErrorMessage>
      )}
    </StyledAuthForm>
  );
};
