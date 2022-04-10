import React, { FC } from 'react';

import { Typography } from '@mui/material';

type Props = {
  content: string;
  user: {
    accountName: string;
    userName: string;
  };
};

const Detail: FC<Props> = (post) => {
  const { accountName, userName } = post.user;
  const { content } = post;
  return (
    <>
      <Typography>{`${accountName} / ${userName}`}</Typography>
      <Typography>{content}</Typography>
    </>
  );
};

export default Detail;
