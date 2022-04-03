import React, { FC } from 'react';

import { Paper, Typography } from '@mui/material';

type Props = {
  content: string;
  user: {
    accountName: string;
    userName: string;
  };
};

const Post: FC<Props> = (post) => {
  const { accountName, userName } = post.user;
  const { content } = post;
  return (
    <Paper>
      <Typography>{accountName}</Typography>
      <Typography>{userName}</Typography>
      <Typography>{content}</Typography>
    </Paper>
  );
};

export default Post;
