import React, { FC } from 'react';

import { Typography } from '@mui/material';

type Props = {
  content: string;
  createdAt: string;
  user: {
    accountName: string;
    userName: string;
  };
};

const Detail: FC<Props> = (post) => {
  const { accountName, userName } = post.user;
  const { content, createdAt } = post;
  return (
    <>
      <Typography>{`${accountName} / ${userName}`}</Typography>
      <Typography>{content}</Typography>
      <Typography>{createdAt}</Typography>
    </>
  );
};

export default Detail;
