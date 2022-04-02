import React, { FC } from 'react';

import { Paper, Typography } from '@mui/material';

type Props = {
  content: string;
  user: {
    name: string;
  };
};

const Post: FC<Props> = (post) => {
  const { name } = post.user;
  const { content } = post;
  return (
    <Paper>
      <Typography>{name}</Typography>
      <Typography>{content}</Typography>
    </Paper>
  );
};

export default Post;
