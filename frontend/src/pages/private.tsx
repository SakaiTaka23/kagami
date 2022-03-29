import React, { useContext } from 'react';

import { AuthContext } from '@/firebase/authContext';
import { useUserFromTokenQuery } from '@/graphql/generated';

const Private = () => {
  const { data, loading, error } = useUserFromTokenQuery();
  const { useAuthGuard } = useContext(AuthContext);
  useAuthGuard();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{`user id : ${data?.userFromToken.id}`}</div>;
};

export default Private;
