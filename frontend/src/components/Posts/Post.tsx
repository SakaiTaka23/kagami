import React, { FC } from 'react';

import { Divider, Grid, ListItem, ListItemText, Typography } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
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
  dayjs.extend(relativeTime);
  const { accountName, userName } = post.user;
  const { id, content } = post;
  const past = dayjs(post.createdAt).fromNow(true);

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Link href={`/${userName}`} passHref>
              <Grid container>
                <Typography component='span' variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                  {`${accountName} `}
                </Typography>
                <Typography component='span' variant='subtitle1' color='gray'>{`@${userName} ${past}`}</Typography>
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
