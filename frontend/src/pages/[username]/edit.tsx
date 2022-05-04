import React, { useContext } from 'react';

import { useRouter } from 'next/router';

import ProfileEdit from '@/components/Profile/EditForm';
import { AuthContext } from '@/firebase/authContext';
import { useEditProfileQuery } from '@/graphql/generated';

const EditProfile = () => {
  const { userName, isLoading } = useContext(AuthContext);
  const router = useRouter();
  const { data, loading, error } = useEditProfileQuery({
    skip: !router.isReady,
  });

  if (loading || isLoading || !router.isReady) return <p>Loading...</p>;
  if (userName !== router.query.username) {
    router.push('/404');
  }
  if (error) return <p>Error</p>;

  return <>{data?.userFromToken && <ProfileEdit {...data?.userFromToken} />}</>;
};

export default EditProfile;
