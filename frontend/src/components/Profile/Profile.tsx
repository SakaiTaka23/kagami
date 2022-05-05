import React, { FC, useContext } from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

import { AuthContext } from '@/firebase/authContext';

import FollowButton from './FollowButton';

type Props = {
  userName: string;
  accountName: string;
  isFollowing: boolean;
  profile: string;
};

const Profile: FC<Props> = ({ userName, accountName, isFollowing, profile }) => {
  const { userName: loginUser } = useContext(AuthContext);

  return (
    <>
      {userName === loginUser ? (
        <Grid container justifyContent='flex-end' alignItems='flex-start'>
          <Link href={`/${userName}/edit`} passHref>
            <Button>Edit</Button>
          </Link>
        </Grid>
      ) : (
        <Grid container justifyContent='flex-end' alignItems='flex-start'>
          <FollowButton isFollowing={isFollowing} userName={userName} />
        </Grid>
      )}
      <Box sx={{ mb: 2 }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{`${accountName}`}</Typography>
        <Typography variant='subtitle1' color='gray'>{`@${userName}`}</Typography>
      </Box>
      <Typography variant='subtitle1'>{`${profile}`}</Typography>
    </>
  );
};

export default Profile;
