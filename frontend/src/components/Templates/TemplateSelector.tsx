import React, { FC } from 'react';

import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { TemplateContainer } from './TemplateContainer';

type Props = {
  likeList: {
    content: string;
  }[];
  templateUser: {
    content: string;
  }[];
};

export const TemplateSelector: FC<Props> = ({ likeList, templateUser }) => {
  const router = useRouter();

  const startBlank = () => {
    router.replace('/new?template=blank');
  };

  const NoTemplateMessage: FC = () => {
    return <Typography variant='h6'>No Template Stored</Typography>;
  };

  return (
    <>
      <Typography variant='h4'>Blank</Typography>
      <Button onClick={startBlank}>Start</Button>
      <Typography variant='h4'>Your Template</Typography>
      {templateUser.length === 0 ? <NoTemplateMessage /> : <TemplateContainer contents={templateUser} />}
      <Typography variant='h4'>Favorite Template</Typography>
      {likeList.length === 0 ? <NoTemplateMessage /> : <TemplateContainer contents={likeList} />}
    </>
  );
};
