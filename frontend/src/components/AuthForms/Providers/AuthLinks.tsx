import React from 'react';

import { Button, Grid } from '@mui/material';

import { useFirebase } from '@/firebase/useFirebase';

export const AuthLinks = () => {
  const { SignInGoogle } = useFirebase();

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Button variant='contained' fullWidth onClick={SignInGoogle} sx={{ mt: 4 }}>
        Sign in with Google
      </Button>
    </Grid>
  );
};
