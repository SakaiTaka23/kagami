import React, { FC } from 'react';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import Link from 'next/link';

type Props = {
  content: string;
  createdAt: string;
  user: {
    accountName: string;
    userName: string;
  };
};

const toHashtagLink = (txt: string) => {
  return txt.split(/(\n|\s)/g).map((t, i) => {
    if (t === '\n') {
      return <br key={i} />;
    }
    if (t.startsWith('#')) {
      return (
        <Link key={i} href={`${t}`}>
          <a>{t}</a>
        </Link>
      );
    }
    return `${t} `;
  });
};

const Detail: FC<Props> = (post) => {
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

export default Detail;
