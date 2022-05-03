import React, { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';

import Posts from '@/components/Posts/Posts';
import Profile from '@/components/Profile/Profile';
import { AuthContext } from '@/firebase/authContext';
import { useUserProfileQuery } from '@/graphql/generated';

const UserProfile = () => {
  const { userName } = useContext(AuthContext);
  const router = useRouter();
  const { username } = router.query;
  const { data, loading, error } = useUserProfileQuery({
    skip: !router.isReady,
    variables: {
      take: 20,
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
      {data?.userFromUserName && (
        <Profile loginUser={userName} {...data.userFromUserName} isFollowing={data.isFollowing} />
      )}
      {data?.postUser && <Posts posts={data.postUser} />}
    </>
  );
};

export default UserProfile;
