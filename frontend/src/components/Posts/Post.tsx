import React, { FC } from 'react';

import { ListItem, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';

type Props = {
  id: string;
  content: string;
  user: {
    accountName: string;
    userName: string;
  };
};

const Post: FC<Props> = (post) => {
  const { accountName, userName } = post.user;
  const { id, content } = post;
  return (
    <ListItem>
      <ListItemText
        primary={
          <>
            <Typography>{accountName}</Typography>
            <Typography>{userName}</Typography>
          </>
        }
        secondary={
          <Link href={`/${userName}/${id}`} passHref>
            <Typography component='span'>{content}</Typography>
          </Link>
        }
      />
    </ListItem>
  );
};

export default Post;
