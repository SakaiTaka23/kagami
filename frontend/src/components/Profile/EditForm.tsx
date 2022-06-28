import React, { FC } from 'react';

import { Container, CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import { useUpdateUserProfileMutation } from '@/graphql/generated';

import { SubmitButton } from '../Button';
import { AccountNameInput, ProfileInput } from '../Inputs';

type Props = {
  accountName: string;
  profile: string;
};

export const ProfileEdit: FC<Props> = ({ accountName, profile }) => {
  const router = useRouter();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const methods = useForm({
    defaultValues: {
      accountName,
      profile,
    },
  });

  const submit = (data: Props) => {
    updateUserProfile({
      variables: {
        profileEditInput: {
          accountName: data.accountName,
          profile: data.profile,
        },
      },
    }).then((res) => {
      router.push(`/${res.data?.updateUserProfile.userName}`);
    });
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
            <SubmitButton />
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};
