import React, { FC } from 'react';

import { List } from '@mui/material';

import { Post } from './Post';

type Props = {
  posts: {
    id: string;
    content: string;
    createdAt: string;
    user: {
      accountName: string;
      userName: string;
    };
  }[];
};

export const Posts: FC<Props> = (props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {props.posts?.map((post, i) => {
        return <Post key={i} {...post} />;
      })}
    </List>
  );
};
