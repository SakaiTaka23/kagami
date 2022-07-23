import React, { useContext } from 'react';

import { Button, Typography } from '@mui/material';
import Link from 'next/link';

import { AuthContext } from '@/firebase/authContext';

export const TemplateCreateLimit = () => {
  const { userName } = useContext(AuthContext);
  return (
    <>
      <Typography variant='h4'>Only 10 template can be owned by one user.</Typography>
      <Typography variant='h4'>Please delete one of your templates</Typography>
      <Link href={`/${userName}`}>
        <Button>Go Home</Button>
      </Link>
    </>
  );
};
