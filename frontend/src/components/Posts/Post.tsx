import React, { FC } from 'react';

import { Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';

type Props = {
  id: string;
  content: string;
  createdAt: string;
  user: {
    accountName: string;
    userName: string;
  };
};

const Post: FC<Props> = (post) => {
  const { accountName, userName } = post.user;
  const { id, content } = post;
  const createdAt = dayjs(post.createdAt).add(1, 'month');

  return (
    <Link href={`/${userName}/${id}`} passHref>
      <Paper>
        <Typography>{accountName}</Typography>
        <Typography>{userName}</Typography>
        <Typography>{content}</Typography>
        <Typography>{`${createdAt.year()}-${createdAt.month()}`}</Typography>
      </Paper>
    </Link>
  );
};

export default Post;
