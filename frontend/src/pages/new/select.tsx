import React, { useContext } from 'react';

import { TemplateSelector } from '@/components/Templates';
import { AuthContext } from '@/firebase/authContext';
import { useTemplateSelectionQuery } from '@/graphql/generated';

const SelectPostStyle = () => {
  const { useAuthGuard, userName } = useContext(AuthContext);
  useAuthGuard();
  const { data, loading } = useTemplateSelectionQuery({
    variables: {
      userName,
    },
  });
  if (loading) return <p>Loading...</p>;

  return <>{data && <TemplateSelector likeList={data.likeList} templateUser={data.templateUser} />}</>;
};

export default SelectPostStyle;
