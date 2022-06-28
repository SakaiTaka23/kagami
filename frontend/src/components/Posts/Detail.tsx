import React, { FC } from 'react';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';

import { toHashtagLink } from './ToHashtagLink';

type Props = {
  content: string;
  createdAt: string;
  user: {
    accountName: string;
    userName: string;
  };
};

export const Detail: FC<Props> = (post) => {
  const { accountName, userName } = post.user;
  const { content } = post;
  const createdAt = dayjs(post.createdAt);
  return (
    <>
      <Grid container direction='column'>
        <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>{`${accountName}`}</Typography>
        <Typography variant='subtitle1' color='gray'>{`@${userName}`}</Typography>
      </Grid>
      <Box sx={{ my: 2 }}>
        <Typography>{toHashtagLink(content)}</Typography>
      </Box>
      <Typography color='gray' sx={{ mb: 2 }}>{`${createdAt.format('HH')}:${createdAt.format(
        'mm'
      )}・${createdAt.year()}/${createdAt.format('MM')}/${createdAt.format('DD')}`}</Typography>
    </>
  );
};
