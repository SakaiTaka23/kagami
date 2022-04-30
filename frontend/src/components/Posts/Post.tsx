import React, { FC } from 'react';

import { Paper, Typography } from '@mui/material';
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
  const createdAt = new Date(post.createdAt);

  return (
    <Link href={`/${userName}/${id}`} passHref>
      <Paper>
        <Typography>{accountName}</Typography>
        <Typography>{userName}</Typography>
        <Typography>{content}</Typography>
        <Typography>{`${createdAt.getMonth()}-${createdAt.getDate()}`}</Typography>
      </Paper>
    </Link>
  );
};

export default Post;
