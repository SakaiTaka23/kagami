import React from 'react';

import ProfileEdit from '@/components/Profile/EditForm';
import { useEditProfileQuery } from '@/graphql/generated';

const EditProfile = () => {
  const { data, loading, error } = useEditProfileQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <>{data?.userFromToken && <ProfileEdit {...data?.userFromToken} />}</>;
};

export default EditProfile;
