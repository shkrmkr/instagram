import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';
import { StyledButton } from '../../components/StyledButton';
import { TextField } from '../../components/TextField';
import { useAuthStore } from '../../store/auth.store';
import { LoginInput } from '../../types';
import { StyledErrorMessage, StyledForm } from './sharedStyles';

const formSchema: SchemaOf<LoginInput> = object().shape({
  email: string().email().required(),
  password: string().min(6).required(),
});

export const Login = () => {
  const [error, setError] = useState<null | string>(null);
  const { login } = useAuthStore();
  const {
    formState: { isValid, isSubmitting },
    register,
    setError: setFieldError,
    handleSubmit: makeHandleSubmit,
  } = useForm<LoginInput>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const handleSubmit = makeHandleSubmit(async (fieldValues) => {
    try {
      await login(fieldValues);
    } catch (error) {
      if (error.field) {
        setFieldError(error.field, {
          types: { validate: false },
          shouldFocus: true,
        });
      }
      setError(error.message);
    }
  });

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <TextField label="Email Address" type="text" {...register('email')} />
        <TextField label="Password" type="password" {...register('password')} />
        <StyledButton disabled={!isValid && !isSubmitting} type="submit">
          Log In
        </StyledButton>
      </StyledForm>

      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </>
  );
};
