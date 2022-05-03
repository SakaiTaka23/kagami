import React, { FC } from 'react';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import FollowButton from './FollowButton';

type Props = {
  loginUser: string;
  userName: string;
  accountName: string;
  isFollowing: boolean;
  profile: string;
};

const Profile: FC<Props> = ({ loginUser, userName, accountName, isFollowing, profile }) => {
  return (
    <>
      {userName === loginUser ? (
        ''
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
