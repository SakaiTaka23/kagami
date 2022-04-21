import React, { useEffect } from 'react';

import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Profile from '@/components/Profile/Profile';
import { useUserProfileQuery } from '@/graphql/generated';

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const { data, loading, error } = useUserProfileQuery({
    skip: !router.isReady,
    variables: {
      userName: String(username),
    },
  });

  useEffect(() => {
    if (loading === false && data?.userFromUserName === null) {
      router.replace('/404');
    }
  }, [loading, data, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Typography variant='h3'>Profile</Typography>
      {data?.userFromUserName && <Profile {...data.userFromUserName} isFollowing={data.isFollowing} />}
    </>
  );
};

export default UserProfile;
