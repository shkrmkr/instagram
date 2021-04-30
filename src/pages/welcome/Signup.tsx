import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';
import { StyledButton } from '../../components/StyledButton';
import { TextField } from '../../components/TextField';
import { StyledErrorMessage, StyledForm } from './sharedStyles';

interface FieldValues {
  email: string;
  fullName: string;
  username: string;
  password: string;
}

const validationSchema: SchemaOf<FieldValues> = object().shape({
  email: string().email().required(),
  fullName: string().required(),
  username: string().max(30).required(),
  password: string().min(6).max(255).required(),
});

export const Signup = () => {
  const [error, setError] = useState<null | string>(null);
  const {
    formState: { isValid, isSubmitting },
    register,
    setError: setFieldError,
    handleSubmit: makeHandleSubmit,
  } = useForm<FieldValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = makeHandleSubmit(async (fieldValues) => {
    try {
      const res = await fetch('/api/auth/signup', {
        body: JSON.stringify(fieldValues),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw data;
      }
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
        <TextField label="Email Address" {...register('email')} />
        <TextField label="Full Name" {...register('fullName')} />
        <TextField label="Username" {...register('username')} />
        <TextField label="Password" type="password" {...register('password')} />
        <StyledButton disabled={!isValid && !isSubmitting} type="submit">
          Sign Up
        </StyledButton>
      </StyledForm>

      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </>
  );
};
