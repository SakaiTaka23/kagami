import React, { FC } from 'react';

import { Divider, Grid, ListItem, ListItemText, Typography } from '@mui/material';
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
    <>
      <ListItem>
        <ListItemText
          primary={
            <Link href={`/${userName}`} passHref>
              <Grid container>
                <Typography component='span' variant='subtitle1'>
                  {accountName}
                </Typography>
                <Typography component='span' variant='subtitle1' color='gray'>{`@${userName}`}</Typography>
              </Grid>
            </Link>
          }
          secondary={
            <Link href={`/${userName}/${id}`} passHref>
              <>
                <Typography component='span'>{content}</Typography>
                <Typography component='span' color='info'>
                  {createdAt.year()}
                </Typography>
              </>
            </Link>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default Post;
