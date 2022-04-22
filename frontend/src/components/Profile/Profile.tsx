import React, { FC } from 'react';

import { Typography } from '@mui/material';

import FollowButton from './FollowButton';

type Props = {
  userName: string;
  accountName: string;
  isFollowing: boolean;
};

const Profile: FC<Props> = ({ userName, accountName, isFollowing }) => {
  return (
    <>
      <FollowButton isFollowing={isFollowing} userName={userName} />
      <Typography variant='h5'>{`${userName}`}</Typography>
      <Typography variant='h5'>{`${accountName}`}</Typography>
    </>
  );
};

export default Profile;
