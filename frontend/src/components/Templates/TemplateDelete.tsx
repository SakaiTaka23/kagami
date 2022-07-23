import React, { FC } from 'react';

import { Button } from '@mui/material';
import { useRouter } from 'next/router';

import { useDeleteTemplateMutation } from '@/graphql/generated';

type Props = {
  id: string;
};

export const TemplateDelete: FC<Props> = ({ id }) => {
  const router = useRouter();
  const [submit] = useDeleteTemplateMutation({
    variables: {
      deleteTemplateId: id,
    },
  });
  const handleDelete = () => {
    submit().then(() => {
      router.push('/templates');
    });
  };

  return <Button onClick={() => handleDelete()}>Delete This Template</Button>;
};
