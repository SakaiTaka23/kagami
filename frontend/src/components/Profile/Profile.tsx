import React, { FC } from 'react';

import { Typography } from '@mui/material';

import FollowButton from './FollowButton';

type Props = {
  userName: string;
  accountName: string;
};

const Profile: FC<Props> = ({ userName, accountName }) => {
  return (
    <>
      <FollowButton />
      <Typography variant='h5'>{`${userName}`}</Typography>
      <Typography variant='h5'>{`${accountName}`}</Typography>
    </>
  );
};

export default Profile;
