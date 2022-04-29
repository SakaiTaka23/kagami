import React, { FC } from 'react';

import { Divider, Grid, ListItem, ListItemText, Typography } from '@mui/material';
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
              <Typography component='span'>{content}</Typography>
            </Link>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default Post;
