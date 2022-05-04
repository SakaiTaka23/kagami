import React, { FC } from 'react';

import { Container, CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormProvider, useForm } from 'react-hook-form';

import AccountNameInput from '../Inputs/AccountNameInput';
import ProfileInput from '../Inputs/ProfileInput';

type Props = {
  accountName: string;
  profile: string;
};

const ProfileEdit: FC<Props> = ({ accountName, profile }) => {
  const methods = useForm({
    defaultValues: {
      accountName,
      profile,
    },
  });

  const submit = (data: Props) => {
    console.log(data);
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
        <Typography component='h1' variant='h5'>
          Edit Profile
        </Typography>
        <FormProvider {...methods}>
          <Box component='form' onSubmit={methods.handleSubmit(submit)} sx={{ mt: 3 }}>
            <AccountNameInput />
            <ProfileInput />
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default ProfileEdit;
