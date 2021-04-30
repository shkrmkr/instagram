import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';
import { StyledButton } from '../../components/StyledButton';
import { TextField } from '../../components/TextField';
import { StyledErrorMessage, StyledForm } from './sharedStyles';

interface FieldValues {
  email: string;
  password: string;
}

const formSchema: SchemaOf<FieldValues> = object().shape({
  email: string().email().required(),
  password: string().min(6).required(),
});

export const Login = () => {
  const [error, setError] = useState<null | string>(null);
  const {
    formState: { isValid, isSubmitting },
    register,
    setError: setFieldError,
    handleSubmit: makeHandleSubmit,
  } = useForm<FieldValues>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const handleSubmit = makeHandleSubmit(async (fieldValues) => {
    try {
      const res = await fetch('/api/auth/login', {
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
