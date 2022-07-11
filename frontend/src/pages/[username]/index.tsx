import React from 'react';

import { useRouter } from 'next/router';

import { Profile, ProfileTabs } from '@/components/Profile';
import { useUserProfileQuery } from '@/graphql/generated';

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const { data, loading, error } = useUserProfileQuery({
    skip: !router.isReady,
    variables: {
      take: 20,
      userName: String(username),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error || data?.userFromUserName === null) {
    router.replace('/404');
  }

  return (
    <>
      {data?.userFromUserName && <Profile {...data.userFromUserName} isFollowing={data.isFollowing} />}
      {data?.postUser && data.templateUser && <ProfileTabs posts={data.postUser} templates={data.templateUser} />}
    </>
  );
};

export default UserProfile;
