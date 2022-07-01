import React from 'react';

import { Typography } from '@mui/material';

import Templates from '@/components/Templates/Templates';
import { useTemplateListQuery } from '@/graphql/generated';

const TemplateList = () => {
  const { data, loading, error } = useTemplateListQuery({
    variables: {
      take: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Typography variant='h3' sx={{ mb: 3 }}>
        TemplateList
      </Typography>
      {data?.templateList && <Templates templates={data?.templateList} />}
    </>
  );
};

export default TemplateList;
