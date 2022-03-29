import * as React from 'react';

import { Avatar, CssBaseline, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { useFirebase } from '@/firebase/useFirebase';

import SubmitButton from './Button/SubmitButton';
import EmailInput from './Inputs/EmailInput';
import NameInput from './Inputs/NameInput';
import PasswordInput from './Inputs/PasswordInput';

type SubmitData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpForm() {
  const methods = useForm<SubmitData>();
  const { SignUp } = useFirebase();

  const submit: SubmitHandler<SubmitData> = (data) => {
    SignUp(data.name, data.email, data.password);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <FormProvider {...methods}>
          <Box component='form' onSubmit={methods.handleSubmit(submit)} sx={{ mt: 3 }}>
            <NameInput />
            <EmailInput />
            <PasswordInput />
            <SubmitButton />
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
}
